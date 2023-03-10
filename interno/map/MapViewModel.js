import { useState } from "react";
import * as Location from "expo-location";

export default function MapViewModel() {
  const [regiao, setRegiao] = useState({
    latitude: -3.731862,
    longitude: -38.526669,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [origem, setOrigem] = useState();
  const [destino, setDestino] = useState();
  const [card, setCard] = useState(false);
  const [styleMap, setStyleMap] = useState({
    width: "100%",
    height: "100%",
  });

  const [isLoading, setIsLoading] = useState();

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("A permissão para acessar o local foi negada");
      return;
    }

    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    setOrigem({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };

  return {
    regiao,
    origem,
    setOrigem,
    destino,
    setDestino,
    card, 
    setCard,
    styleMap, 
    setStyleMap,
    userLocation,
    isLoading
  };
}
