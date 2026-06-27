import { useEffect, useRef, useState } from "react";
import { Form, Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PANE - Finally, a TV that's actually yours." },
    {
      name: "description",
      content:
        "A modular display platform built for the next decade. No forced smart platform, no mandatory account, no built-in ads. Just a beautiful display that works with whatever ecosystem you choose.",
    },
  ];
}

// Dummy waitlist action - does not persist anything yet. Wire to a real
// store later; for now it just acknowledges the submission.
export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const email = String(formData.get("email") ?? "").trim();

  if (!email || !email.includes("@")) {
    return { ok: false as const, email: "", error: "Enter a valid email address." };
  }

  return { ok: true as const, email, error: "" };
}

/** placehold.co helper - keeps the brand bg/fg consistent across placeholders. */
function placeholder(width: number, height: number, label: string) {
  const text = encodeURIComponent(label);
  return `https://placehold.co/${width}x${height}/0e0e11/3f3f46?font=source-sans-pro&text=${text}`;
}

export default function Home({ actionData }: Route.ComponentProps) {
  return (
    <main>
      <Hero />
      <CompatStrip />
      <Manifesto />
      <Product />
      <Philosophy />
      <WhyWeExist />
      <Sound />
      <Promise />
      <Waitlist actionData={actionData} />
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* Shared primitives                                                   */
/* ------------------------------------------------------------------ */

function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500">
      <span className="text-zinc-600">{index}</span>
      <span className="h-px w-8 bg-[var(--color-line)]" />
      <span>{children}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-line)]">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pt-28">
        <div className="animate-fade-up">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-500">
            Modular Display Platform · 45&Prime; / 55&Prime; / 65&Prime;
          </p>
          <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl">
            Finally, a TV that&apos;s actually yours.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Modern TVs have become advertising platforms disguised as hardware.
            We&apos;re building something different - a beautiful display that
            works with whatever ecosystem you choose. No forced smart platform.
            No mandatory account. No built-in ads.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/waitlist"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
            >
              Join the Waitlist
            </Link>
            <Link
              to="/ecosystem"
              className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-7 py-3.5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white"
            >
              Explore the ecosystem
            </Link>
          </div>
        </div>

        {/* Hero product render */}
        <div className="mt-16 animate-fade-up overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]">
          <img
            src="/assets/tv-in-living-room.png"
            alt="A PANE modular display mounted in a living room."
            className="block w-full"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

const COMPAT = [
  "Apple TV",
  "Chromecast",
  "Roku",
  "Nvidia Shield",
  "Gaming PC",
  "Linux Media Server",
  "Future AI Hardware",
];

function CompatStrip() {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)]/40">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-600">
            Bring your own brain
          </span>
          {COMPAT.map((item) => (
            <span
              key={item}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="border-b border-[var(--color-line)]">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionLabel index="00">Positioning</SectionLabel>
        <p className="mt-10 max-w-4xl text-balance text-3xl font-medium leading-snug tracking-tight text-zinc-200 sm:text-4xl md:text-[2.75rem]">
          The display is the most expensive, longest-lasting part of a
          television. Yet today&apos;s TVs are treated as disposable because
          their software ages.{" "}
          <span className="text-zinc-500">
            We&apos;re separating the display from the brain - so when technology
            changes, you swap the brain, not the entire TV.
          </span>
        </p>
      </div>
    </section>
  );
}

const SPECS = [
  {
    k: "Display sizes",
    v: "45″ · 55″ · 65″",
    d: "Standard VESA mounting across every size.",
  },
  {
    k: "Resolution",
    v: "2K · 4K · 8K",
    d: "Choose the panel that fits your room and budget.",
  },
  {
    k: "The brain",
    v: "Bring your own",
    d: "Or add a streaming device at checkout.",
  },
  {
    k: "Magnetic sound",
    v: "Standard · Pro",
    d: "Speaker system snaps on. No cables, no brackets.",
  },
];

function Product() {
  return (
    <section id="product" className="border-b border-[var(--color-line)]">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionLabel index="01">The Product</SectionLabel>
        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              A modular platform built for the next decade.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
              Upgrade the parts you want. Keep the parts you love. Every panel
              shares the same machined chassis and magnetic accessory rail, so
              the system grows with you instead of around you.
            </p>

            <dl className="mt-10 grid gap-px overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2">
              {SPECS.map((spec) => (
                <div key={spec.k} className="bg-[var(--color-surface)] p-6">
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                    {spec.k}
                  </dt>
                  <dd className="mt-2 text-xl font-medium text-white">
                    {spec.v}
                  </dd>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-500">
                    {spec.d}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Exploded view diagram */}
          <div className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]">
            <img
              src="/assets/exploded-view-tv.png"
              alt="Exploded view of the PANE display showing the panel, machined aluminum chassis, magnetic speaker module, and detachable streaming brain."
              className="block w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section id="philosophy" className="border-b border-[var(--color-line)]">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionLabel index="02">Philosophy</SectionLabel>
        <div className="mt-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="order-1 lg:order-2">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Your TV shouldn&apos;t decide how you watch.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
              We believe the display should be independent from the computer
              inside it. Prefer Apple TV? Great. Chromecast? Perfect. Roku,
              Nvidia Shield, a gaming PC, a Linux media server, or whatever ships
              next - plug it in.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {COMPAT.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-3 text-sm text-zinc-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="order-2 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] lg:order-1">
            <img
              src="/assets/rear-io-brain-bay.png"
              alt="The rear of the PANE display showing the modular brain bay and I/O."
              className="block w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Each scroll step pins the same screen while the brain underneath changes. */
const TIMELINE_STEPS = [
  {
    year: "2025",
    gen: "Gen 01",
    serial: "PANE·BR-01",
    title: "The display ships.",
    body: "A reference-grade panel and a brain you can pull out with two thumbs. Day one, it does everything a great TV should.",
  },
  {
    year: "2027",
    gen: "Gen 02",
    serial: "PANE·BR-02",
    title: "The apps move on.",
    body: "Streaming platforms drop support for older silicon. On any other TV, that's the end. Here, you swap a module the size of a paperback.",
  },
  {
    year: "2030",
    gen: "Gen 03",
    serial: "PANE·BR-03",
    title: "New codecs. Faster silicon.",
    body: "A generation of compute lands in the brain bay. The panel on your wall hasn't moved - and still looks brand new.",
  },
  {
    year: "2033",
    gen: "Gen 04",
    serial: "PANE·BR-04",
    title: "Spatial & on-device AI.",
    body: "Whole new categories of experience arrive. Same mounts, same cables, same screen. You opt in for the price of a module.",
  },
  {
    year: "2035",
    gen: "Gen 05",
    serial: "PANE·BR-05",
    title: "Still the best screen in the room.",
    body: "A decade in, four brains retired, zero panels in landfill. The screen is forever. Everything else is upgradeable.",
  },
];

/** Maps how far the user has scrolled *through* a section to a 0–1 value. */
function useScrollProgress(ref: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const measure = () => {
      frame = 0;
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = -el.getBoundingClientRect().top;
      const next = total > 0 ? scrolled / total : 0;
      setProgress(Math.min(1, Math.max(0, next)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ref]);

  return progress;
}

/* Vertical rhythm of the brain reel, in px. */
const REEL_ITEM_H = 92;
const REEL_WINDOW_H = 230;
/* Year nodes are inset from the axis edges so they never clip the viewport. */
const AXIS_PAD = 9;
const yOf = (t: number) => AXIS_PAD + t * (100 - AXIS_PAD * 2);

function WhyWeExist() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef);

  const steps = TIMELINE_STEPS.length;
  // Continuous position along the timeline (0 … steps-1) and the snapped step.
  const head = progress * (steps - 1);
  const active = Math.min(steps - 1, Math.round(head));
  const step = TIMELINE_STEPS[active];
  const reelShift = REEL_WINDOW_H / 2 - (head * REEL_ITEM_H + REEL_ITEM_H / 2);

  return (
    <section
      ref={sectionRef}
      className="relative border-b border-[var(--color-line)] bg-[var(--color-surface)]/40"
      style={{ height: `${steps * 80}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto flex w-full max-w-6xl gap-6 px-6 sm:gap-10">
          {/* --- Vertical time axis: descends with the scroll --- */}
          <div className="relative w-14 shrink-0 self-stretch py-16 sm:w-24">
            <div
              className="absolute left-1/2 w-px -translate-x-1/2 bg-[var(--color-line)]"
              style={{ top: `${yOf(0)}%`, bottom: `${yOf(0)}%` }}
            />
            <div
              className="absolute left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-white/10 to-white/50"
              style={{
                top: `${yOf(0)}%`,
                height: `${head === 0 ? 0 : (head / (steps - 1)) * (100 - AXIS_PAD * 2)}%`,
              }}
            />
            {/* Descending playhead */}
            <div
              className="absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ top: `${yOf(progress)}%` }}
            >
              <span className="block h-3.5 w-3.5 rounded-full bg-white shadow-[0_0_0_5px_rgba(255,255,255,0.12),0_0_20px_rgba(255,255,255,0.5)]" />
            </div>
            {TIMELINE_STEPS.map((s, i) => {
              const reached = head >= i - 0.001;
              const isActive = i === active;
              return (
                <div
                  key={s.year}
                  className="absolute left-1/2 flex -translate-y-1/2 items-center gap-3"
                  style={{ top: `${yOf(i / (steps - 1))}%` }}
                >
                  <span
                    className={`-translate-x-1/2 rounded-full transition-all duration-300 ${
                      isActive
                        ? "h-2.5 w-2.5 bg-white"
                        : reached
                          ? "h-1.5 w-1.5 bg-white/60"
                          : "h-1.5 w-1.5 bg-zinc-700"
                    }`}
                  />
                  <span
                    className={`hidden font-mono text-[11px] tabular-nums tracking-wide transition-colors duration-300 sm:block ${
                      isActive
                        ? "text-white"
                        : reached
                          ? "text-zinc-400"
                          : "text-zinc-600"
                    }`}
                  >
                    {s.year}
                  </span>
                </div>
              );
            })}
          </div>

          {/* --- Stage + narrative --- */}
          <div className="grid flex-1 items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
            {/* The permanent screen, with brains streaming up through the bay */}
            <div className="flex items-center justify-center gap-6 sm:gap-8">
              <div className="relative w-full max-w-xs shrink">
                <div className="relative aspect-[16/10] rounded-md border border-white/10 bg-black p-[3px] shadow-2xl shadow-black/70">
                  <div
                    className="h-full w-full overflow-hidden rounded-[3px]"
                    style={{
                      background:
                        "radial-gradient(120% 90% at 72% 8%, rgba(255,214,156,0.95) 0%, rgba(214,142,86,0.55) 22%, rgba(58,48,38,0.9) 52%, #14110d 100%)",
                    }}
                  />
                  <span className="absolute left-2.5 top-2 font-mono text-[9px] uppercase tracking-[0.22em] text-white/70">
                    Permanent · since 2025
                  </span>
                </div>
                <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">
                  The one thing that stays
                </p>
              </div>

              {/* Vertical brain reel - slides upward as the decade passes */}
              <div
                className="relative shrink-0 overflow-hidden"
                style={{ height: REEL_WINDOW_H, width: 168 }}
              >
                {/* fade masks top & bottom */}
                <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-[var(--color-surface)] to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-[var(--color-surface)] to-transparent" />
                {/* bay slot highlight at the reel's center */}
                <div className="pointer-events-none absolute inset-x-2 top-1/2 z-0 h-[68px] -translate-y-1/2 rounded-lg border border-white/10 bg-white/[0.02]" />
                <div
                  className="absolute inset-x-0 top-0 will-change-transform"
                  style={{ transform: `translateY(${reelShift}px)` }}
                >
                  {TIMELINE_STEPS.map((s, i) => {
                    const dist = Math.abs(i - head);
                    return (
                      <div
                        key={s.year}
                        className="flex items-center justify-center"
                        style={{
                          height: REEL_ITEM_H,
                          opacity: Math.max(0.14, 1 - dist * 0.62),
                        }}
                      >
                        <BrainModule
                          serial={s.serial}
                          gen={s.gen}
                          retired={i < head - 0.5}
                          scale={Math.max(0.84, 1 - dist * 0.1)}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* The step currently in view */}
            <div>
              <SectionLabel index="03">Why We Exist</SectionLabel>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                The screen is forever.
                <br />
                Everything else is upgradeable.
              </h2>

              <div key={active} className="animate-caption-in mt-7">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-semibold tabular-nums tracking-tight text-white sm:text-5xl">
                    {step.year}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                    {step.gen}
                  </span>
                </div>
                <p className="mt-3 text-lg font-medium text-white sm:text-xl">
                  {step.title}
                </p>
                <p className="mt-3 max-w-md leading-relaxed text-zinc-400">
                  {step.body}
                </p>
              </div>

              <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-600">
                Brains retired&nbsp;
                <span className="text-zinc-300">{active}</span> · Screens
                replaced&nbsp;
                <span className="text-zinc-300">0</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrainModule({
  serial,
  gen,
  retired,
  scale,
}: {
  serial: string;
  gen: string;
  retired: boolean;
  scale: number;
}) {
  return (
    <div
      className="relative h-16 w-40 rounded-md border border-white/10 bg-gradient-to-b from-[#26262c] to-[#0f0f13] shadow-lg shadow-black/60"
      style={{ transform: `scale(${scale})` }}
    >
      {/* milled top edge */}
      <div className="absolute inset-x-3 top-1 h-px bg-white/15" />
      {/* I/O ports */}
      <div className="absolute bottom-2.5 left-3 flex gap-1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="h-1 w-1 rounded-full bg-white/25" />
        ))}
      </div>
      {/* etched identifiers */}
      <span className="absolute right-3 top-2.5 font-mono text-[9px] uppercase tracking-[0.18em] text-white/45">
        {gen}
      </span>
      <span className="absolute bottom-2 right-3 font-mono text-[8px] tracking-wide text-white/25">
        {serial}
      </span>
      {retired && (
        <span className="absolute left-2.5 top-2 font-mono text-[8px] uppercase tracking-[0.18em] text-amber-500/60">
          Retired
        </span>
      )}
    </div>
  );
}

const SOUND_TIERS = [
  {
    id: "standard",
    name: "Standard",
    detail: "Full-range magnetic bar tuned for everyday rooms.",
    image: "/assets/speaker-standard-detail.png",
    alt: "Macro detail of the Standard magnetic speaker bar against the machined aluminum edge of the display.",
    specs: [
      { k: "Configuration", v: "2-way · 4 drivers" },
      { k: "Amplification", v: "80W Class-D" },
      { k: "Low-end", v: "Down to 55 Hz" },
      { k: "Best for", v: "Everyday rooms" },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    detail: "Dedicated drivers and deeper low-end for home theater.",
    image: "/assets/speaker-pro-detail.png",
    alt: "Macro detail of the Pro magnetic speaker bar with dedicated drivers against the machined aluminum edge of the display.",
    specs: [
      { k: "Configuration", v: "3-way · 8 drivers" },
      { k: "Amplification", v: "200W Class-D" },
      { k: "Low-end", v: "Down to 35 Hz" },
      { k: "Best for", v: "Home theater" },
    ],
  },
] as const;

function Sound() {
  const [active, setActive] = useState<(typeof SOUND_TIERS)[number]["id"]>(
    "standard",
  );
  const tier =
    SOUND_TIERS.find((t) => t.id === active) ?? SOUND_TIERS[0];

  return (
    <section id="sound" className="border-b border-[var(--color-line)]">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionLabel index="04">Sound That Grows With You</SectionLabel>
        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Speakers that snap on. No cables. No compromises.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
              Our magnetic speaker system attaches seamlessly to the display.
              Start simple, upgrade later - the rail and connection are the same
              whether you run Standard or step up to Pro. Select a tier to
              compare the differences.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {SOUND_TIERS.map((t) => (
                <SoundTier
                  key={t.id}
                  name={t.name}
                  detail={t.detail}
                  active={t.id === active}
                  onSelect={() => setActive(t.id)}
                />
              ))}
            </div>

            {/* Spec readout for the selected tier — static, not a card grid */}
            <div className="mt-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-600">
                {tier.name} specs
              </p>
              <dl key={tier.id} className="mt-3 animate-fade-up">
                {tier.specs.map((spec) => (
                  <div
                    key={spec.k}
                    className="flex items-baseline justify-between gap-4 border-b border-[var(--color-line)] py-3 last:border-b-0"
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                      {spec.k}
                    </dt>
                    <dd className="text-right text-base font-medium text-zinc-100">
                      {spec.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]">
            <img
              key={tier.id}
              src={tier.image}
              alt={tier.alt}
              className="block w-full animate-fade-up"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SoundTier({
  name,
  detail,
  active,
  onSelect,
}: {
  name: string;
  detail: string;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={`rounded-xl border bg-[var(--color-surface)] p-5 text-left transition-colors ${
        active
          ? "border-white ring-1 ring-white/40"
          : "border-[var(--color-line)] hover:border-zinc-600"
      }`}
    >
      <div className="flex items-center justify-between">
        <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
          Tier
        </p>
        <span
          className={`h-2 w-2 rounded-full transition-colors ${
            active ? "bg-white" : "bg-zinc-700"
          }`}
        />
      </div>
      <p className="mt-1 text-xl font-medium text-white">{name}</p>
      <p className="mt-2 text-sm leading-relaxed text-zinc-500">{detail}</p>
    </button>
  );
}

const PROMISES = [
  "No forced accounts",
  "No unnecessary software",
  "No advertisements",
  "No ecosystem lock-in",
];

function Promise() {
  return (
    <section id="promise" className="border-b border-[var(--color-line)]">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionLabel index="05">Our Promise</SectionLabel>
        <h2 className="mt-10 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          We make displays - not data collection devices.
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-4">
          {PROMISES.map((promise, i) => (
            <div key={promise} className="bg-[var(--color-surface)] p-6">
              <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-600">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 text-lg font-medium text-white">{promise}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-zinc-400">
          Just exceptional hardware that stays relevant for years - for gamers,
          movie lovers, privacy advocates, Apple households, Android
          enthusiasts, home theater builders, and anyone tired of bloated smart
          TVs.
        </p>
      </div>
    </section>
  );
}

function Waitlist({ actionData }: { actionData: Route.ComponentProps["actionData"] }) {
  const submitted = actionData?.ok;

  return (
    <section id="waitlist" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel index="06">The Future of TV</SectionLabel>
          <h2 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Put yourself back in control.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Join the waitlist to be first in line when the modular display ships
            - and help shape what we build next.
          </p>

          {submitted ? (
            <div className="mx-auto mt-10 max-w-md rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-5 text-sm text-emerald-300">
              You&apos;re on the list. We&apos;ll reach out to{" "}
              <span className="font-medium text-emerald-200">
                {actionData?.email}
              </span>{" "}
              as we get closer to launch.
            </div>
          ) : (
            <Form
              method="post"
              className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                aria-label="Email address"
                className="w-full rounded-full border border-zinc-700 bg-[var(--color-surface)] px-5 py-3.5 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-zinc-400"
              />
              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
              >
                Join the Waitlist
              </button>
            </Form>
          )}

          {actionData && !actionData.ok && (
            <p className="mt-3 text-sm text-red-400">{actionData.error}</p>
          )}

          <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-zinc-600">
            No spam · No account required · Unsubscribe anytime
          </p>
        </div>
      </div>
    </section>
  );
}
