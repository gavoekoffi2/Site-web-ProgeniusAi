const testimonials = [
  {
    quote:
      "AfriVoice AI gère 80% de nos appels entrants. Nos conseillers se concentrent enfin sur les dossiers à forte valeur.",
    name: "Aïcha D.",
    role: "Directrice Opérations",
    company: "Retail Group",
    initials: "AD",
  },
  {
    quote:
      "Déploiement en moins d'une semaine. Notre taux de conversion sur les appels sortants a doublé dès le premier mois.",
    name: "Kouassi M.",
    role: "VP Ventes",
    company: "FinTech Abidjan",
    initials: "KM",
  },
  {
    quote:
      "L'équipe Pro Genius AI comprend parfaitement les réalités africaines. Leur solution parle vraiment nos langues.",
    name: "Fatou S.",
    role: "CEO",
    company: "Health Startup",
    initials: "FS",
  },
];

const useCases = [
  { label: "Appels entrants automatisés", value: "E-commerce" },
  { label: "Prospection B2B", value: "SaaS" },
  { label: "Support client 24/7", value: "Banque" },
  { label: "Prise de rendez-vous", value: "Santé" },
];

export default function Testimonials() {
  return (
    <section id="temoignages" className="relative py-24 sm:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Témoignages</p>
          <h2 className="section-title">
            Ils automatisent déjà avec Pro Genius AI
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            Des entreprises africaines qui ont accéléré leur croissance avec
            nos solutions d&apos;IA.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-ink-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-200"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-brand-500"
                fill="currentColor"
                aria-hidden
              >
                <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h7v-7H5.5a1.67 1.67 0 0 1 1.67-1.67V6Zm10 0A5.17 5.17 0 0 0 12 11.17V18h7v-7h-3.5a1.67 1.67 0 0 1 1.67-1.67V6Z" />
              </svg>
              <blockquote className="mt-4 text-base leading-relaxed text-ink-700">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-ink-900 text-sm font-semibold text-white">
                  {t.initials}
                </span>
                <div>
                  <div className="text-sm font-semibold text-ink-900">
                    {t.name}
                  </div>
                  <div className="text-xs text-ink-400">
                    {t.role} · {t.company}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-ink-100 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
            Cas d&apos;usage
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((u) => (
              <div
                key={u.label}
                className="flex items-center gap-3 rounded-xl bg-ink-50 px-4 py-3"
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-white text-xs font-semibold text-brand-600 shadow-sm">
                  {u.value.slice(0, 2).toUpperCase()}
                </span>
                <div>
                  <div className="text-sm font-medium text-ink-900">
                    {u.label}
                  </div>
                  <div className="text-xs text-ink-400">{u.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
