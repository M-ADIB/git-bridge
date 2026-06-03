import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Next Chapter | Podcasts by Rania Barghout" },
      {
        name: "description",
        content:
          "Register as a guest on Rania Barghout's visual podcasts: No2ta 3al Sater & Between The Lines.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <iframe
      src="/landing.html"
      title="The Next Chapter"
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
