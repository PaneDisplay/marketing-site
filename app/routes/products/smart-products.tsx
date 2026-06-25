import { CategoryView } from "../../catalog";
import type { Route } from "./+types/smart-products";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PANE — Smart products" },
    {
      name: "description",
      content:
        "Optional brains and connected modules for the PANE display. Add one of ours or bring your own — every module is optional and swappable.",
    },
  ];
}

export default function SmartProductsPage() {
  return <CategoryView slug="smart-products" />;
}
