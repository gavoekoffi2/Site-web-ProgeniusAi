const benefits = [
  {
    title: "Gain de temps",
    description:
      "Libérez vos équipes des tâches répétitives pour les concentrer sur ce qui compte vraiment.",
    icon: (
      <path
        d="M12 6v6l4 2M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    ),
  },
  {
    title: "Réduction des coûts",
    description:
      "Jusqu'à 60% d'économies sur vos opérations de support et vos campagnes commerciales.",
    icon: (
      <path
        d="M12 3v18M7 7h7a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h8"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    ),
  },
  {
    title: "Automatisation complète",
    description:
      "De la prospection au support, toute votre chaîne de valeur est pilotée par l'IA.",
    icon: (
      <path
        d="M4 7h10M4 12h16M4 17h10M18 5l3 3-3 3M18 14l3 3-3 3"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Disponible 24/7",
    description:
      "Vos agents IA ne dorment jamais : ils répondent à vos clients à toute heure, chaque jour.",
    icon: (
      <path
        d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Zm9-5v5l3 2"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    ),
  },
];

export default function Benefits() {
  return (
    <section id="avantages" className="relative bg-ink-50 py-24 sm:py-32">
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="section-eyebrow">Avantages</p>
            <h2 className="section-title">
              L&apos;IA qui transforme vos résultats
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              Pro Genius AI s&apos;intègre à vos outils existants et commence à
              produire des résultats en quelques jours, pas en quelques mois.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["CRM", "WhatsApp", "Twilio", "HubSpot", "Slack"].map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink-900 text-white transition-colors group-hover:bg-brand-600">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                    {b.icon}
                  </svg>
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink-900">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
