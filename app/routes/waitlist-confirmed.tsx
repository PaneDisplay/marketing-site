import { Link } from "react-router";
import type { Route } from "./+types/waitlist-confirmed";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Confirm your email — PANE" },
    {
      name: "description",
      content:
        "You're on the PANE waitlist. Confirm your email to unlock immediate access to our exclusive discussion board.",
    },
  ];
}

export function loader({ request }: Route.LoaderArgs) {
  const email = new URL(request.url).searchParams.get("email") ?? "";
  return { email };
}

const STEPS = [
  {
    title: "Check your inbox",
    detail:
      "We just sent a confirmation email. It usually lands within a minute — peek in spam or promotions if you don't see it.",
  },
  {
    title: "Click “Confirm my email”",
    detail:
      "Opening the link verifies your address and locks in your spot on the waitlist.",
  },
  {
    title: "Get instant access to the discussion board",
    detail:
      "The moment you confirm, you're in our exclusive community — where we share product insights and launch timelines first.",
  },
];

export default function WaitlistConfirmed({ loaderData }: Route.ComponentProps) {
  const { email } = loaderData;

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>

            <h1 className="mt-8 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              You&apos;re on the list.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              {email ? (
                <>
                  One last step. We sent a confirmation email to{" "}
                  <span className="font-medium text-zinc-200">{email}</span>.
                  Confirm your address to unlock immediate access to our
                  exclusive discussion board.
                </>
              ) : (
                <>
                  One last step. Confirm your email address to unlock immediate
                  access to our exclusive discussion board.
                </>
              )}
            </p>

            <ol className="mx-auto mt-12 max-w-md space-y-3 text-left">
              {STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className="flex gap-4 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-zinc-700 font-mono text-sm text-zinc-300">
                    {i + 1}
                  </span>
                  <span>
                    <span className="block text-base font-medium text-white">
                      {step.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-zinc-500">
                      {step.detail}
                    </span>
                  </span>
                </li>
              ))}
            </ol>

            <p className="mt-10 text-sm leading-relaxed text-zinc-500">
              Didn&apos;t get the email? Check your spam folder, or{" "}
              <Link
                to="/waitlist"
                className="text-zinc-400 underline-offset-4 transition-colors hover:text-zinc-100 hover:underline"
              >
                try a different address
              </Link>
              .
            </p>

            <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-zinc-600">
              Insights &amp; timelines · Straight from the team
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
