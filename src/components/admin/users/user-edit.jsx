"use client";

import { deleteUserAction, updateUserByIdAction } from "@/actions/user-actions";
import { useFormState } from "react-dom";
import "./profile-form.scss";
import { initialResponse, isInvalid } from "@/helpers/form-validation";
import InputMask from "react-input-mask-next";
import SubmitButton from "@/components/common/submit-button/submit-button";
import { useRef, useEffect, useState } from "react";
import { swalAlert } from "@/helpers/swal";

const UserEdit = ({ data }) => {
  const [state, dispatch] = useFormState(updateUserByIdAction, initialResponse);
  const [formErrors, setFormErrors] = useState({});

  const formRef = useRef(null);

  const handleDelete = async () => {
    await deleteUserAction(data.id);
    // Silme işlemi sonrası bir yönlendirme veya bildirim ekleyebilirsiniz
    swalAlert("User deleted successfully", "success");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formErrors = {};

    const requiredFields = ['first_name', 'last_name', 'email', 'phone', 'role'];
    requiredFields.forEach((field) => {
      if (!formData.get(field)) {
        formErrors[field] = 'This field is required';
      }
    });

    if (Object.keys(formErrors).length > 0) {
      setFormErrors(formErrors);
      return;
    }

    formData.append("id", data.id); // ID'yi form verilerine ekliyoruz
    dispatch(formData);
  };

  useEffect(() => {
    if (state?.message) {
      if (state?.success) {
        formRef?.current?.reset(); // Form başarılı ise formu sıfırlıyoruz
        swalAlert(state?.message, "success"); // Başarılı mesajını gösteriyoruz
      } else {
        swalAlert(state?.message, "error"); // Hata mesajını gösteriyoruz
      }
    }
  }, [state?.message, state?.success]);

  return (
    <div className="container profile-form">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit} noValidate ref={formRef}>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className={`form-control ${isInvalid(
                      state?.errors?.first_name || formErrors.first_name
                    )}`}
                    id="first_name"
                    name="first_name"
                    placeholder="First Name"
                    defaultValue={data.first_name}
                  />
                  <label htmlFor="first_name">First Name</label>
                  <div className="invalid-feedback">
                    {state?.errors?.first_name || formErrors.first_name}
                  </div>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className={`form-control ${isInvalid(
                      state?.errors?.last_name || formErrors.last_name
                    )}`}
                    id="last_name"
                    name="last_name"
                    placeholder="Last Name"
                    defaultValue={data.last_name}
                  />
                  <label htmlFor="last_name">Last Name</label>
                  <div className="invalid-feedback">
                    {state?.errors?.last_name || formErrors.last_name}
                  </div>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className={`form-control ${isInvalid(
                      state?.errors?.email || formErrors.email
                    )}`}
                    id="email"
                    name="email"
                    placeholder="Email"
                    defaultValue={data.email}
                  />
                  <label htmlFor="email">Email</label>
                  <div className="invalid-feedback">
                    {state?.errors?.email || formErrors.email}
                  </div>
                </div>

                <div className="form-floating mb-3">
                  <InputMask
                    className={`form-control ${isInvalid(
                      state?.errors?.phone || formErrors.phone
                    )}`}
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    mask="9999999999"
                    defaultValue={data.phone}
                  />
                  <label htmlFor="phone">Phone</label>
                  <div className="invalid-feedback">
                    {state?.errors?.phone || formErrors.phone}
                  </div>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className={`form-control ${isInvalid(
                      state?.errors?.role || formErrors.role
                    )}`}
                    id="role"
                    name="role"
                    placeholder="Role"
                    defaultValue={data.role}
                  />
                  <label htmlFor="role">Role</label>
                  <div className="invalid-feedback">
                    {state?.errors?.role || formErrors.role}
                  </div>
                </div>

                <div className="d-flex justify-content-between">
                  <button
                    type="button"
                    onClick={handleDelete}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
                <SubmitButton title="Update" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserEdit;
