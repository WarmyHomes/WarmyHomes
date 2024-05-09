import React from "react";
import "./message-details.scss";
import SubmitButton from "@/components/common/form-fields/submit-button";

const MessageDetail = ({data}) => {
  return (
    <div className="message-detail-page-container">
      <div className="message-details-container">
        <div className="detail-item-container">
          <h5 className="item-label">Name</h5>
          <h5>John Doe</h5>
        </div>
        <div className="detail-item-container">
          <h5 className="item-label">Email</h5>
          <h5>johndoe@gmail.com</h5>
        </div>
        <div className="detail-item-container">
          <h5 className="item-label">Message</h5>
          <h5>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.3
          </h5>
        </div>
        <div className="action-buttons-container">
          <button>Return</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default MessageDetail;
