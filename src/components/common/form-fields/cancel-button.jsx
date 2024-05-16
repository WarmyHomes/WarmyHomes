"use client";

import { useRouter } from "next/navigation";
import "./cancel-button.scss";

const CancelButton = ({ title = "Cancel", icon = null }) => {
  const router = useRouter();

  return (
    <button
      type="button"
      className="btn btn-outline-secondary cancel-button"
      onClick={() => router.back()}
    >
      {icon} {title}
    </button>
  );
};

export default CancelButton;
