import AdvertTypeEdit from "@/components/admin/advert-types/advert-type-edit";

import { getAdvertTypeById } from "@/services/advertType-servise";
import React from "react";

const page = async ({ params }) => {
  const res = await getAdvertTypeById(params.id);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }

  return (
    <div>
      <AdvertTypeEdit data={data} />
    </div>
  );
};

export default page;
