"use client"

import { swalAlert, swalConfirm } from '@/helpers/swal';
import Link from 'next/link';
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { TfiPencil } from 'react-icons/tfi';

const UserTourRequestToolBar = ({ row }) => {
    const {id} = row;
    
    const handleDelete = async () => {
        const res = await swalConfirm("Are you sure to delete");
        if (!res.isConfirmed) return;
    
        try {
          const res = await deleteTourRequestAction(id);
        } catch (err) {
          console.log(err);
          swalAlert(err.message, "error");
        }
      };

  return (
    <div className="table-actions-container">
        <Link href={`/tour-request/${id}`}>
            <TfiPencil 
             className='action-icon-color'/>
        </Link>
        <AiOutlineDelete onClick={handleDelete} className='action-icon-color'/>
    </div>
  );
};

export default UserTourRequestToolBar;