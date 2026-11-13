
import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TarjetaHobby from "../components/TarjetaHobby";

export default function Hobbies() {
  return (
    <ScrollView style={styles.contenedor}>

      {/* ENCABEZADO */}
      <View style={styles.encabezado}>
        <Ionicons
          name="heart-outline"
          size={80}
          color="#2563eb"
        />

        <Text style={styles.titulo}>
          Mis Hobbies
        </Text>

        <Text style={styles.subtitulo}>
          Actividades que disfruto en mi tiempo libre
        </Text>
      </View>

      {/* HOBBY 1 */}
      <TarjetaHobby
        titulo="Programación"
        icono="code-slash-outline"
        descripcion="Me gusta aprender nuevas tecnologías, practicar programación y desarrollar proyectos de software."
      />

      {/* HOBBY 2 */}
      <TarjetaHobby
        titulo="Videojuegos"
        icono="game-controller-outline"
        descripcion="Disfruto jugar videojuegos en mi tiempo libre, especialmente juegos multijugador y de estrategia."
      />

      {/* HOBBY 3 */}
      <TarjetaHobby
        titulo="Música"
        icono="musical-notes-outline"
        descripcion="Me gusta escuchar música para relajarme y distraerme durante mis tiempos libres."
      />

      {/* HOBBY 4 */}
      <TarjetaHobby
        titulo="Tecnología"
        icono="laptop-outline"
        descripcion="Me interesa conocer nuevas tecnologías, aprender sobre computadoras y explorar herramientas digitales."
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    padding: 20,
  },

  encabezado: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 25,
  },

  titulo: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#1e293b",
    marginTop: 10,
    textAlign: "center",
  },

  subtitulo: {
    fontSize: 14,
    color: "#2563eb",
    marginTop: 5,
    textAlign: "center",
  },
});
