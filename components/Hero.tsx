export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-light bg-[size:48px_48px] opacity-60 [mask-image:radial-gradient(ellipse_at_top,black_40%,transparent_75%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl"
        aria-hidden
      />

      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="chip animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            Nouvelle génération d&apos;agents IA pour l&apos;Afrique
          </span>

          <h1 className="mt-6 animate-fade-in-up text-4xl font-semibold tracking-tight text-ink-900 sm:text-6xl lg:text-7xl">
            Automatisez votre business
            <br className="hidden sm:block" /> avec{" "}
            <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-brand-400 bg-clip-text text-transparent">
              l&apos;IA
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl animate-fade-in-up text-lg text-ink-500 sm:text-xl">
            Pro Genius AI développe des solutions intelligentes pour automatiser
            vos ventes, vos appels et vos opérations — conçues pour les
            entreprises africaines.
          </p>

          <div className="mt-10 flex animate-fade-in-up flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary w-full sm:w-auto">
              Commencer
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
            <a href="#services" className="btn-secondary w-full sm:w-auto">
              Voir nos solutions
            </a>
          </div>

          <dl className="mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { k: "24/7", v: "Disponibilité" },
              { k: "-60%", v: "Coûts opérationnels" },
              { k: "+3×", v: "Conversion" },
              { k: "5 min", v: "Déploiement" },
            ].map((s) => (
              <div key={s.v} className="text-center">
                <dt className="text-2xl font-semibold text-ink-900 sm:text-3xl">
                  {s.k}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-ink-400">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="absolute -inset-x-8 -inset-y-4 -z-10 rounded-3xl bg-gradient-to-r from-brand-500/10 via-brand-400/5 to-brand-500/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card">
            <div className="flex items-center gap-2 border-b border-ink-100 bg-ink-50 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-3 text-xs text-ink-400">
                console.progeniusai.com
              </span>
            </div>
            <div className="grid gap-4 p-6 md:grid-cols-3">
              {[
                {
                  label: "Appels traités",
                  value: "2 847",
                  trend: "+12,4%",
                  width: "82%",
                },
                {
                  label: "Leads qualifiés",
                  value: "612",
                  trend: "+28,1%",
                  width: "68%",
                },
                {
                  label: "Taux de résolution",
                  value: "94%",
                  trend: "+3,6 pts",
                  width: "94%",
                },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-ink-100 bg-ink-50/50 p-4"
                >
                  <div className="text-xs uppercase tracking-wider text-ink-400">
                    {m.label}
                  </div>
                  <div className="mt-2 flex items-end justify-between">
                    <div className="text-2xl font-semibold text-ink-900">
                      {m.value}
                    </div>
                    <div className="text-xs font-medium text-emerald-600">
                      {m.trend}
                    </div>
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ink-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-400"
                      style={{ width: m.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
