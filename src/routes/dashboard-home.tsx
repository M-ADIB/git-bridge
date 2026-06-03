import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard-home")({
  head: () => ({
    meta: [
      { title: "Dashboard | The Next Chapter" },
      {
        name: "description",
        content: "Management Dashboard for Rania Barghout's podcasts.",
      },
    ],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <iframe
      src="/dashboard-home.html"
      title="Dashboard"
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
