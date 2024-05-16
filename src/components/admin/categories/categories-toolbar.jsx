"use client";

import React from "react";
import { TfiPencil } from "react-icons/tfi";
import { swalAlert, swalConfirm } from "@/helpers/swal";
import Link from "next/link";
import { deleteCategoriesAction } from "@/actions/categories-action";
import { AiOutlineDelete } from "react-icons/ai";

const CategorisToolbar = ({ row }) => {
  const { id, built_in } = row;

  const handleDelete = async () => {
    const res = await swalConfirm("Are you sure to delete");
    if (!res.isConfirmed) return;

    try {
      const res = await deleteCategoriesAction(id);
    } catch (err) {
      console.log(err);
      swalAlert(err.message, "error");
    }
  };

  if (built_in) return null;

  return (
    <div className="table-actions-container">
      <Link href={`/admin/categories/${id}`}>
        <TfiPencil className="action-icon-color" />
      </Link>
      <AiOutlineDelete onClick={handleDelete} className="action-icon-color" />
    </div>
  );
};

export default CategorisToolbar;
