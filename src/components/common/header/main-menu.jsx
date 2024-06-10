import React from "react";
import menuItems from "@/helpers/data/main-menu.json";
import Link from "next/link";
import { auth } from "@/auth";

const MainMenu = async(props) => {

      const session = await auth();
      console.log(session?.user?.role, 'adminnnnn');


  let items = session?.user?.role === "ADMIN" ? menuItems : menuItems.filter((el)=> el.title !== 'Admin');

  return (
    <ul className="list-unstyled">
      {items.map((item) => (
        <li className="nav-item" key={item.title} data-bs-dismiss="offcanvas">
          <Link className="nav-link" aria-current="page" href={item.link}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MainMenu;
