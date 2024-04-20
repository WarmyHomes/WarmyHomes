"use client";

import SidebarMenu from "@/components/admin/sidebar-menu";
import React, { useState } from "react";
import "./index.scss";
import "@/styles/index.scss";
import AdminTopbar from "@/components/admin/topbar";
import { useMediaQuery } from "react-responsive";
import { Offcanvas } from "react-bootstrap";

const AdminLayout = ({ children }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  const [isFullMenu, setIsFullMenu] = useState(true);

  return (
    <div className="admin-layout-container">
      {!isMobile ? (
        <SidebarMenu isFullMenu={isFullMenu} />
      ) : (
        <Offcanvas
          show={isFullMenu}
          onHide={() => setIsFullMenu(false)}
          backdrop="static"
        >
          <Offcanvas.Header
            style={{ background: "rgb(161, 18, 127)" }}
            closeButton
          ></Offcanvas.Header>
          <Offcanvas.Body style={{ background: "rgb(161, 18, 127)" }}>
            <SidebarMenu isFullMenu={isFullMenu} />
          </Offcanvas.Body>
        </Offcanvas>
      )}

      <div
        className={`admin-layout-right-container ${
          isFullMenu && !isMobile ? "" : "full-admin-layout"
        }`}
      >
        <AdminTopbar setIsFullMenu={setIsFullMenu} />
        <div className="admin-page-container">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
