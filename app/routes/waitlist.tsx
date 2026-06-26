import { Form, Link, redirect } from "react-router";
import type { Route } from "./+types/waitlist";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Join the Waitlist — PANE" },
    {
      name: "description",
      content:
        "Join the PANE waitlist to be first in line when the modular display ships — and help shape what we build next.",
    },
  ];
}

// Dummy waitlist action — does not persist anything yet. Wire to a real
// store later. On success we redirect to the confirmation page so the
// user gets clear next steps for verifying their email.
export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const email = String(formData.get("email") ?? "").trim();

  if (!email || !email.includes("@")) {
    return { error: "Enter a valid email address." };
  }

  return redirect(`/waitlist/confirmed?email=${encodeURIComponent(email)}`);
}

export default function Waitlist({ actionData }: Route.ComponentProps) {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500">
              <span className="h-px w-8 bg-[var(--color-line)]" />
              <span>The Future of TV</span>
              <span className="h-px w-8 bg-[var(--color-line)]" />
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              Put yourself back in control.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              Join the waitlist to be first in line when the modular display
              ships — and help shape what we build next.
            </p>

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

            {actionData?.error && (
              <p className="mt-3 text-sm text-red-400">{actionData.error}</p>
            )}

            <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-zinc-600">
              No spam · No account required · Unsubscribe anytime
            </p>

            <p className="mt-10 text-sm text-zinc-500">
              <Link
                to="/"
                className="text-zinc-400 underline-offset-4 transition-colors hover:text-zinc-100 hover:underline"
              >
                ← Back to home
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
