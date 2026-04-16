const products = [
  {
    name: "AfriVoice AI",
    status: "Disponible",
    statusColor: "bg-emerald-100 text-emerald-700",
    description:
      "Le premier call center IA pensé pour l'Afrique. Voix naturelle, langues locales, intégrations CRM.",
    features: [
      "Voix naturelle multilingue",
      "Qualification automatique",
      "Intégrations CRM & SMS",
    ],
  },
  {
    name: "ProCall AI",
    status: "Disponible",
    statusColor: "bg-emerald-100 text-emerald-700",
    description:
      "L'agent IA vocal pour vos appels sortants : prospection, relance et prise de rendez-vous automatisées.",
    features: [
      "Campagnes d'appels sortants",
      "Scripts dynamiques",
      "Reporting temps réel",
    ],
  },
  {
    name: "ProDelivery",
    status: "Bientôt",
    statusColor: "bg-brand-100 text-brand-700",
    description:
      "La plateforme IA de pilotage logistique : dispatch intelligent, suivi client et optimisation des tournées.",
    features: [
      "Dispatch intelligent",
      "Suivi client automatisé",
      "Optimisation des tournées",
    ],
  },
];

export default function Products() {
  return (
    <section id="produits" className="relative py-24 sm:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Produits</p>
          <h2 className="section-title">
            Une suite d&apos;outils IA prêts pour la production
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            Des produits pensés pour déployer l&apos;IA en entreprise, sans
            friction et sans compromis.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.name}
              className="relative overflow-hidden rounded-3xl border border-ink-100 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-ink-900">
                  {p.name}
                </h3>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-medium ${p.statusColor}`}
                >
                  {p.status}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                {p.description}
              </p>
              <ul className="mt-6 space-y-2">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-ink-700"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      className="h-4 w-4 shrink-0 text-brand-600"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-ink-900 hover:text-brand-600"
              >
                Découvrir
                <svg
                  viewBox="0 0 20 20"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path
                    d="M5 10h10m0 0l-4-4m4 4l-4 4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-brand-500/10 blur-3xl"
                aria-hidden
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
