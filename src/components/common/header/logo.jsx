import { config } from "@/helpers/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
	return (
		<a 
        as={Link}
        href="/"
        title={config.project.name}>
			<Image
				src={`/images/logo/logo-white.png`}
				width={208}
				height={48}
				alt={config.project.name}
			/>
		</a>
	);
};

export default Logo;
 