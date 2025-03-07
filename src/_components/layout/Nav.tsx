import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <nav>
      <Link to="/">
        <img alt="X" />
      </Link>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>
    </nav>
  );
}
