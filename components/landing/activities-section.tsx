import Image from "next/image";

const ACTIVITIES = [
  {
    title: "Exposition & vente",
    description: "Des stands pour découvrir, comparer et acheter directement auprès des marques.",
    image: "/images/activities/exhibition.jpg",
    alt: "Stand de vente installé pour un événement",
  },
  {
    title: "Masterclass",
    description: "Des échanges pratiques avec des experts de l’entrepreneuriat et de la gestion.",
    image: "/images/activities/masterclass.jpg",
    alt: "Intervenante animant une masterclass",
  },
  {
    title: "Tombola géante",
    description: "Des tirages et de nombreux lots pour récompenser les participants.",
    image: "/images/activities/tombola.jpg",
    alt: "Trophée symbolisant les lots de la tombola",
  },
  {
    title: "Ventes flash",
    description: "Des offres limitées et des réductions exceptionnelles annoncées sur place.",
    image: "/images/activities/flash-sales.jpg",
    alt: "Cliente célébrant une offre promotionnelle",
  },
  {
    title: "Rencontres B2B",
    description: "Un cadre privilégié pour nouer des partenariats et développer son réseau.",
    image: "/images/activities/b2b.jpg",
    alt: "Professionnel participant à une rencontre commerciale",
  },
  {
    title: "Jeux & loisirs",
    description: "Des animations conviviales pour faire du salon une expérience familiale.",
    image: "/images/activities/games.jpg",
    alt: "Jeune participant à une activité de loisirs",
  },
] as const;

export function ActivitiesSection() {
  return (
    <section
      id="activities"
      className="brand-ribbon relative isolate scroll-mt-20 overflow-hidden bg-[#f3f3f1] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-intro">
          <div>
            <p className="text-sm font-black uppercase text-brand-red">Au programme</p>
            <h2 className="section-title font-black text-neutral-950">
              Deux jours pour vivre
              <span className="block text-brand-red">le marché autrement</span>
            </h2>
          </div>
          <p className="section-description text-neutral-600">
            Des activités commerciales, formatives et ludiques pensées pour
            multiplier les découvertes et les rencontres.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ACTIVITIES.map((activity, index) => (
            <article
              key={activity.title}
              className="group overflow-hidden rounded-md border border-neutral-900/10 bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                <Image
                  src={activity.image}
                  alt={activity.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-md bg-brand-yellow font-heading text-sm font-black text-neutral-950 shadow-md">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="border-t-4 border-brand-red px-5 py-5 sm:px-6 sm:py-6">
                <h3 className="font-heading text-2xl font-black uppercase text-neutral-950">
                  {activity.title}
                </h3>
                <p className="mt-2 leading-6 text-neutral-600">{activity.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
