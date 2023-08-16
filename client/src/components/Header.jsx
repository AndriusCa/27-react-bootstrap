import { Link } from "react-router-dom";

export function Header() {
  


  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <Link
            to="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          ></Link>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link px-2 link-secondary">
              Home
            </Link>
          </li>
          <li>
            <Link to="/features" className="nav-link px-2">
              Features
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="nav-link px-2">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/faqs" className="nav-link px-2">
              FAQs
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link px-2">
              About
            </Link>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <Link to="/login" className="btn btn-outline-primary me-2">
            Login
          </Link>
          <Link to="/register" className="btn btn-primary">
            Sign-up
          </Link>
        </div>
      </header>
    </div>
  );
}
