"use client";
import { deleteAdvertTypeAction } from "@/actions/advert-type-action";
import { swalAlert, swalConfirm } from "@/helpers/swal";
import Link from "next/link";
import React from "react";
import { TfiPencil, TfiTrash } from "react-icons/tfi";

const AdvertTypeToolbar = ({ row }) => {


	const { id } = row;

	console.log(id);

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
		<div>
			<Link
				type="button"
				className="btn btn-link btn-dark"
				href={`/admin/advert-types/${id}`}
			>
				<TfiPencil />
			</Link>

			<button
				type="button"
				className="btn btn-link btn-dark"
				onClick={handleDelete}
			>
				<TfiTrash />
			</button>
		</div>
	);
};

export default AdvertTypeToolbar;
