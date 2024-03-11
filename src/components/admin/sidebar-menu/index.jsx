"use client";

import React from "react";
import "./index.scss";
import Link from "next/link";
// import { useRouter } from "next/router";

const menuItems = [
  {
    title: "Dashboard",
    route: "",
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
const SidebarMenu = () => {
  // const router = useRouter();
  // const isActive = (href) => router.pathname === href;

  console.log(router.pathname, "hello");

  return (
    <div className="sidebar-menu-main-container">
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
                // className={isActive(`/admin${el?.route}`) ? "active" : ""}
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
