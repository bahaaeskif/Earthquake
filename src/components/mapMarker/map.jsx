import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { iconPerson } from './icon.js';
import './map.css'
import { calcTime } from '../../utilties/time.js'

function Mapsgoogle({ quakes }) {



    let MarkerEarth = quakes.slice(0, 90);

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
        <div className="map__container h-screen w-full ">
            <MapContainer center={position} zoom={9} scrollWheelZoom={false}
                className={" h-full w-full z-10 "} whenCreated={setMap} zoomControl={true}>
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {MarkerEarth.map((AmarkerEarth) => {
                    let time = calcTime(AmarkerEarth);

                    return <Marker position={AmarkerEarth.coordinates
                    } icon={iconPerson} key={AmarkerEarth.earthquake_id}>
                        <Popup>
                            <div className="map__container-datiles ">
                                <div className="mag">{`${AmarkerEarth.mag} :الشدة`}</div>
                                <div className="depth">{`${AmarkerEarth.depth} :العمق`}</div>
                                <div className="time">{`${time}`}</div>
                            </div>
                        </Popup>
                    </Marker>
                })}
            </MapContainer>
        </div>
    );
}

export default Mapsgoogle;