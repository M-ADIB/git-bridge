import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/no2ta")({
  head: () => ({
    meta: [
      { title: "No2ta A Al Satr — The Next Chapter" },
      {
        name: "description",
        content:
          "نقطة ع السطر — البودكاست العربي الجريء لرانيا برغوث، من إنتاج The Next Chapter.",
      },
    ],
  }),
  component: No2taPage,
});

function No2taPage() {
  const search =
    typeof window !== "undefined" ? window.location.search : "";
  return (
    <iframe
      src={`/no2ta/index.html${search}`}
      title="No2ta A Al Satr"
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
