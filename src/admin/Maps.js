import React from 'react'
import Map, { GeolocateControl, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import {  FaMotorcycle } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';

const Maps = ({ coursesSorted }) => {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Map
        mapboxAccessToken="pk.eyJ1IjoiY2FzaHN0ZXBoIiwiYSI6ImNsZ2FwbXlhZDFqdm4zbXA4ZGo3c2h3bmgifQ.ENYGFtxG5qPBj8SRr0Gr-A"
        initialViewState={{
          longitude: 15.322222,
          latitude: -4.325,
          zoom: 12,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
        {
          coursesSorted && coursesSorted.length > 0 && coursesSorted
            .map(val => {
              const log1 = val && val.depart && val.depart.split(",")
              const log2 = val && val.arr && val.arr.split(",")
              console.log(log2, " LOG")
              return <div key={val.id}>
                <Marker
                  longitude={log1 && log1[0]}
                  latitude={log1 && log1[1]}
                >
                  <div className='card'>
                    <h5>Course N°{val.id} Départ</h5>
                    <FaMotorcycle size={20} color='red' />
                    <FiUser size={20} />
                  </div>
                </Marker>

                <Marker
                  longitude={log2 && log2[0]}
                  latitude={log2 && log2[1]}
                >
                  <div className='card'>
                    <h5>Course N°{val.id} Arrivée</h5>
                    <FaMotorcycle size={20} color='red' />
                    <FiUser size={20} />
                  </div>
                </Marker>
              </div>
            })
        }

      </Map>
    </div>
  )
}

export default Maps