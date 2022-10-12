import { StyleSheet, Text, View, FlatList } from "react-native";
import Actions from "../../components/Actions";
import Balance from "../../components/Balance";

import Header from "../../components/Header";
import Movements from "../../components/Movements";

const list = [
  {
    id: 1,
    label: "Boleto conta luz",
    value: "300,90",
    date: "17/09/2022",
    type: 0,
  },
  {
    id: 2,
    label: "PIX Cliente X",
    value: "2.500,00",
    date: "20/09/2022",
    type: 1,
  },
  {
    id: 3,
    label: "Salário",
    value: "7.200,00",
    date: "22/09/2022",
    type: 1,
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Dedeco VI" />

      <Balance saldo="9.250,90" gastos="-527,00" />

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
