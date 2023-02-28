import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { iconPerson } from './icon.js';
import './map.css'


function Mapsgoogle({ quakes }) {



    let MarkerEarth = quakes.slice(0, 90);

    console.log(MarkerEarth)

    const position = [36.72676160017407, 37.10186974881445];
    const fillBlueOptions = { fillColor: "#0484D6" };
    const [map, setMap] = useState(null);

    useEffect(() => {
        if (map) {
            setInterval(function () {
                map.invalidateSize();
            }, 100);
        }
    }, [map]);

    return (
        <div className="map-container h-screen flex justify-center items-center">
            <MapContainer center={position} zoom={9} scrollWheelZoom={false}
                className={" h-full w-11/12 md:w-11/12 lg:w-11/12 "} whenCreated={setMap}>
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {MarkerEarth.map((AmarkerEarth) => {
                    return <Marker position={AmarkerEarth.coordinates
                    } icon={iconPerson}>
                    </Marker>
                })}
            </MapContainer>
        </div>
    );
}

export default Mapsgoogle;