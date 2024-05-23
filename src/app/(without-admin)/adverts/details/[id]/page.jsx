import AdvertsDetailsComponent from "@/components/advert/AdvertsDetailsComponent";
import { getAdvertById } from "@/services/create-advert-service";

const AdvertsDetailsPage = async ({ params }) => {
  const res = await getAdvertById(params.id);
  const data = await res.json();

  console.log(data, "dataa");

  return data?.content ? <AdvertsDetailsComponent data={data.content} /> : <div className="p-3 text-center "> No data</div>;
};

export default AdvertsDetailsPage;
