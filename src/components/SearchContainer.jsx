import "../styles/SearchContainer.css";
function SearchContainer() {
  const headerText = "Drug Finder";
  return (
    <div>
      <div className="main-container">
        <div className="header-text">
          <h1>{headerText}</h1>
        </div>
        <div className="search-container">
          <form role="search" className="search-form">
            <div className="search-input-container">
              <input placeholder="Search" type="search" className="input" />
              <button className="btn-search" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchContainer;
