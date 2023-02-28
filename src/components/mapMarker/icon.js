import L from 'leaflet';

const iconPerson = new L.Icon({
    iconUrl: require('../../imgs/logo.png'),
    iconRetinaUrl: require('../../imgs/logo.png'),
    iconAnchor: null,
    popupAnchor: [-0, -0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 30),
    className: ''
});

export { iconPerson };