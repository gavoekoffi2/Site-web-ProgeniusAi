type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
};

const services: Service[] = [
  {
    tag: "AfriVoice AI",
    title: "Call Center IA",
    description:
      "Des agents vocaux intelligents qui répondent, qualifient et convertissent 24/7, en français et en langues locales.",
    icon: (
      <path
        d="M4 5a3 3 0 0 1 3-3h1.27a2 2 0 0 1 1.94 1.515l.8 3.2a2 2 0 0 1-.502 1.9l-1.29 1.29a11 11 0 0 0 5.378 5.378l1.29-1.29a2 2 0 0 1 1.9-.502l3.2.8A2 2 0 0 1 22 15.73V17a3 3 0 0 1-3 3h-1C9.716 20 4 14.284 4 7V5Z"
        fill="currentColor"
      />
    ),
  },
  {
    tag: "Agents IA",
    title: "Agents IA personnalisés",
    description:
      "Entraînés sur vos données et vos processus, ils automatisent le support, les ventes et les opérations internes.",
    icon: (
      <path
        d="M12 2a7 7 0 0 0-7 7v2a4 4 0 0 0-2 3.465V17a3 3 0 0 0 3 3h.5a1.5 1.5 0 0 0 1.5-1.5V12a1.5 1.5 0 0 0-1.5-1.5H6V9a6 6 0 1 1 12 0v1.5h-.5A1.5 1.5 0 0 0 16 12v6.5A1.5 1.5 0 0 0 17.5 20h.5a3 3 0 0 0 3-3v-2.535A4 4 0 0 0 19 11V9a7 7 0 0 0-7-7Z"
        fill="currentColor"
      />
    ),
  },
  {
    tag: "Ventes",
    title: "Automatisation des ventes",
    description:
      "Prospection, relance, qualification : chaque étape de votre pipeline commercial est automatisée par l&apos;IA.",
    icon: (
      <path
        d="M3 13a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7Zm7-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V8Zm7-4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V4Z"
        fill="currentColor"
      />
    ),
  },
  {
    tag: "Sur mesure",
    title: "Solutions sur mesure",
    description:
      "Nous concevons et déployons des architectures IA adaptées à votre secteur, vos volumes et vos contraintes.",
    icon: (
      <path
        d="M12 2 3 7v6c0 5 3.8 9.5 9 10 5.2-.5 9-5 9-10V7l-9-5Zm0 2.2L19 8v5c0 4-2.9 7.6-7 8-4.1-.4-7-4-7-8V8l7-3.8Z"
        fill="currentColor"
      />
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Nos services</p>
          <h2 className="section-title">
            Des solutions IA pensées pour votre croissance
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            Quatre piliers pour automatiser chaque point de contact de votre
            entreprise.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article key={s.title} className="card group">
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink-900 text-white transition-colors group-hover:bg-brand-600">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                    {s.icon}
                  </svg>
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-600">
                  {s.tag}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink-900">
                {s.title}
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed text-ink-500"
                dangerouslySetInnerHTML={{ __html: s.description }}
              />
              <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-ink-900 opacity-0 transition-opacity group-hover:opacity-100">
                En savoir plus
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
