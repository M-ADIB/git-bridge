import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Apply as a Guest | The Next Chapter" },
      {
        name: "description",
        content:
          "Apply to be a guest or sponsor on Rania Barghout's visual podcasts.",
      },
    ],
  }),
  component: ApplyPage,
});

function ApplyPage() {
  return (
    <iframe
      src="/apply.html"
      title="Apply"
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
