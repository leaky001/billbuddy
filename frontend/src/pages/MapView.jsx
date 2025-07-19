// MapView.jsx
import React, { useEffect, useState } from 'react';
import { getBills } from '../services/billService';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function MapView() {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getBills();
      setBills(data.filter(b => b.location?.lat && b.location?.lng));
    }
    load();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Bills on Map</h2>
      <MapContainer center={[6.5244, 3.3792]} zoom={6} style={{ height: '500px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {bills.map(b => (
          <Marker key={b._id} position={[b.location.lat, b.location.lng]}>
            <Popup>
              <strong>{b.title}</strong><br />
              ₦{b.amount}<br />
              {b.location.name}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
