import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Nav } from "@/_components/layout/Nav";
import { ThemeToggle } from "@/_components/ThemeToggle";

export const Route = createRootRoute({
  component: () => (
    <>
      <Nav />
      <Outlet />
      <ThemeToggle />
    </>
  ),
});
