"use client";

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-ink-900 px-8 py-16 text-center text-white shadow-glow sm:px-16 sm:py-20">
          <div
            className="pointer-events-none absolute inset-0 bg-grid-dark bg-[size:48px_48px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/30 blur-3xl"
            aria-hidden
          />

          <div className="relative mx-auto max-w-3xl">
            <span className="chip border-white/15 bg-white/10 text-white">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
              </span>
              Démarrez en quelques minutes
            </span>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-5xl">
              Lancez votre automatisation
              <br className="hidden sm:block" /> aujourd&apos;hui
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-ink-300">
              Parlez à un expert IA, recevez une démonstration sur mesure et
              déployez votre premier agent en moins d&apos;une semaine.
            </p>

            <form
              className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="email" className="sr-only">
                Email professionnel
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="nom@entreprise.com"
                className="h-12 w-full rounded-full border border-white/15 bg-white/10 px-5 text-sm text-white placeholder:text-ink-300 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/60"
              />
              <button
                type="submit"
                className="h-12 shrink-0 rounded-full bg-white px-6 text-sm font-medium text-ink-900 transition-all hover:bg-brand-400 hover:text-white active:translate-y-px"
              >
                Demander une démo
              </button>
            </form>

            <p className="mt-4 text-xs text-ink-400">
              Pas de carte bancaire. Réponse sous 24h.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
