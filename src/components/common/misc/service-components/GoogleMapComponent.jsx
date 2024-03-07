"use client";

import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const GoogleMapComponent = ({
  styleOptions,
  center = {
    lat: 39.9119, // Example latitude
    lng: 41.2635165, // Example longitude
  },
}) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyA07lD6jhIN2OwvpX1cXsj5NAiN3T5pDjk",
  });

  const placeHodlerStyles = {
    ...styleOptions,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc",
  };

  if (loadError) {
    return <div style={placeHodlerStyles}>Error loading Google Maps</div>;
  }

  if (!isLoaded) {
    return <div style={placeHodlerStyles}>Loading Google Maps...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={styleOptions}
      center={center}
      zoom={12}
      options={{
        disableDefaultUI: true, // Disable default controls
        zoomControl: true,
      }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default GoogleMapComponent;
