import { resetDatabaseService } from "@/services/admin-settings-service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const resetDatabaseAction = async () => {
  const res = await resetDatabaseService();
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  revalidatePath("/admin/settings");
  redirect(`/admin/settings?msg=${encodeURI("Database is reset.")}`);
};
