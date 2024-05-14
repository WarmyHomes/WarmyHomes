"use client";
import { useFormStatus } from "react-dom";

const DeleteButton = ({ title = "Delete", icon = null, onDelete }) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="button"
      className="btn btn-danger"
      disabled={pending}
      onClick={onDelete}
    >
      {pending ? (
        <div
          className="spinner-border spinner-border-sm text-secondary"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <>
          {icon} {title}
        </>
      )}
    </button>
  );
};

export default DeleteButton;
