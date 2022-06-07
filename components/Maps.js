import {
  MapContainer,
  useMap,
  TileLayer,
  Tooltip,
  Marker,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styles from "../styles/Home.module.css";

const sentimentColor = {
  Negative: "marker-red.png",
  Positive: "marker-green.png",
  Neutrual: "marker-blue.png",
};

function Maps({ coord, message, sentiment }) {
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
      <Marker
        key={message}
        position={[coord[0], coord[1]]}
        icon={
          new L.Icon({
            iconUrl: `/${sentimentColor[sentiment]}`,
            iconSize: [25, 40],
          })
        }
      >
        <Tooltip>{message}</Tooltip>
      </Marker>
    </MapContainer>
  );
}

export default Maps;
