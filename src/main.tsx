import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";
import { ThemeContextProvider } from "@/_components/ThemeProvider";
import "@/_styles/global.css";
import "@/_styles/fonts.css";
import { Error, NotFound } from "@/_components/NotFoundError";

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultNotFoundComponent: NotFound,
  defaultErrorComponent: Error,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ThemeContextProvider>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </StrictMode>
  );
}
