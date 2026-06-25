import { Link } from "react-router";
import { placeholder } from "../placeholder";
import type { Route } from "./+types/ecosystem";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PANE — The Ecosystem" },
    {
      name: "description",
      content:
        "The display is independent from the brain inside it. Bring your own streaming device, snap on magnetic sound, and swap any part without replacing the screen.",
    },
  ];
}

function Kicker({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500">
      <span className="text-zinc-600">{index}</span>
      <span className="h-px w-8 bg-[var(--color-line)]" />
      <span>{children}</span>
    </div>
  );
}

export default function Ecosystem() {
  return (
    <main>
      <Hero />
      <Statement />
      <BrainSplit />
      <RailBleed />
      <PullQuote />
      <CategoryStrip />
      <ClosingCta />
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* Full-bleed hero                                                     */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden border-b border-[var(--color-line)]">
      <img
        src={placeholder(
          2600,
          1700,
          "FULL-BLEED HERO — display mounted on a concrete wall in a dark room, a streaming brain and magnetic speaker bar visible, dramatic side light",
        )}
        alt="PANE display mounted on a concrete wall in a dark room with a streaming brain and magnetic speaker bar attached, lit dramatically from the side."
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/50 to-[#08080a]/10" />
      <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-16 md:pb-20">
        <div className="animate-fade-up max-w-3xl">
          <Kicker index="ECO">The Ecosystem</Kicker>
          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.0] tracking-tight text-white sm:text-6xl md:text-7xl">
            The display is independent
            <br className="hidden sm:block" /> from the brain inside it.
          </h1>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Asymmetric statement                                                */
/* ------------------------------------------------------------------ */

function Statement() {
  return (
    <section className="border-b border-[var(--color-line)]">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Kicker index="01">Premise</Kicker>
          </div>
          <p className="text-balance text-3xl font-medium leading-snug tracking-tight text-zinc-200 lg:col-span-9 lg:col-start-4 sm:text-4xl">
            Every PANE shares one machined chassis, a standardized brain bay, and
            a magnetic accessory rail.{" "}
            <span className="text-zinc-500">
              Choose the streaming device, the sound, and the mounts that fit
              your setup — then swap any of them later without replacing the
              screen.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Sticky caption + stacked imagery                                    */
/* ------------------------------------------------------------------ */

const BRAINS = [
  "Apple TV",
  "Chromecast",
  "Roku",
  "Nvidia Shield",
  "Gaming PC",
  "Linux Media Server",
  "Game Consoles",
  "Future AI Hardware",
];

function BrainSplit() {
  return (
    <section className="border-b border-[var(--color-line)]">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Kicker index="02">Bring Your Own Brain</Kicker>
              <h2 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white">
                Plug in whatever you already love.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                The brain bay accepts any standard streaming device or your own
                machine. No forced platform, no mandatory account. When
                technology changes, swap the brain — not the entire TV.
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-2">
                {BRAINS.map((brain) => (
                  <li
                    key={brain}
                    className="flex items-center gap-2.5 text-sm text-zinc-300"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                    {brain}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-7 lg:col-start-6">
            <figure className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]">
              <img
                src={placeholder(
                  1300,
                  1000,
                  "DETAIL — rear brain bay open, a streaming device sliding into the dock, machined aluminum interior, technical lighting",
                )}
                alt="The display's rear brain bay open with a streaming device sliding into the dock."
                className="block w-full"
                loading="lazy"
              />
              <figcaption className="border-t border-[var(--color-line)] px-5 py-3 font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                Fig. 02a — Standardized brain bay
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]">
              <img
                src={placeholder(
                  1300,
                  820,
                  "DIAGRAM — line art showing one display outlasting three generations of swappable brain modules over a decade",
                )}
                alt="Line-art diagram of one display outlasting three generations of swappable brain modules over a decade."
                className="block w-full"
                loading="lazy"
              />
              <figcaption className="border-t border-[var(--color-line)] px-5 py-3 font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                Fig. 02b — One screen, many brains
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Edge-to-edge split                                                  */
/* ------------------------------------------------------------------ */

function RailBleed() {
  return (
    <section className="border-b border-[var(--color-line)]">
      <div className="grid items-stretch lg:grid-cols-2">
        <div className="order-2 flex items-center px-6 py-20 lg:order-1 lg:py-32">
          <div className="ml-auto max-w-md">
            <Kicker index="03">The Magnetic Rail</Kicker>
            <h2 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Accessories that snap on in a second.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-400">
              A single magnetic connection runs the length of the display. Sound,
              lighting, cameras — every module shares the same rail, so adding to
              your setup never means starting over. No cables. No brackets. No
              compromises.
            </p>
            <Link
              to="/products/sound"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-200 transition-colors hover:text-white"
            >
              Explore magnetic sound
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
        <div className="order-1 min-h-[60vh] overflow-hidden bg-[var(--color-surface)] lg:order-2">
          <img
            src={placeholder(
              1400,
              1600,
              "FULL-BLEED — macro of a speaker module snapping onto the magnetic rail, magnets and machined edge in sharp focus, dark studio",
            )}
            alt="Macro photograph of a speaker module snapping onto the magnetic rail, with the magnets and machined edge in sharp focus."
            className="block h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Full-bleed pull quote                                               */
/* ------------------------------------------------------------------ */

function PullQuote() {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)]/40">
      <div className="mx-auto max-w-5xl px-6 py-28 text-center md:py-36">
        <p className="text-balance text-3xl font-medium leading-snug tracking-tight text-white sm:text-4xl md:text-5xl">
          The screen is forever.
          <span className="text-zinc-500"> Everything else is upgradeable.</span>
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Category strip                                                      */
/* ------------------------------------------------------------------ */

const STRIP = [
  {
    to: "/products/tv",
    name: "TV",
    note: "The modular display",
    image:
      "CATEGORY — PANE display front-on, thin machined bezel, dark backdrop",
  },
  {
    to: "/products/sound",
    name: "Sound",
    note: "Magnetic speaker systems",
    image: "CATEGORY — magnetic speaker bar, perforated grille, three-quarter",
  },
  {
    to: "/products/accessories",
    name: "Accessories",
    note: "Cables, mounts & the rail",
    image: "CATEGORY — flat lay of cables, mount hardware and rail extension",
  },
];

function CategoryStrip() {
  return (
    <section className="border-b border-[var(--color-line)]">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Kicker index="04">Build Your Setup</Kicker>
            <h2 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Start anywhere. Add as you go.
            </h2>
          </div>
          <Link
            to="/products/tv"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-zinc-200 transition-colors hover:text-white"
          >
            Browse all products
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {STRIP.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] transition-colors hover:border-zinc-600"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[var(--color-ink)]">
                <img
                  src={placeholder(900, 1125, item.image)}
                  alt={item.image}
                  className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between px-5 py-4">
                <div>
                  <p className="text-lg font-medium text-white">{item.name}</p>
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                    {item.note}
                  </p>
                </div>
                <span
                  aria-hidden
                  className="text-zinc-500 transition-transform group-hover:translate-x-1 group-hover:text-white"
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Closing CTA (full-bleed)                                            */
/* ------------------------------------------------------------------ */

function ClosingCta() {
  return (
    <section className="relative w-full overflow-hidden">
      <img
        src={placeholder(
          2600,
          1300,
          "FULL-BLEED — wide shot of the display in a finished living room at dusk, warm and cool light, hardware as the focal point",
        )}
        alt="Wide shot of the PANE display in a finished living room at dusk with the hardware as the focal point."
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[#08080a]/80" />
      <div className="relative mx-auto max-w-3xl px-6 py-28 text-center md:py-36">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          One screen. Every ecosystem.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
          Join the waitlist to be first in line when the modular display ships —
          and help shape which modules we build next.
        </p>
        <div className="mt-10 flex justify-center">
          <Link
            to="/#waitlist"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
          >
            Join the Waitlist
          </Link>
        </div>
      </div>
    </section>
  );
}
