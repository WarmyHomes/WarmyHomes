"use client";
import { deleteTourRequestAction } from "@/actions/admin-tour-request-details-action";
import { initialResponse } from "@/helpers/form-validation";
import { swalConfirm } from "@/helpers/swal";
import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useRouter } from 'next/router';

const AdminTourRequestDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [state, dispatch] = useState(initialResponse); 

  const handleDelete = async () => {
    const isConfirmed = await swalConfirm("Are you sure you want to delete this tour request?");

    if (isConfirmed && id) {
      const response = await deleteTourRequestAction(id);
      dispatch(response);

      if (response.success) {
        router.push("/admin/tour-requests");
      }
    }
  };

  if (!id) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="mb-3 mt-3">
      <div className="row g-0">
        <div className="col-md-4 position-relative">
          <Card.Img
            variant="top"
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt="image"
          />
          <h3 className="position-absolute top-0 start-0 bg-purple text-white p-2 m-0">Pending</h3>
        </div>
        <div className="col-md-8">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-start">
              <Card.Title className="mb-0">Title</Card.Title>
              <Card.Text className="text-end mb-0">price</Card.Text>
            </div>
            <Card.Text className="text-start">location</Card.Text>
            <div className="row">
              <div className="col">
                <Form.Group controlId="tourDate">
                  <Form.Label>Tour Date</Form.Label>
                  <Form.Control type="text" placeholder="Enter tour date" style={{ border: "1px solid #ced4da" }} />
                </Form.Group>
              </div>
              <div className="col">
                <Form.Group controlId="tourTime">
                  <Form.Label>Tour Time</Form.Label>
                  <Form.Control type="text" placeholder="Enter tour time" style={{ border: "1px solid #ced4da" }} />
                </Form.Group>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col text-center">
                <Button variant="danger" className="mt-3" onClick={handleDelete}>
                  Delete
                </Button>
              </div>
            </div>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default AdminTourRequestDetails;
