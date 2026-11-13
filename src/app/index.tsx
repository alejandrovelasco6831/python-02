
import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MiBoton from "../components/MiBoton";

export default function Inicio() {
  return (
    <ScrollView style={styles.contenedor}>

      {/* DATOS PERSONALES */}
      <View style={styles.encabezado}>
        <Ionicons
          name="person-circle"
          size={110}
          color="#2563eb"
        />

        <Text style={styles.nombre}>
          José Alejandro Velásquez Saavedra
        </Text>

        <Text style={styles.profesion}>
          Tecnólogo en Análisis y Desarrollo de Software
        </Text>

        <Text style={styles.institucion}>
          SENA - Ficha 3407187
        </Text>
      </View>

      {/* PERFIL PROFESIONAL */}
      <View style={styles.tarjeta}>
        <Text style={styles.titulo}>
          Perfil Profesional
        </Text>

        <Text style={styles.descripcion}>
          Soy aprendiz del SENA en el programa de Análisis
          y Desarrollo de Software. Tengo conocimientos
          en React, JavaScript, Python, Node.js y bases
          de datos.

          Me interesa el desarrollo de aplicaciones
          web y móviles, aprender nuevas tecnologías
          y mejorar mis habilidades como programador.
        </Text>
      </View>

      {/* INFORMACIÓN PERSONAL */}
      <View style={styles.tarjeta}>
        <Text style={styles.titulo}>
          Información Personal
        </Text>

        <Text style={styles.dato}>
          📍 Ciudad: Bogotá D.C.
        </Text>

        <Text style={styles.dato}>
          🎓 Formación: Tecnólogo ADSO
        </Text>

        <Text style={styles.dato}>
          💻 Área: Desarrollo de Software
        </Text>
      </View>

      {/* BOTONES DE CONTACTO */}
      <View style={styles.tarjeta}>
        <Text style={styles.titulo}>
          Contacto
        </Text>

        <MiBoton
          textoBoton="Enviar Correo"
          nombreIcono="mail"
          colorBoton="#eab308"
          mensaje="Correo: escribe_aqui_tu_correo"
        />

        <MiBoton
          textoBoton="Llamar"
          nombreIcono="call"
          colorBoton="#2563eb"
          mensaje="Teléfono: escribe_aqui_tu_numero"
        />

        <MiBoton
          textoBoton="LinkedIn"
          nombreIcono="logo-linkedin"
          colorBoton="#0a66c2"
          mensaje="Mi perfil de LinkedIn"
        />

        <MiBoton
          textoBoton="GitHub"
          nombreIcono="logo-github"
          colorBoton="#24292e"
          mensaje="Mi repositorio de GitHub"
        />
      </View>

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

  nombre: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#1e293b",
    textAlign: "center",
    marginTop: 10,
  },

  profesion: {
    fontSize: 15,
    color: "#2563eb",
    textAlign: "center",
    marginTop: 8,
  },

  institucion: {
    fontSize: 13,
    color: "#64748b",
    marginTop: 5,
  },

  tarjeta: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },

  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 12,
  },

  descripcion: {
    fontSize: 14,
    color: "#475569",
    lineHeight: 23,
  },

  dato: {
    fontSize: 14,
    color: "#475569",
    marginBottom: 10,
  },
});
