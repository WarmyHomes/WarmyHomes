import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";


export const deleteTourRequestAction = async (id) => {
    if(!id) throw new Error("Id Is Missing");

    const res = await deleteTourRequestWithId(id);
    console.log("action res : ", res);
    const data = await res.json();
    console.log("action data : ",data);
    if(!res.ok){
        throw new Error(data.message);
    }
    revalidatePath(`/admin/tour-requests/${id}`);
    redirect(`/admin/tour-requests?msg=${encodeURI("TourRequest Deleted Successfully")}`);
};

export const getTourRequestDetailsForAdminAction = async(id) => {
    if(!id) throw new Error("Id Is Missing.");
    const res = await getTourRequestDetailsForAdminAction(id);
    const data = await res.json();
    if(!res.ok){
        throw new Error(data.message);
    }
}
