import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Nav } from "@/_components/Nav";

export const Route = createRootRoute({
  component: () => (
    <>
      <Nav />
      <Outlet />
    </>
  ),
});
