import SidebarMenu from "@/components/admin/sidebar-menu";
import React from "react";
import "./index.scss";
import "@/styles/index.scss";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout-container">
      <SidebarMenu />
      <div className="admin-layout-right-container">{children}</div>
    </div>
  );
};

export default AdminLayout;
