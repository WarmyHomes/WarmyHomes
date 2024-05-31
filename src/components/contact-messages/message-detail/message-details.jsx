"use client";
import React from "react";
import "./message-details.scss";
import { swalAlert, swalConfirm } from "@/helpers/swal";
import { deleteContactMessageAction } from "@/actions/contact-us-queries-actions";
import Link from "next/link";

const MessageDetail = ({ data }) => {
  const { id, first_name, email, message } = data;

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

  return (
    <div className="message-detail-page-container">
      <div className="message-details-container">
        <div className="detail-item-container">
          <h5 className="item-label">Name</h5>
          <h5>{first_name}</h5>
        </div>
        <div className="detail-item-container">
          <h5 className="item-label">Email</h5>
          <h5>{email}</h5>
        </div>
        <div className="detail-item-container">
          <h5 className="item-label">Message</h5>
          <p>{message}</p>
        </div>
        <div className="action-buttons-container">
        
        <Link href={`/admin/contact-messages`}>
          <button>Return</button></Link>
          <Link href={`/admin/contact-messages/${id}`}>
          <button onClick={handleDelete}>Delete</button></Link>
        </div>
      </div>
    </div>
  );
};

export default MessageDetail;
