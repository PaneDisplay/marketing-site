import { Form, Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PANE — Finally, a TV that's actually yours." },
    {
      name: "description",
      content:
        "A modular display platform built for the next decade. No forced smart platform, no mandatory account, no built-in ads. Just a beautiful display that works with whatever ecosystem you choose.",
    },
  ];
}

// Dummy waitlist action — does not persist anything yet. Wire to a real
// store later; for now it just acknowledges the submission.
export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const email = String(formData.get("email") ?? "").trim();

  if (!email || !email.includes("@")) {
    return { ok: false as const, email: "", error: "Enter a valid email address." };
  }

  return { ok: true as const, email, error: "" };
}

/** placehold.co helper — keeps the brand bg/fg consistent across placeholders. */
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
            We&apos;re building something different — a beautiful display that
            works with whatever ecosystem you choose. No forced smart platform.
            No mandatory account. No built-in ads.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
            >
              Join the Waitlist
            </a>
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
            src={placeholder(
              2400,
              1200,
              "HERO RENDER — modular display floating in profile, machined aluminum edge, magnetic speaker bar attached, dark studio lighting",
            )}
            alt="Modular PANE display photographed in profile as an object of design, with a magnetic speaker bar attached and machined aluminum detailing."
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
            We&apos;re separating the display from the brain — so when technology
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
              src={placeholder(
                1200,
                1400,
                "EXPLODED VIEW — technical diagram of display panel, aluminum chassis, magnetic speaker module and detachable brain, labeled engineering callouts",
              )}
              alt="Exploded technical diagram of the PANE display showing the panel, machined aluminum chassis, magnetic speaker module, and detachable streaming brain with engineering callouts."
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
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Your TV shouldn&apos;t decide how you watch.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
              We believe the display should be independent from the computer
              inside it. Prefer Apple TV? Great. Chromecast? Perfect. Roku,
              Nvidia Shield, a gaming PC, a Linux media server, or whatever ships
              next — plug it in.
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

          <div className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]">
            <img
              src={placeholder(
                1000,
                1100,
                "DIAGRAM — rear I/O of display showing the modular brain bay, a streaming device sliding into the dock, clean technical line art",
              )}
              alt="Technical line-art diagram of the display's rear modular brain bay with a streaming device sliding into the dock."
              className="block w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyWeExist() {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)]/40">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionLabel index="03">Why We Exist</SectionLabel>
        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] lg:order-1">
            <img
              src={placeholder(
                1200,
                900,
                "TIMELINE GRAPHIC — display lifespan spanning a decade while three generations of 'brain' modules swap in and out beneath it",
              )}
              alt="Timeline graphic showing a single display lasting a decade while successive generations of brain modules are swapped underneath it."
              className="block w-full"
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              The screen is forever. Everything else is upgradeable.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
              Today&apos;s TVs become obsolete because their apps stop receiving
              updates or manufacturers abandon support. We&apos;re building
              displays that outlive trends, survive platform wars, and put you
              back in control. When technology changes, swap the brain — not the
              entire TV.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sound() {
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
              Start simple, upgrade later — the rail and connection are the same
              whether you run Standard or step up to Pro.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <SoundTier
                name="Standard"
                detail="Full-range magnetic bar tuned for everyday rooms."
              />
              <SoundTier
                name="Pro"
                detail="Dedicated drivers and deeper low-end for home theater."
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]">
            <img
              src={placeholder(
                1100,
                1100,
                "DETAIL SHOT — magnetic speaker bar separating from the display edge, machined aluminum, magnets visible, macro studio lighting",
              )}
              alt="Macro detail of the magnetic speaker bar separating from the machined aluminum edge of the display, with the magnetic mounts visible."
              className="block w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SoundTier({ name, detail }: { name: string; detail: string }) {
  return (
    <div className="rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5">
      <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
        Tier
      </p>
      <p className="mt-1 text-xl font-medium text-white">{name}</p>
      <p className="mt-2 text-sm leading-relaxed text-zinc-500">{detail}</p>
    </div>
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
          We make displays — not data collection devices.
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
          Just exceptional hardware that stays relevant for years — for gamers,
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
            — and help shape what we build next.
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
