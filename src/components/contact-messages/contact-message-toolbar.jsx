"use client";
import React from 'react'
import { TfiPencil, TfiTrash } from 'react-icons/tfi';
import { swalAlert, swalConfirm } from "@/helpers/swal";
import Link from "next/link";
import { deleteContactMessageAction } from '@/actions/contact-us-queries-actions';

const ContactMessageToolbar = ({row}) => {
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
    <div>

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

export default ContactMessageToolbar;
