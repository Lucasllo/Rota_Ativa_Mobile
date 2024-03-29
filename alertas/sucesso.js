import { Image, ImageBackground, Text, View } from "react-native";
import { Button } from "@react-native-material/core";
import styles from "./stylesAlertas.js";
import { useEffect, useState } from "react";

export default function Sucesso({route, navigation }) {

  const [page, setPage] = useState();
  const [mensagem, setMensagem] = useState();
  const [button, setButton] = useState();

  useEffect(() => {
    setPage(route.params.page);
    setMensagem(route.params.mensagem);
    setButton(route.params.button);
  }, [route])

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/backgroundImage.png")}
        resizeMode="cover"
        style={styles.background}
      >
        <Image style={styles.image} source={require("../assets/sucesso.png")} />

        <View style={styles.cabecalho}>
          <Text style={[styles.titulo, styles.cor]}>
            {mensagem}
          </Text>
        </View>

        <Button
          tintColor="#fff"
          style={[styles.buttonSucess, styles.cadastro]}
          onPress={() => navigation.navigate(page)}
          title={button}
        />
      </ImageBackground>
    </View>
  );
}
