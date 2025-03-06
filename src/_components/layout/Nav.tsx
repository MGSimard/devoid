import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <nav>
      <Link to="/">
        <img alt="X" />
      </Link>
      <ul>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </ul>
    </nav>
  );
}
