import React from 'react';

const Header = () => {
  return (
    <nav
      className="navbar navbar-main navbar-expand-lg position-sticky mt-2 top-1 px-0 mx-4 shadow-none border-radius-xl z-index-sticky"
      id="navbarBlur"
      data-scroll="true"
    >
      <div className="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li className="breadcrumb-item text-sm">
              <a className="opacity-3 text-dark" href="#!">
                <svg
                  width="12px"
                  height="12px"
                  className="mb-1"
                  viewBox="0 0 45 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>shop</title>
                  <g fill="none" fillRule="evenodd">
                    <g fill="#252f40" fillRule="nonzero">
                      <path d="M46.7199583,10.7414583 ... Z"></path>
                      <path d="M39.198,22.4912623 ... Z"></path>
                    </g>
                  </g>
                </svg>
              </a>
            </li>
          </ol>
          <h6 className="font-weight-bolder mb-0 fs-4">Welcome Admin</h6>
        </nav>

        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div className="ms-md-auto pe-md-3 d-flex align-items-center">
            <div className="input-group">
              <span className="input-group-text text-body">
                <i className="fas fa-search" aria-hidden="true"></i>
              </span>
              <input type="text" className="form-control" placeholder="Type here..." />
            </div>
          </div>

          <ul className="navbar-nav justify-content-end">
            <li className="nav-item d-flex align-items-center">
              <a href="#!" className="nav-link text-body font-weight-bold px-0">
                <i className="fa fa-user me-sm-1"></i>
                <span className="d-sm-inline d-none">Profile</span>
              </a>
            </li>

            <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
              <a href="#!" className="nav-link text-body p-0" id="iconNavbarSidenav">
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                </div>
              </a>
            </li>

            <li className="nav-item px-3 d-flex align-items-center">
              <a href="#!" className="nav-link text-body p-0">
                <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
              </a>
            </li>

            <li className="nav-item dropdown pe-2 d-flex align-items-center">
              <a
                href="#!"
                className="nav-link text-body p-0"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-bell cursor-pointer"></i>
              </a>
              {/* Dropdown menu could go here */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
