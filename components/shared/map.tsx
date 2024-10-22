import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/images/marker-icon-2x.png',
  iconUrl: '/leaflet/images/marker-icon.png',
  shadowUrl: '/leaflet/images/marker-shadow.png',
});

const Map = () => {
  const position = [51.505, -0.09]; 

  return (
    <MapContainer center={position as any} zoom={13} className="h-screen">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position as any}>
        <Popup>
          Bu yerda sizning joyingiz!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;

