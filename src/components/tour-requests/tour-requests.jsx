"use client";

import React from "react";
import UserTourRequestToolBar from "./tour-requests-tool-bar";
import { swalAlert, swalConfirm } from '@/helpers/swal';
import { Card, Button, Row, Col } from "react-bootstrap";
import { TfiPencil } from "react-icons/tfi";
import Link from "next/link";
import { AiOutlineDelete } from "react-icons/ai";
import "./style.scss";
import { deleteUsersTourRequestAction } from "@/actions/tour-requests-action";

const TourRequests = ({ data }) => {
  const { content } = data;
 
  const handleDelete = async () => {
    const res = await swalConfirm("Are you sure to delete");
    if (!res.isConfirmed) return;

    try {
      const res = await deleteUsersTourRequestAction(id);
    } catch (err) {
      console.log(err);
      swalAlert(err.message, "error");
    }
  };
  return (
    <div className="container mt-4">
      <div className="container mt-4">
        {data.map((property) => (
          <Card key={property.id} className="mb-4">
            <Row noGutters>
              <Col md={4}>
                <Card.Img
                  variant="top"
                  src={property.advert.images}
                  alt={property.title}
                />
              </Col>
              <Col md={8} className="d-flex flex-column justify-content-center">
                <Card.Body className="ml-3">
                  <Card.Title>{property.advert.title}</Card.Title>
                  <Card.Text>
                    <strong>location: </strong>{property.advert.location}
                    <br />
                    <strong>price: </strong>${property.advert.price}
                  </Card.Text>
                  <Card.Text>
                    <strong>Owner:</strong> {property.ownerUser.first_name}
                  </Card.Text>
                  <Card.Text>
                    <strong>Status:</strong> {property.status}
                  </Card.Text>
                  <Card.Text>
                    <strong>Tour Request Date:</strong> {property.tour_date}
                  </Card.Text>
                  <Card.Text>
                    <strong>Tour Request Time:</strong> {property.tour_time}
                  </Card.Text>
                  <Link href={`/tour-request/${property.id}`}>
                    <TfiPencil className="action-icon-color" />
                  </Link>
                  <AiOutlineDelete onClick={()=> handleDelete(property.id)} className='action-icon-color'/>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TourRequests;
