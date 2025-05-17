import React, { useState } from 'react';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('dashboards');

  const handleSetActive = (tabName) => {
    setActiveTab(tabName);
  };

  const navLinkClass = (tab) =>
    `nav-link ${activeTab === tab ? 'active' : ''}`;

  return (
    <aside
      className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3"
      id="sidenav-main"
    >
      <div className="sidenav-header">
        <i
          className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
          aria-hidden="true"
          id="iconSidenav"
        ></i>
        <a className="navbar-brand m-0" href="#!" rel="noreferrer">
          <span className="ms-1 font-weight-bold">STORE MANAGEMENT</span>
        </a>
      </div>
      <hr className="horizontal dark mt-0" />
      <div className="collapse navbar-collapse w-auto h-auto" id="sidenav-collapse-main">
        <ul className="navbar-nav">

          {/* Dashboards */}
          <li className="nav-item">
            <a
              className={navLinkClass('dashboards')}
              onClick={() => handleSetActive('dashboards')}
              href="#dashboardsExamples"
            >
              <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center me-2">
                <i className="fas fa-chart-line text-dark"></i>
              </div>
              <span className="nav-link-text ms-1">Dashboards</span>
            </a>
          </li>

          {/* Users */}
          <li className="nav-item">
            <a
              className={navLinkClass('users')}
              onClick={() => handleSetActive('users')}
              href="#usersMenu"
            >
              <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center me-2">
                <i className="fas fa-users text-dark"></i>
              </div>
              <span className="nav-link-text ms-1">Users</span>
            </a>
          </li>

          {/* Stores */}
          <li className="nav-item">
            <a
              className={navLinkClass('stores')}
              onClick={() => handleSetActive('stores')}
              href="#storesMenu"
            >
              <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center me-2">
                <i className="fas fa-store text-dark"></i>
              </div>
              <span className="nav-link-text ms-1">Stores</span>
            </a>
          </li>

          {/* Profile */}
          <li className="nav-item">
            <a
              className={navLinkClass('profile')}
              onClick={() => handleSetActive('profile')}
              href="#profileMenu"
            >
              <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center me-2">
                <i className="fas fa-user-circle text-dark"></i>
              </div>
              <span className="nav-link-text ms-1">Profile</span>
            </a>
          </li>

          {/* Settings */}
          <li className="nav-item">
            <a
              className={navLinkClass('settings')}
              onClick={() => handleSetActive('settings')}
              href="#settingsMenu"
            >
              <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center me-2">
                <i className="fas fa-cog text-dark"></i>
              </div>
              <span className="nav-link-text ms-1">Settings</span>
            </a>
          </li>

        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
