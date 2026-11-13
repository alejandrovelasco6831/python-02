
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  cargo: string;
  empresa: string;
  periodo: string;
  descripcion: string;
};

export default function TarjetaExperiencia({
  cargo,
  empresa,
  periodo,
  descripcion,
}: Props) {
  return (
    <View style={styles.tarjeta}>
      <Ionicons
        name="briefcase-outline"
        size={28}
        color="#2563eb"
      />

      <Text style={styles.titulo}>
        {cargo}
      </Text>

      <Text style={styles.empresa}>
        {empresa}
      </Text>

      <Text style={styles.periodo}>
        {periodo}
      </Text>

      <Text style={styles.descripcion}>
        {descripcion}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: "#ffffff",
    padding: 18,
    borderRadius: 12,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#dddddd",
  },
  titulo: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 10,
    color: "#1e293b",
  },
  empresa: {
    fontSize: 14,
    color: "#2563eb",
    marginTop: 5,
  },
  periodo: {
    color: "#777777",
    marginTop: 4,
  },
  descripcion: {
    color: "#444444",
    marginTop: 10,
    lineHeight: 21,
  },
});
