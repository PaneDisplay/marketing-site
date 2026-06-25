import { Link } from "react-router";
import { placeholder } from "./placeholder";

export type Product = {
  name: string;
  spec: string;
  blurb: string;
  /** Description of the real photo/render that belongs here. */
  image: string;
  badge?: string;
};

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  products: Product[];
};

export const CATEGORIES: Category[] = [
  {
    slug: "tv",
    name: "TV",
    tagline: "The modular display",
    intro:
      "One machined chassis, three sizes, three resolutions. Standard VESA mounting and a brain bay that accepts whatever you plug into it.",
    products: [
      {
        name: "PANE 45",
        spec: '45″ · 2K / 4K / 8K',
        blurb: "The compact display for studios, offices, and second rooms.",
        badge: "From $—",
        image:
          "PRODUCT — PANE 45 display front-on, thin machined aluminum bezel, dark studio backdrop",
      },
      {
        name: "PANE 55",
        spec: '55″ · 2K / 4K / 8K',
        blurb: "The everyday living-room size, balanced for any setup.",
        badge: "From $—",
        image:
          "PRODUCT — PANE 55 display front-on, thin machined aluminum bezel, dark studio backdrop",
      },
      {
        name: "PANE 65",
        spec: '65″ · 4K / 8K',
        blurb: "The home-theater centerpiece, built for the magnetic rail.",
        badge: "From $—",
        image:
          "PRODUCT — PANE 65 display front-on, thin machined aluminum bezel, dark studio backdrop",
      },
    ],
  },
  {
    slug: "sound",
    name: "Sound",
    tagline: "Magnetic speaker systems",
    intro:
      "Speakers that snap to the accessory rail in a second — no cables, no brackets. Start with Standard and step up to Pro on the same connection.",
    products: [
      {
        name: "Magnetic Bar — Standard",
        spec: "Full-range · Magnetic mount",
        blurb: "Clean, room-filling sound tuned for everyday watching.",
        badge: "From $—",
        image:
          "PRODUCT — Standard magnetic speaker bar, perforated aluminum grille, three-quarter view",
      },
      {
        name: "Magnetic Bar — Pro",
        spec: "Multi-driver · Magnetic mount",
        blurb: "Dedicated drivers and a deeper low-end for home theater.",
        badge: "From $—",
        image:
          "PRODUCT — Pro magnetic speaker bar, larger driver array, three-quarter view",
      },
      {
        name: "Magnetic Subwoofer",
        spec: "Wireless · Rail-paired",
        blurb: "Optional low-frequency module that pairs to the rail.",
        badge: "Coming soon",
        image:
          "PRODUCT — magnetic subwoofer module, cylindrical machined body, dark studio",
      },
    ],
  },
  {
    slug: "smart-products",
    name: "Smart products",
    tagline: "Optional brains & modules",
    intro:
      "The display is independent from the brain inside it. Add one of ours, or bring your own — every module is optional and swappable.",
    products: [
      {
        name: "PANE Brain",
        spec: "Streaming module · Brain bay",
        blurb: "Our optional streaming device, if you'd rather not bring one.",
        badge: "Optional",
        image:
          "PRODUCT — PANE Brain streaming module, compact machined block, ports visible",
      },
      {
        name: "Camera Bar",
        spec: "Magnetic · Privacy shutter",
        blurb: "Snap-on camera for calls, with a physical privacy shutter.",
        badge: "Coming soon",
        image:
          "PRODUCT — magnetic camera bar with physical privacy shutter, top-mount",
      },
      {
        name: "Ambient Light Module",
        spec: "Rear-mounted · Rail-powered",
        blurb: "Bias lighting that reacts to on-screen content.",
        badge: "Coming soon",
        image:
          "PRODUCT — rear ambient light module casting a soft glow behind the display",
      },
    ],
  },
  {
    slug: "accessories",
    name: "Accessories",
    tagline: "Cables, mounts & the rail",
    intro:
      "The connective tissue — standard cables, VESA-compatible mounts, and extensions for the magnetic accessory rail. Nothing proprietary you can't replace.",
    products: [
      {
        name: "HDMI 2.1 Cable",
        spec: "48 Gbps · 4K120 / 8K60",
        blurb: "Braided high-bandwidth cable for any brain you connect.",
        badge: "From $—",
        image: "PRODUCT — braided HDMI 2.1 cable coiled, connector detail",
      },
      {
        name: "VESA Mount Kit",
        spec: "Standard pattern · 45–65″",
        blurb: "Tilt wall mount that fits the standard VESA pattern.",
        badge: "From $—",
        image: "PRODUCT — VESA tilt wall mount kit, hardware laid out flat",
      },
      {
        name: "Magnetic Rail Extension",
        spec: "Add-on · Tool-free",
        blurb: "Extend the accessory rail for additional snap-on modules.",
        badge: "From $—",
        image: "PRODUCT — magnetic rail extension segment, machined aluminum",
      },
      {
        name: "Cable Management Kit",
        spec: "Channels · Clips",
        blurb: "Keep the brain and power runs out of sight.",
        badge: "From $—",
        image: "PRODUCT — cable management channels and clips, flat lay",
      },
    ],
  },
];

export function getCategory(slug: string): Category {
  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) throw new Response("Not Found", { status: 404 });
  return category;
}

export function CategoryView({ slug }: { slug: string }) {
  const category = getCategory(slug);

  return (
    <div>
      <header className="border-b border-[var(--color-line)] pb-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500">
          {category.tagline}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {category.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
          {category.intro}
        </p>
      </header>

      <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2">
        {category.products.map((product) => (
          <article
            key={product.name}
            className="flex flex-col bg-[var(--color-surface)]"
          >
            <div className="aspect-[4/3] overflow-hidden bg-[var(--color-ink)]">
              <img
                src={placeholder(900, 675, product.image)}
                alt={product.image}
                className="block h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-lg font-medium text-white">
                  {product.name}
                </h2>
                {product.badge && (
                  <span className="shrink-0 font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                    {product.badge}
                  </span>
                )}
              </div>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                {product.spec}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                {product.blurb}
              </p>
              <Link
                to="/#waitlist"
                className="mt-5 inline-flex w-fit items-center rounded-full border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white"
              >
                Join the waitlist
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
