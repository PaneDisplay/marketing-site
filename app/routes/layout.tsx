import { Link, NavLink, Outlet } from "react-router";
import { CATEGORIES } from "../catalog";

const PRODUCT_BLURBS: Record<string, string> = {
  tv: "The modular display - 45/55/65″ in 2K, 4K, or 8K.",
  sound: "Magnetic speaker systems. Standard and Pro.",
  "smart-products": "Optional brains and connected modules.",
  accessories: "Cables, mounts, and the magnetic rail.",
};

function CategoryIcon({ slug }: { slug: string }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (slug) {
    case "tv":
      return (
        <svg {...common}>
          <rect x="2.5" y="4" width="19" height="13" rx="1.5" />
          <path d="M8 20.5h8" />
        </svg>
      );
    case "sound":
      return (
        <svg {...common}>
          <path d="M5 9v6M9 6v12M13 8.5v7M17 5v14M21 9.5v5" />
        </svg>
      );
    case "smart-products":
      return (
        <svg {...common}>
          <rect x="6" y="6" width="12" height="12" rx="1.5" />
          <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M7 8 4 11a3.5 3.5 0 0 0 5 5l1.5-1.5M17 16l3-3a3.5 3.5 0 0 0-5-5l-1.5 1.5" />
          <path d="M9.5 14.5 14.5 9.5" />
        </svg>
      );
  }
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="PANE - home"
    >
      {/* Display glyph - a screen, the part that's "forever" */}
      <span className="grid h-6 w-6 place-items-center rounded-[5px] border border-zinc-700 transition-colors group-hover:border-zinc-400">
        <span className="h-2 w-2.5 rounded-[1px] bg-zinc-300 transition-colors group-hover:bg-white" />
      </span>
      <span className="text-[15px] font-semibold tracking-[0.18em] text-zinc-100">
        PANE
      </span>
    </Link>
  );
}

function ProductMenu() {
  return (
    <div className="group relative">
      <button
        type="button"
        className="flex items-center gap-1.5 text-sm text-zinc-400 transition-colors group-hover:text-zinc-100 group-focus-within:text-zinc-100"
        aria-haspopup="true"
      >
        Product
        <svg
          width="11"
          height="11"
          viewBox="0 0 12 12"
          fill="none"
          className="mt-0.5 text-zinc-500 transition-transform group-hover:rotate-180"
        >
          <path
            d="m3 4.5 3 3 3-3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Mega-menu panel. pt-4 forms a hover bridge to the trigger. */}
      <div className="invisible absolute left-1/2 top-full z-50 w-[600px] -translate-x-1/2 pt-4 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="grid grid-cols-2 gap-1.5 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-2.5 shadow-2xl shadow-black/40">
          {CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              to={`/products/${category.slug}`}
              className="group/item flex gap-3.5 rounded-xl p-3.5 transition-colors hover:bg-[var(--color-surface-2)]"
            >
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[var(--color-line)] bg-[var(--color-ink)] text-zinc-400 transition-colors group-hover/item:text-white">
                <CategoryIcon slug={category.slug} />
              </span>
              <span>
                <span className="block text-sm font-medium text-white">
                  {category.name}
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-zinc-500">
                  {PRODUCT_BLURBS[category.slug]}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[#08080a]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <Wordmark />

        <nav className="hidden items-center gap-8 md:flex">
          <ProductMenu />
          <NavLink
            to="/ecosystem"
            className={({ isActive }) =>
              `text-sm transition-colors hover:text-zinc-100 ${
                isActive ? "text-zinc-100" : "text-zinc-400"
              }`
            }
          >
            Ecosystem
          </NavLink>
        </nav>

        <Link
          to="/waitlist"
          className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
        >
          Join the Waitlist
        </Link>
      </div>
    </header>
  );
}

type FooterLink = { label: string; to: string };

const FOOTER_COLS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "TV", to: "/products/tv" },
      { label: "Sound", to: "/products/sound" },
      { label: "Smart products", to: "/products/smart-products" },
      { label: "Accessories", to: "/products/accessories" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Ecosystem", to: "/ecosystem" },
      { label: "Philosophy", to: "/#philosophy" },
      { label: "Our Promise", to: "/#promise" },
      { label: "The Future", to: "/#waitlist" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Waitlist", to: "/waitlist" },
      { label: "Newsletter", to: "/waitlist" },
      { label: "Support", to: "/#waitlist" },
      { label: "Contact", to: "/#waitlist" },
    ],
  },
];

function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[#08080a]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-4">
            <Wordmark />
            <p className="text-sm leading-relaxed text-zinc-500">
              We make displays - not data collection devices. The screen is
              forever. Everything else is upgradeable.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {FOOTER_COLS.map((col) => (
              <div key={col.title} className="space-y-3">
                <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                  {col.title}
                </p>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--color-line)] pt-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono uppercase tracking-widest">
            © 2026 PANE - Engineered, not marketed
          </p>
          <p className="font-mono uppercase tracking-widest">
            No accounts · No ads · No lock-in
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function SiteLayout() {
  return (
    <div id="top" className="min-h-screen bg-[#08080a] text-zinc-100">
      <TopBar />
      <Outlet />
      <SiteFooter />
    </div>
  );
}
