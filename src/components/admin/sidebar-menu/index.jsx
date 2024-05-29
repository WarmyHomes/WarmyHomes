"use client";

import React from "react";
import "./index.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    title: "Dashboard",
    route: "/dashboard",
  },
  {
    title: "Adverts",
    route: "/adverts",
  },
  {
    title: "Categories",
    route: "/categories",
  },
  {
    title: "Advert Types",
    route: "/advert-types",
  },
  {
    title: "Users",
    route: "/users",
  },
  {
    title: "Tour Requests",
    route: "/tour-requests",
  },
  {
    title: "Reports",
    route: "/reports",
  },
  {
    title: "Contact Messages",
    route: "/contact-messages",
  },
  {
    title: "Settings",
    route: "/settings",
  },
  {
    title: "Web Site",
    route: "/website",
  },
  {
    title: "Logout",
    route: "/logout",
  },
];
const SidebarMenu = ({ isFullMenu }) => {
  const pathname = usePathname();
  const isActive = (href) => {
    return pathname?.includes(href);
  };

  return (
    <div
      className={`sidebar-menu-main-container ${
        isFullMenu ? "" : "hide-full-menu"
      }`}
    >
      <img
        className="sidebar-logo"
        src="/images/logo/logo-white.png"
        alt="Warmy Homes Logo"
      />

      <div className="sidebar-menu-container">
        <ul>
          {menuItems.map((el) => (
            <li key={el?.title}>
              <Link
                className={isActive(`${el?.route}`) ? "active" : ""}
                href={`/admin${el?.route}`}
              >
                {el?.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarMenu;
