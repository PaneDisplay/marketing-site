import { NavLink, Outlet } from "react-router";
import { CATEGORIES } from "../../catalog";

export default function ProductsLayout() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">
        <aside className="lg:w-56 lg:shrink-0">
          <div className="lg:sticky lg:top-24">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500">
              Products
            </p>
            <nav className="mt-5 flex gap-1 overflow-x-auto pb-1 lg:flex-col lg:gap-0.5 lg:overflow-visible lg:pb-0">
              {CATEGORIES.map((category) => (
                <NavLink
                  key={category.slug}
                  to={`/products/${category.slug}`}
                  className={({ isActive }) =>
                    `whitespace-nowrap rounded-lg px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? "bg-[var(--color-surface)] text-white"
                        : "text-zinc-400 hover:bg-[var(--color-surface)] hover:text-white"
                    }`
                  }
                >
                  {category.name}
                </NavLink>
              ))}
            </nav>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
