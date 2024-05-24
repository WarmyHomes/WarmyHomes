
import "./page.scss";
import PageHeader from "@/components/common/page-header";
import { getMyAdverts } from "@/services/create-advert-service";
import MyAdvertsListing from "@/components/advert/my-advert-listing";

const MyAdverts = async ({ searchParams }) => {
  const { page } = searchParams;

  const res = await getMyAdverts(page);

  const data = await res.json();
  if (!res.ok) throw new Error(data.message);

  return (
    <div className="my-favorites-page-container">
      <PageHeader title={"My Adverts"} />
      <MyAdvertsListing data={data} />
    </div>
  );
};

export default MyAdverts;
