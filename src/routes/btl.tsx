import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/btl")({
  head: () => ({
    meta: [
      { title: "Between the Lines / No2ta A Al Satr — The Next Chapter" },
      {
        name: "description",
        content:
          "Between the Lines & No2ta A Al Satr — bold podcasts by Rania Barghout from The Next Chapter.",
      },
      { property: "og:title", content: "Between the Lines — The Next Chapter" },
      {
        property: "og:description",
        content: "Bold podcasts by Rania Barghout from The Next Chapter.",
      },
    ],
  }),
  component: BtlRedirect,
});

function BtlRedirect() {
  useEffect(() => {
    const search = window.location.search || "";
    window.location.replace(`/btl/index.html${search}`);
  }, []);
  return null;
}
