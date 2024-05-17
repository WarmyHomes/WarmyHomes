"use client";
import { deleteAdvertTypeAction } from "@/actions/advert-type-action";
import { swalAlert, swalConfirm } from "@/helpers/swal";
import Link from "next/link";
import React from "react";
import { TfiPencil } from "react-icons/tfi";
import { AiOutlineDelete } from "react-icons/ai";

const MyFavoritesToolbar = ({ row }) => {
  const { id } = row;

  const handleDelete = async () => {
    const res = await swalConfirm("Are you sure to delete");
    if (!res.isConfirmed) return;

    try {
      const res = await deleteAdvertTypeAction(id);
    } catch (err) {
      console.log(err);
      swalAlert(err.message, "error");
    }
  };

  return (
    <div className="table-actions-container">
      <Link href={`/admin/advert-types/${id}`}>
        <TfiPencil className="action-icon-color" />
      </Link>
      <AiOutlineDelete onClick={handleDelete} className="action-icon-color" />
    </div>
  );
};

export default MyFavoritesToolbar;
