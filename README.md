# Grand Marché des Soldes RDC

Landing page et système de gestion des inscriptions pour le Grand Marché des Soldes RDC.

## Démarrage local

```bash
npm install
npx prisma generate
npx prisma db push
npm run dev
```

Le site est disponible sur [http://localhost:3000](http://localhost:3000).

## Parcours disponibles

- `/` : landing page de l’événement
- `/participer` : formulaire participant, exposant ou partenaire
- `/admin/connexion` : connexion à l’administration
- `/admin` : tableau de bord des inscriptions
- `/admin/export` : export CSV protégé

## Variables d’environnement

Créer un fichier `.env` avec les valeurs suivantes :

```env
DATABASE_URL="postgresql://utilisateur:mot-de-passe@hote/base?sslmode=require"
ADMIN_EMAIL="contact@newbell-agency.com"
ADMIN_PASSWORD="mot-de-passe-fort"
ADMIN_SESSION_SECRET="secret-aleatoire-long"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
CONTACT_EMAIL="contact@newbell-agency.com"
CONTACT_PHONE="+243892556950"
CONTACT_WEBSITE="https://www.newbell-agency.com"
```

Le fichier `.env` et les fichiers générés par Prisma ne doivent pas être versionnés.

## Mise en production

Le projet utilise PostgreSQL. En production, configurer `DATABASE_URL` avec la connexion Neon, remplacer `NEXT_PUBLIC_SITE_URL` par le domaine public, puis appliquer les migrations Prisma avec `npx prisma migrate deploy`.

## Vérifications

```bash
npm run lint
npm run build
```
