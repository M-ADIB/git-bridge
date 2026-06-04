import { createFileRoute } from "@tanstack/react-router";

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
        content:
          "Bold podcasts by Rania Barghout from The Next Chapter.",
      },
    ],
  }),
  component: BtlPage,
});

function BtlPage() {
  const search =
    typeof window !== "undefined" ? window.location.search : "";
  return (
    <iframe
      src={`/btl/index.html${search}`}
      title="Between the Lines"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
      }}
    />
  );
}
