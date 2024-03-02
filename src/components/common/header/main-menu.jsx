import React from "react";
import menuItems from "@/helpers/data/main-menu.json";
import Link from "next/link";

const MainMenu = (props) => {
	return (
		<ul style={{ listStyleType: 'none' }}>
			{menuItems.map((item) => (
				<li
					className="nav-item mb-3"
					key={item.title}
					data-bs-dismiss="offcanvas"
				>
					<Link
						className="nav-link mb-3"
						aria-current="page"
						href={item.link}
					>
						{item.title}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default MainMenu;
