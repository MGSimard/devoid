import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <nav>
      <img alt="X" />
      <ul>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>
  );
}
