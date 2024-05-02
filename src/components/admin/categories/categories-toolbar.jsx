"use client";

import React from 'react'
import { TfiPencil, TfiTrash } from 'react-icons/tfi';
import { swalAlert, swalConfirm } from "@/helpers/swal";
import Link from "next/link";
import { deleteCategoriesAction } from '@/actions/categories-action';

const CategorisToolbar = ({row}) => {
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
    <div>
    <Link
        type="button"
        className="btn btn-link"
        href={`/admin/users/edit/${id}`}
    >
        <TfiPencil />
    </Link>

    <button
        type="button"
        className="btn btn-link"
        onClick={handleDelete}
    >
        <TfiTrash />
    </button>
</div>
  )
}

export default CategorisToolbar;
