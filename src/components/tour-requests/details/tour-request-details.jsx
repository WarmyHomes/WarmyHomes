"use client";

import { initialResponse } from "@/helpers/form-validation";
import { swalConfirm } from "@/helpers/swal";
import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import "./style.scss";
import { deleteUsersTourRequestAction } from "@/actions/tour-requests-action";

const UsersTourRequestDetails = ({ data }) => {

  const { id, status, tour_date, tour_time, advert, } = data;
  const {image, price, city, country, district, title, location, advert_id } = advert;

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
    <Card className="mb-3 mt-3 main-container">
      <div className="row g-0">
        <div className="col-md-4 position-relative image-container">
          <Card.Img
            variant="top"
            src={image}
            alt = "image/advert/${advert_id}"
            className="image"
          />
          <div className="position-absolute status">
            {status}
          </div>
        </div>
        <div className="col-md-8">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-start">
              <Card.Title className="mb-0">{title}</Card.Title>
              <Card.Text className="text-end mb-0">${price}</Card.Text>
            </div>
            <Card.Text className="text-start">{location}</Card.Text>
            <div className="row">
              <div className="col">
                <Form.Group controlId="tourDate">
                  <Form.Label>Tour Date</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="10/10/2023"
                    style={{ border: "1px solid #ced4da" }}
                    value={tour_date}
                  />
                </Form.Group>
              </div>
              <div className="col">
                <Form.Group controlId="tourTime">
                  <Form.Label>Tour Time</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="10:30 PM"
                    style={{ border: "1px solid #ced4da" }}
                    value={tour_time}
                  />
                </Form.Group>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col text-center">
                <Button variant="warning" className="mt-3" onClick={handleDelete}>
                  Delete
                </Button>
              </div>
            </div>
          </Card.Body>
        </div>
      </div>
    </Card>
  );

  
}

export default UsersTourRequestDetails;