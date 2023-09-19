import { useEffect, useRef, useState } from "react";
import "./Map.css";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

import TravelExploreIcon from "@mui/icons-material/TravelExplore";

import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import SelectState from "../components/SelectState";
import SelectCity from "../components/SelectCity";
import LocationMarker from "../components/LocationMarker";

function Map() {
  const [stateData, setStateData] = useState([]);
  const [stateWise, setStateWise] = useState([]);
  const [markers, setMarkers] = useState([]);

  const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
  const ZOOM_LEVEL = 9;

  const stateSelectHandler = (state) => {
    setStateData(state);
  };

  console.log(stateData);

  const customIcon = new Icon({
    iconUrl: require("../assets/renewable.png"),
    iconSize: [38, 38],
  });

  const submitHandler = (e) => {
    stateData.forEach(async (item) => {
      console.log("oi");
      console.log(item["Name & Address"]);
      const response2 = await fetch(
        `https://www.mapquestapi.com/geocoding/v1/address?key=laKNkcpVReHjC8f9mTJAv879VkvkkZfW&location=${item["Name & Address"]}`
      );
      const result2 = await response2.json();
      console.log(result2);
      setMarkers((prev) => {
        return prev.concat({
          geocode: [
            result2.results[0].locations[0].latLng.lat,
            result2.results[0].locations[0].latLng.lng,
          ],
          popup: item["Name & Address"],
        });
      });
    });
    console.log(stateWise);
  };
  console.log(markers);

  const showMyLocation = async () => {
    const response = await fetch("https://ipinfo.io/json?token=0f879f54b479fe");
    const result = await response.json();
    console.log(result.city);

    const response2 = await fetch(
      "https://www.mapquestapi.com/geocoding/v1/address?key=laKNkcpVReHjC8f9mTJAv879VkvkkZfW&location=M/s. Pruthavi E-Recycle Pvt. Ltd., Plot No.- 31/32 Golden Industries Area Near Rolex Industries Vill- Kothariya Rajkot -360002"
    );
    const result2 = await response2.json();
    console.log(
      result2.results[0].locations[0].latLng.lat,
      result2.results[0].locations[0].latLng.lng
    );
  };

  return (
    <div className="App">
      <div className="map1">
        <div className="data">
          <div>
            <h1>
              Find the E-recycle center near you{" "}
              <span onClick={showMyLocation}>
                <TravelExploreIcon sx={{ color: "blue" }} />
              </span>
            </h1>
          </div>
          <div className="enterData">
            <SelectState onSelect={stateSelectHandler} />
            <SelectCity />
          </div>

          <div className="search" onClick={submitHandler}>
            <span>Search</span>
          </div>
        </div>
      </div>

      <div className="map2">
        <MapContainer
          style={{ width: "100%", height: "100%" }}
          center={center}
          zoom={6}
          scrollWheelZoom>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />

          {markers.map((marker) => {
            return (
              <Marker position={marker.geocode} icon={customIcon}>
                <Popup>
                  <p>{marker.popup}</p>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
