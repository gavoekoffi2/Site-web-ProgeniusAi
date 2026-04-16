const steps = [
  {
    num: "01",
    title: "Analyse de votre besoin",
    description:
      "Nous cartographions vos processus, vos outils et vos objectifs pour identifier les meilleurs leviers d'automatisation.",
  },
  {
    num: "02",
    title: "Mise en place IA",
    description:
      "Nos équipes entraînent et intègrent des agents IA adaptés à votre contexte métier, avec vos données, vos règles et votre ton.",
  },
  {
    num: "03",
    title: "Automatisation",
    description:
      "Appels, relances, qualification, support : vos opérations tournent en continu, sans supervision manuelle.",
  },
  {
    num: "04",
    title: "Résultats",
    description:
      "Tableaux de bord, KPIs et optimisation continue. Vous gagnez en performance, semaine après semaine.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="comment-ca-marche"
      className="relative bg-ink-900 py-24 text-white sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grid-dark bg-[size:48px_48px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
        aria-hidden
      />
      <div className="container-page relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow !text-brand-400">Comment ça marche</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Quatre étapes simples, des résultats mesurables
          </h2>
          <p className="mt-4 text-lg text-ink-300">
            Un déploiement rapide, transparent et parfaitement aligné sur vos
            objectifs business.
          </p>
        </div>

        <ol className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.num}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/60 hover:bg-white/10"
            >
              <div className="flex items-center justify-between">
                <span className="text-5xl font-semibold tracking-tight text-white/15">
                  {s.num}
                </span>
                {i < steps.length - 1 && (
                  <span
                    className="hidden text-ink-500 lg:inline-flex"
                    aria-hidden
                  >
                    <svg
                      viewBox="0 0 20 20"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        d="M5 10h10m0 0l-4-4m4 4l-4 4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                )}
              </div>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">
                {s.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
