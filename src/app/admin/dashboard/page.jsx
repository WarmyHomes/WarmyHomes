import React from "react";
import "./page.scss";
import { FaUsers } from "react-icons/fa";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { FaPrint } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { FaPrayingHands } from "react-icons/fa";

const DashboardPage = () => {
  const cards = [
    {
      title: "Customers",
      count: 1231,
      icon: <FaUsers className="icon" />,
    },
    {
      title: "Categories",
      count: 1231,
      icon: <HiOutlineSquare3Stack3D className="icon" />,
    },
    {
      title: "Adverts",
      count: 1231,
      icon: <FaPrint className="icon" />,
    },
    {
      title: "Advert Types",
      count: 1231,
      icon: <FaBook className="icon" />,
    },
    {
      title: "Tour Requests",
      count: 1231,
      icon: <FaPrayingHands className="icon" />,
    },
  ];

  return (
    <div className="admin-dashboard-container">
      <div className="admin-dashboard-cards-container">
        {cards.map((el, index) => (
          <div key={index} className="single-card">
            <div className="single-card-left">
              <h4>
                <span />
                {el?.title}
              </h4>
              <h2>{el?.count}</h2>
            </div>
            <div className="single-card-right">{el?.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
