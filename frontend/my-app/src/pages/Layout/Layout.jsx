// layout.jsx
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Sidebar: fixed width */}
      <div style={{ width: "250px", flexShrink: 0 }}>
        <Sidebar />
      </div>

      {/* Main area: header + content */}
      <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {/* Fixed Header */}
        <div style={{ height: "80px", flexShrink: 0 }}>
          <Header />
        </div>

        {/* Page content area */}
        <div
          style={{
            flexGrow: 1,
            overflowY: "auto",
            padding: "1.5rem",
            background: "#f8f9fa",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
