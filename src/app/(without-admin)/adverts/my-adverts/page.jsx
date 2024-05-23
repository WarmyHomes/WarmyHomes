
import "./page.scss";
import PageHeader from "@/components/common/page-header";
import { getMyAdverts } from "@/services/create-advert-service";
import MyAdvertsListing from "@/components/advert/my-advert-listing";

const MyAdverts = async ({ searchParams }) => {
  const properties = [
    {
      img: "/images/highlight.png",
      name: "Apartamento en la ciudad de México",
      address: "Ciudad de México, CDMX",
      price: "1200.00",
      publishDate: "03/04/2023",
      status: "Pending",
      likes: 125,
      pins: 125,
      views: 125,
    },
    {
      img: "/images/highlight.png",
      name: "Equestrian Family Home",
      address: "California City, CA, USA",
      price: "2200.00",
      publishDate: "03/04/2023",
      status: "Pending",
      likes: 125,
      pins: 125,
      views: 125,
    },
    {
      img: "/images/highlight.png",
      name: "Apartamento en la ciudad de México",
      address: "Ciudad de México, CDMX",
      price: "1200.00",
      publishDate: "03/04/2023",
      status: "Pending",
      likes: 125,
      pins: 125,
      views: 125,
    },
  ];

  const { page } = searchParams;

  const res = await getMyAdverts(page);

  const data = await res.json();
  console.log("DATA", data);
  if (!res.ok) throw new Error(data.message);
  return (
    <div className="my-favorites-page-container">
      <PageHeader title={"My Adverts"} />
      <MyAdvertsListing data={data} />
    </div>
  );
};

export default MyAdverts;
