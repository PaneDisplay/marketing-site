import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  // Shared top-bar chrome lives in the marketing layout route.
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("ecosystem", "routes/ecosystem.tsx"),

    // Catalog area — a completely different inner layout (sidebar + grid).
    route("products", "routes/products/layout.tsx", [
      index("routes/products/index.tsx"),
      route("tv", "routes/products/tv.tsx"),
      route("sound", "routes/products/sound.tsx"),
      route("smart-products", "routes/products/smart-products.tsx"),
      route("accessories", "routes/products/accessories.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
