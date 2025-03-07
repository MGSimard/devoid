import { Link } from "@tanstack/react-router";

export function NotFound() {
  // Maybe some bullshit ASCII?

  return (
    <main id="not-found">
      <h1>NOT FOUND</h1>
      <Link to="/">Return</Link>
    </main>
  );
}

export function Error() {
  // Maybe some bullshit ASCII?

  return (
    <main id="not-found">
      <h1>ERROR</h1>
      <Link to="/">Return</Link>
    </main>
  );
}
