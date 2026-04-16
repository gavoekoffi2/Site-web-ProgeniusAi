# Pro Genius AI — Site web

Site web professionnel de **Pro Genius AI**, entreprise spécialisée dans les
solutions d'intelligence artificielle pour les entreprises africaines :
call center IA (AfriVoice AI), agents IA personnalisés, automatisation des
ventes et solutions sur mesure.

## Stack

- [Next.js 14](https://nextjs.org) (App Router)
- [Tailwind CSS](https://tailwindcss.com)
- TypeScript
- Google Fonts (`Inter`) via `next/font`

## Démarrage

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## Scripts

| Commande        | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Lance le serveur de développement |
| `npm run build` | Build de production               |
| `npm run start` | Lance le build de production      |
| `npm run lint`  | Vérifie le code                   |

## Structure

```
app/
  layout.tsx       # Métadonnées, SEO, fonts
  page.tsx         # Page d'accueil
  globals.css      # Styles globaux + composants utilitaires
  sitemap.ts       # Sitemap
  robots.ts        # Règles de crawl
components/
  Navbar.tsx
  Hero.tsx
  Services.tsx
  HowItWorks.tsx
  Products.tsx
  Benefits.tsx
  Testimonials.tsx
  CTA.tsx
  Footer.tsx
```

## Sections

1. **Hero** — Titre, sous-titre, CTA, métriques clés
2. **Services** — Call Center IA, Agents IA, Automatisation ventes, Sur mesure
3. **Comment ça marche** — 4 étapes (Analyse → Mise en place → Automatisation → Résultats)
4. **Produits** — AfriVoice AI, ProCall AI, ProDelivery
5. **Avantages** — Gain de temps, coûts, automatisation, 24/7
6. **Témoignages** — Clients et cas d'usage
7. **CTA final** — Formulaire demande de démo
