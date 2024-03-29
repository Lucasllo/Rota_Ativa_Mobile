import {
  ImageBackground,
  ScrollView,
  Text,
  View
} from "react-native";
import TextField from "../../components/TextField";
import { Button } from "@react-native-material/core";
import CadastroViewModel from "./CadastroViewModel";
import styles from './CadastroStyles.js'

export default function CadastroView({ navigation }) {
  const { setValue, handleSubmit, onSubmit } = CadastroViewModel(navigation);

  return (
    <View style={styles.con}>
      <ImageBackground
        source={require("../../assets/backgroundImage.png")}
        resizeMode="cover"
        style={styles.background}
      >
          <ScrollView 
            showsVerticalScrollIndicator={false} 
            contentContainerStyle={styles.container}
          >
            <View style={styles.cabecalho}>
              <Text Text style={[styles.titulo, styles.cor]}>
                Abra sua Conta
              </Text>
              <Text style={[styles.subTitulo, styles.cor]}>
                Abra sua conta com alguns detalhes
              </Text>
            </View>
            <TextField
              label={"Nome Completo"}
              placeholder={"Digite seu nome completo"}
              onChangeText={(text) => setValue("nome", text)}
              icon={"account"}
            />
            <TextField
              label={"Email"}
              placeholder={"Digite seu email"}
              onChangeText={(text) => setValue("email", text)}
              icon={"email"}
              keyboardType="email-address"
            />
            <TextField
              label={"CPF"}
              placeholder={"Digite seu cpf"}
              onChangeText={(text) => setValue("cpf", text)}
              icon={"account"}
              keyboardType="numeric"
            />
            <TextField
              label={"Senha"}
              placeholder={"Digite sua senha"}
              onChangeText={(text) => setValue("senha", text)}
              secureTextEntry={true}
              icon={"lock"}
            />
            <TextField
              label={"Confirme sua senha"}
              placeholder={"Digite sua senha novamente"}
              onChangeText={(text) => setValue("senhaConfirma", text)}
              secureTextEntry={true}
              icon={"lock"}
            />
            <Button
              tintColor="#fff"
              style={[styles.button]}
              onPress={handleSubmit(onSubmit)}
              title="Crie sua conta"
            />
          </ScrollView>
      </ImageBackground>
    </View>
  );
}
