function Navbar() {
  return <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary my-3 my-md-0 mx-0">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
          </ul>
          <ul className="navbar-nav d-flex p-0">
            <li className={"nav-item"}>
              <a className="nav-link float-md-end" href="/impressum">Impressum</a>
            </li>
            <li className={"nav-item"}>
              <a className="nav-link float-md-end" href="/datenschutz">Datenschutz</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>;
}

export default Navbar
