"use client";
import React from "react";
import { TfiAgenda, TfiAlert, TfiPencil, TfiTrash } from "react-icons/tfi";
import { swalAlert, swalConfirm } from "@/helpers/swal";
import Link from "next/link";
import { deleteContactMessageAction } from "@/actions/contact-us-queries-actions";
import { AiOutlineDelete } from "react-icons/ai";

const ContactMessageToolbar = ({ row }) => {
  const { id, built_in } = row;

  const handleDelete = async () => {
    const res = await swalConfirm("Are you sure to delete");
    if (!res.isConfirmed) return;

    try {
      const res = await deleteContactMessageAction(id);
    } catch (err) {
      console.log(err);
      swalAlert(err.message, "error");
    }
  };

  if (built_in) return null;

  return (
    <div className="table-actions-container">
      <Link href={`/admin/contact-messages/${id}`}>
        <TfiPencil className="action-icon-color" />
      </Link>
      <AiOutlineDelete onClick={handleDelete} className="action-icon-color" />
    </div>
  );
};

export default ContactMessageToolbar;
