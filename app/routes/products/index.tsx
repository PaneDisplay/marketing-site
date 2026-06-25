import { redirect } from "react-router";

// /products lands on the first category.
export function loader() {
  return redirect("/products/tv");
}
