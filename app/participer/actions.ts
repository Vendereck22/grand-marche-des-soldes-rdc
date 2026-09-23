"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { isExhibitorCategory, isRegistrationType } from "@/lib/registration-options";

export type RegistrationFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
};

export async function submitRegistration(
  _previousState: RegistrationFormState,
  formData: FormData,
): Promise<RegistrationFormState> {
  const text = (name: string) => String(formData.get(name) ?? "").trim();
  const type = text("type");
  const firstName = text("firstName");
  const lastName = text("lastName");
  const email = text("email").toLowerCase();
  const phone = text("phone");
  const organization = text("organization");
  const exhibitorCategory = text("exhibitorCategory");
  const sector = text("sector");
  const city = text("city");
  const message = text("message");
  const website = text("website");
  const consentToContact = formData.get("consentToContact") === "on";
  const errors: Record<string, string> = {};

  if (website) return { success: true, message: "Votre demande a bien été enregistrée." };
  if (!isRegistrationType(type)) errors.type = "Choisissez un type de participation.";
  if (firstName.length < 2) errors.firstName = "Indiquez votre prénom.";
  if (lastName.length < 2) errors.lastName = "Indiquez votre nom.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Indiquez une adresse e-mail valide.";
  if (phone.replace(/\D/g, "").length < 7) errors.phone = "Indiquez un numéro de téléphone valide.";
  if (!sector) errors.sector = "Sélectionnez votre secteur d’activité.";
  if (type === "EXHIBITOR" && !isExhibitorCategory(exhibitorCategory)) {
    errors.exhibitorCategory = "Sélectionnez votre catégorie d’exposant.";
  }
  if (!consentToContact) errors.consentToContact = "Votre accord est nécessaire pour vous recontacter.";

  if (Object.keys(errors).length > 0) {
    return { success: false, message: "Vérifiez les informations indiquées.", errors };
  }

  try {
    await prisma.registration.create({
      data: {
        type,
        firstName,
        lastName,
        email,
        phone,
        organization: organization || null,
        exhibitorCategory: type === "EXHIBITOR" ? exhibitorCategory : null,
        sector,
        city: city || null,
        message: message || null,
        consentToContact,
      },
    });
    revalidatePath("/admin");
    return {
      success: true,
      message: "Merci, votre demande a bien été enregistrée. Notre équipe vous recontactera prochainement.",
    };
  } catch {
    return {
      success: false,
      message: "Une erreur est survenue pendant l’enregistrement. Veuillez réessayer.",
    };
  }
}
