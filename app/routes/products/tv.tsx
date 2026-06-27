import { CategoryView } from "../../catalog";
import type { Route } from "./+types/tv";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PANE - TV" },
    {
      name: "description",
      content:
        "The modular PANE display in 45″, 55″, and 65″ - 2K, 4K, or 8K, with standard VESA mounting and a brain bay that accepts whatever you plug in.",
    },
  ];
}

export default function TVPage() {
  return <CategoryView slug="tv" />;
}
