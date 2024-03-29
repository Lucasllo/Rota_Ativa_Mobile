import { Text, View, ScrollView, ImageBackground, Image } from "react-native";
import {
  Flex,
  Button,
  Stack,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  TextInput,
} from "@react-native-material/core";
import styles from "./pagamentoStyles.js";
import PagamentoViewModel from "./PagamentoViewModel.js";
import pessoa from "../../dados/pessoas.json";

export default function PagamentoView({ navigation, route }) {
  const {
    setValue,
    handleSubmit,
    visible,
    setVisible,
    onSubmit
  } = PagamentoViewModel();

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
            <Text Text style={[styles.titulo1]}>
              Cartões
            </Text>
          </View>

          {
            pessoa[0].cartões.map((x,k)=>{
              return (
              <Stack
                key={k}
                style={{
                  marginTop: 10,
                  width: 300,
                  height: 150,
                  backgroundColor: "#888",
                  borderRadius: 10,
                }}
                fill
                center
                spacing={4}
              >
                <Flex direction="row" w={350} center>
                  <Text style={[styles.titulo, styles.cor]}>
                    {x.bandeira}
                  </Text>
                  <Image source={require("../../assets/mastercard.png")} />
                </Flex>
                <Flex direction="column" style={{ padding: 20 }}>
                  <Text style={[styles.numeroCartao, styles.cor]}>
                   {x.numero}
                  </Text>
                  <Text style={[styles.titulo, styles.cor]}>
                    {x.nome}
                  </Text>
                </Flex>
              </Stack>
              )
            })
          }

          <View style={{ marginTop: 50 }}>
            <Text Text style={[{ fontSize: 25, color: "#fff" }]}>
              Tickets
            </Text>
          </View>

          <Flex>
            <Stack
              style={{
                width: 300,
                height: 50,
                backgroundColor: "#146464",
                borderRadius: 10,
								marginVertical: 20
              }}
              center
            >
              <Flex style={{ padding: 10 }}>
                <Text style={{color:"#fff", fontSize: 20, fontWeight:"bold"}}>{route.params.user.ticket} cartões disponiveis</Text>
              </Flex>
            </Stack>

            <Button
              style={{
                backgroundColor: "#1CA9A9",
                alignSelf: "center",
              }}
              title="Comprar cartão"
              loadingIndicatorPosition="overlay"
              onPress={() => navigation.navigate('CompraCreditosView', {user: route.params.user})}
            />
          </Flex>

          <Dialog visible={visible} onDismiss={() => setVisible(false)}>
            <DialogHeader title="Novo Cartão" />
            <DialogContent>
              <Stack spacing={1}>
                <TextInput
                  placeholder={"Numero do cartão"}
                  onChangeText={(text) => setValue("numero", text)}
                  variant="standard"
                />
              </Stack>
              <Stack spacing={1}>
                <TextInput
                  placeholder={"Validade"}
                  onChangeText={(text) => setValue("validade", text)}
                  variant="standard"
                />
              </Stack>
              <Stack spacing={1}>
                <TextInput
                  placeholder={"Código de segurança"}
                  onChangeText={(text) => setValue("codigoSeg", text)}
                  variant="standard"
                />
              </Stack>
            </DialogContent>
            <DialogActions>
              <Button
                title="Cancel"
                compact
                variant="text"
                onPress={() => setVisible(false)}
              />
              <Button
                title="Ok"
                compact
                variant="text"
                onPress={handleSubmit(onSubmit)}
              />
            </DialogActions>
          </Dialog>
        </ScrollView>

        <Button
          style={[styles.button]}
          title="Adicionar forma de pagamento"
          loadingIndicatorPosition="overlay"
          onPress={() => setVisible(true)}
        />
      </ImageBackground>
    </View>
  );
}
