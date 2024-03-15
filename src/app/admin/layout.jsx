"use client";

import SidebarMenu from "@/components/admin/sidebar-menu";
import React, { useState } from "react";
import "./index.scss";
import "@/styles/index.scss";
import AdminTopbar from "@/components/admin/topbar";

const AdminLayout = ({ children }) => {
  const [isFullMenu, setIsFullMenu] = useState(true);

  return (
    <div className="admin-layout-container">
      <SidebarMenu isFullMenu={isFullMenu} />
      <div
        className={`admin-layout-right-container ${
          isFullMenu ? "" : "full-admin-layout"
        }`}
      >
        <AdminTopbar setIsFullMenu={setIsFullMenu} />
        <div className="admin-page-container">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
