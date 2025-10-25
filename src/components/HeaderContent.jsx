import "../styles/headerContent.css";
function HeaderContent() {
  const headerText = "Drug Finder";
  return (
    <div>
      <nav>
        <div className="header-container">
          <div className="logo">
            <a>{headerText}</a>
          </div>
          <div className="header-container">
            <ul className="nav-links">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
            <form role="search">
              <input type="search" placeholder="Search" aria-label="Search" />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderContent;
