import { useLocation, Link } from "@tanstack/react-router";

export function Header() {
  const location = useLocation();
  const displayPath = location.pathname.split("/").filter(Boolean);
  const headerText = `[ ${
    displayPath.length === 0 ? "N E X U S" : [...displayPath.join(" _ ").toUpperCase()].join(" ")
  } ]`;

  // Can consider a breadcrumb setup later for the header title _ stuff _ otherstuff

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
        <div id="header-text">
          <span>.:::</span>
          <h1>{headerText}</h1>
          <span>:::.</span>
        </div>
      </div>
    </header>
  );
}
