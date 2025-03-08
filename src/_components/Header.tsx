import { useLocation, Link } from "@tanstack/react-router";

export function Header() {
  const location = useLocation();
  const headerText = `[ ${
    location.pathname === "/" ? "N E X U S" : location.pathname.split("/")[1]?.toUpperCase().split("").join(" ") || ""
  } ]`;

  return (
    <header>
      <div id="header-content">
        <nav>
          <ul>
            <li>
              <Link to="/">NEXUS</Link>
            </li>
            <li>
              <Link to="/ascii">ASCII</Link>
            </li>
            <li>
              <Link to="/insight">INSIGHT</Link>
            </li>
          </ul>
        </nav>
        {/* Need to set it up so that [] brackets are always visible and ellipsis only applies to headerText */}
        <div id="header-text">
          <span>.:::</span>
          <h1>{headerText}</h1>
          <span>:::.</span>
        </div>
      </div>
    </header>
  );
}
