
import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  textoBoton: string;
  nombreIcono: React.ComponentProps<typeof Ionicons>["name"];
  colorBoton: string;
  mensaje: string;
};

export default function MiBoton({
  textoBoton,
  nombreIcono,
  colorBoton,
  mensaje,
}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.boton,
        { backgroundColor: colorBoton },
      ]}
      onPress={() => Alert.alert(textoBoton, mensaje)}
    >
      <Ionicons
        name={nombreIcono}
        size={20}
        color="white"
      />

      <Text style={styles.texto}>
        {textoBoton}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    padding: 14,
    borderRadius: 8,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  texto: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
