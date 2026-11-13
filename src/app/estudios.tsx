
import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TarjetaEstudio from "../components/TarjetaEstudio";

export default function Estudios() {
  return (
    <ScrollView style={styles.contenedor}>

      {/* ENCABEZADO */}
      <View style={styles.encabezado}>
        <Ionicons
          name="school-outline"
          size={80}
          color="#2563eb"
        />

        <Text style={styles.titulo}>
          Formación Académica
        </Text>

        <Text style={styles.subtitulo}>
          Mis estudios realizados y en curso
        </Text>
      </View>

      {/* ESTUDIO 1 */}
      <TarjetaEstudio
        titulo="Educación Básica"
        institucion="Nombre de tu colegio"
        anio={2020}
        enCurso={false}
      />

      {/* ESTUDIO 2 */}
      <TarjetaEstudio
        titulo="Bachillerato"
        institucion="Nombre de tu colegio"
        anio={2024}
        enCurso={false}
      />

      {/* ESTUDIO 3 */}
      <TarjetaEstudio
        titulo="Tecnólogo en Análisis y Desarrollo de Software"
        institucion="Servicio Nacional de Aprendizaje - SENA"
        anio={2026}
        enCurso={true}
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
