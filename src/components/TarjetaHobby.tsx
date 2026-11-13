
import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  titulo: string;
  descripcion: string;
  icono: React.ComponentProps<typeof Ionicons>["name"];
};

export default function TarjetaHobby({
  titulo,
  descripcion,
  icono,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.tarjeta}
      onPress={() => Alert.alert(titulo, descripcion)}
    >
      <Ionicons
        name={icono}
        size={35}
        color="#2563eb"
      />

      <Text style={styles.titulo}>
        {titulo}
      </Text>

      <Text style={styles.descripcion}>
        Toca para ver más
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: "#ffffff",
    padding: 22,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#dddddd",
  },
  titulo: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 10,
    color: "#1e293b",
  },
  descripcion: {
    color: "#777777",
    marginTop: 5,
    fontSize: 13,
  },
});
