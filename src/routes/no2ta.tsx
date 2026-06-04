import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/no2ta")({
  head: () => ({
    meta: [
      { title: "No2ta A Al Satr — The Next Chapter" },
      {
        name: "description",
        content:
          "No2ta A Al Satr — Rania Barghout's bold Arabic podcast from The Next Chapter.",
      },
      { property: "og:title", content: "No2ta A Al Satr — The Next Chapter" },
      {
        property: "og:description",
        content:
          "Rania Barghout's bold Arabic podcast from The Next Chapter.",
      },
    ],
  }),
  component: No2taRedirect,
});

function No2taRedirect() {
  useEffect(() => {
    const search = window.location.search || "";
    window.location.replace(`/no2ta/index.html${search}`);
  }, []);
  return null;
}
