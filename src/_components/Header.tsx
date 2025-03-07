import { useLocation, Link } from "@tanstack/react-router";

export function Header() {
  const location = useLocation();
  const displayPath = location.pathname.split("/").filter(Boolean);
  const headerText = displayPath.length === 0 ? "NEXUS" : displayPath.join(" - ").toUpperCase();

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
          <h1 className="spaced">[{headerText}]</h1>
          <span>:::.</span>
        </div>
      </div>
    </header>
  );
}
