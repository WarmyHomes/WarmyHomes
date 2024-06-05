'use client'; // Bu bileşenin istemci tarafında render edilmesi gerektiğini belirtir

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBuilding, faTree } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import { getAdvertByCategory } from "@/services/count-cities";
import { FaBuilding } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

// İkon eşleştirmeleri
const iconMap = {
  home: faHome,
  building: faBuilding,
  tree: faTree,
  AiFillHome: <AiFillHome />,
  FaBuilding: <FaBuilding />,

};

const ExploreByTypes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAdvertByCategory();
      const data = await res.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="explore-properties-by-type-container">
      <h2 className="heading">Explore Properties</h2>
      <p className="tagline">By Types</p>
      <div className="properties-type-cards-container">
        {data.map((el, index) => (
          <div className="single-property-type-card" key={index}>
            <div className="icon-container">
              <FontAwesomeIcon icon={iconMap[el.icon]} size="20x" />
            </div>
            <div className="content-container">
              <h5>{el.category}</h5>
              <p>{el.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreByTypes;
