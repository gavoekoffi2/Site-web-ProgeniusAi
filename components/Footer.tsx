import Link from "next/link";

const columns = [
  {
    title: "Produits",
    links: [
      { label: "AfriVoice AI", href: "#produits" },
      { label: "ProCall AI", href: "#produits" },
      { label: "ProDelivery", href: "#produits" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { label: "Services", href: "#services" },
      { label: "Comment ça marche", href: "#comment-ca-marche" },
      { label: "Témoignages", href: "#temoignages" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Demander une démo", href: "#contact" },
      { label: "hello@progeniusai.com", href: "mailto:hello@progeniusai.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-white">
      <div className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold tracking-tight text-ink-900"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink-900 text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                  aria-hidden
                >
                  <path
                    d="M12 2l2.39 4.84L19.8 7.6l-3.9 3.8.92 5.37L12 14.77 7.18 16.77l.92-5.37L4.2 7.6l5.41-.76L12 2z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>
                Pro Genius <span className="text-brand-600">AI</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-500">
              Solutions d&apos;intelligence artificielle pour automatiser les
              ventes, les appels et les opérations des entreprises africaines.
            </p>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <h3 className="text-sm font-semibold text-ink-900">{c.title}</h3>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-ink-500 transition-colors hover:text-ink-900"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ink-100 pt-6 text-sm text-ink-400 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Pro Genius AI — Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-ink-900">
              Confidentialité
            </a>
            <a href="#" className="hover:text-ink-900">
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
