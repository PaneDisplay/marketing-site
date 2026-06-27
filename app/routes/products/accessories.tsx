import { CategoryView } from "../../catalog";
import type { Route } from "./+types/accessories";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PANE - Accessories" },
    {
      name: "description",
      content:
        "Cables, VESA-compatible mounts, and extensions for the magnetic accessory rail. Nothing proprietary you can't replace.",
    },
  ];
}

export default function AccessoriesPage() {
  return <CategoryView slug="accessories" />;
}
