import { CategoryView } from "../../catalog";
import type { Route } from "./+types/sound";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PANE - Sound" },
    {
      name: "description",
      content:
        "Magnetic speaker systems that snap to the accessory rail in a second. Start with Standard and step up to Pro on the same connection.",
    },
  ];
}

export default function SoundPage() {
  return <CategoryView slug="sound" />;
}
