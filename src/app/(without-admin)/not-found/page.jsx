import Spacer from "@/components/common/misc/spacer";
import PageHeader from "@/components/common/page-header";
import NotFound from "@/components/errors/notfound";
import React from "react";


const NotFoundPage = () => {

	return (
		<>
			<PageHeader title={"NOT FOUND"} />
             <Spacer/>
			<NotFound />
			<Spacer />
		</>
	);
};

export default NotFoundPage;