import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header>
      <div id="header-content">
        <nav>
          <Link to="/">〇</Link>
          <ul>
            <li>
              <Link to="/">NEXUS</Link>
            </li>
            <li>
              <Link to="/insight">INSIGHT</Link>
            </li>
          </ul>
        </nav>
        <div id="header-text">
          <span>.:::</span>
          <h1>VOID</h1>
          <span>:::.</span>
        </div>
      </div>
    </header>
  );
}
