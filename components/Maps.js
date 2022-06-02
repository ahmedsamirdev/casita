import {
  MapContainer,
  useMap,
  TileLayer,
  Tooltip,
  Marker,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Entries from "../public/Entries.json";
import styles from "../styles/Home.module.css";

const sentimentColor = {
  Negative: "marker-red.png",
  Positive: "marker-green.png",
  Neutrual: "marker-blue.png",
};

function Maps({ coord }) {
  const position = coord;

  // Render map center on change
  function ChangeMapView({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());
    return null;
  }

  return (
    <MapContainer
      className={styles.map_container}
      center={position}
      zoom={12}
      scrollWheelZoom={true}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <ChangeMapView coords={position} />
      {Entries.Entries.Entry.map((entry) => (
        <Marker
          key={entry.message}
          position={[entry.lat, entry.long]}
          icon={
            new L.Icon({
              iconUrl: `/${sentimentColor[entry.sentiment]}`,
              iconSize: [25, 40],
            })
          }
        >
          <Tooltip>{entry.message}</Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Maps;
