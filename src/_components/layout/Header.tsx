import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header>
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
      <div id="header-text">
        <span>.:::</span>
        <h1>VOID</h1>
        <span>:::.</span>
      </div>
    </header>
  );
}
