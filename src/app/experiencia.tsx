
import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TarjetaExperiencia from "../components/TarjetaExperiencia";

export default function Experiencia() {
  return (
    <ScrollView style={styles.contenedor}>

      {/* ENCABEZADO */}
      <View style={styles.encabezado}>
        <Ionicons
          name="briefcase-outline"
          size={80}
          color="#2563eb"
        />

        <Text style={styles.titulo}>
          Mi Experiencia
        </Text>

        <Text style={styles.subtitulo}>
          Proyectos y experiencia académica
        </Text>
      </View>

      {/* EXPERIENCIA 1 */}
      <TarjetaExperiencia
        cargo="Desarrollador Web - RefugiPet"
        empresa="Proyecto de formación SENA"
        periodo="2026"
        descripcion="Participación en el desarrollo de una plataforma web para la adopción de mascotas. Se utilizaron tecnologías como React, Python, FastAPI y bases de datos."
      />

      {/* EXPERIENCIA 2 */}
      <TarjetaExperiencia
        cargo="Desarrollo de API REST"
        empresa="Actividad académica SENA"
        periodo="2026"
        descripcion="Desarrollo de servicios web y operaciones CRUD utilizando Node.js, Express y MySQL. Implementación de rutas para gestionar clientes, productos y ventas."
      />

      {/* EXPERIENCIA 3 */}
      <TarjetaExperiencia
        cargo="Desarrollo de Aplicaciones Móviles"
        empresa="Formación académica SENA"
        periodo="2026"
        descripcion="Prácticas de creación de aplicaciones móviles con React Native y Expo, implementando componentes reutilizables y navegación entre pantallas."
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
