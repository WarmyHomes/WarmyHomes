import Spacer from '@/components/common/misc/spacer';
import PageHeader from '@/components/common/page-header';
import TourRequests from '@/components/tour-requests/tour-requests';
import { getUsersAllTourRequests } from '@/services/tour-requests-service';
import React from 'react';

const page = async ({ searchParams }) => {
  try {
    const { page } = searchParams;

    const res = await getUsersAllTourRequests(page);

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to fetch data");
    }

    const data = await res.json();

    console.log("DATA", data);

    return (
      <>
        <PageHeader title={"MY TOUR REQUESTS"} />
        <Spacer height={5} />
        <TourRequests data={data} />
      </>
    );
  } catch (error) {
    console.error("Error fetching tour requests:", error);
    return (
      <div>
        <PageHeader title={"MY TOUR REQUESTS"} />
        <Spacer height={5} />
        <div>Error</div>
      </div>
    );
  }
};

export default page;