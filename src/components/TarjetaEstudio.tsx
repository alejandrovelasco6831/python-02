
import { View, Text, StyleSheet } from "react-native";

type Props = {
  titulo: string;
  institucion: string;
  anio: number;
  enCurso: boolean;
};

export default function TarjetaEstudio({
  titulo,
  institucion,
  anio,
  enCurso,
}: Props) {
  return (
    <View
      style={[
        styles.tarjeta,
        enCurso ? styles.enCurso : styles.finalizado,
      ]}
    >
      <Text style={styles.titulo}>{titulo}</Text>

      {enCurso && (
        <View style={styles.insignia}>
          <Text style={styles.textoInsignia}>
            En Curso
          </Text>
        </View>
      )}

      <Text style={styles.subtitulo}>
        {institucion}
      </Text>

      <Text style={styles.anio}>{anio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
  },
  finalizado: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
  },
  enCurso: {
    backgroundColor: "#eef2ff",
    borderColor: "#6366f1",
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1e293b",
  },
  subtitulo: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  anio: {
    fontSize: 12,
    color: "#888",
    marginTop: 4,
  },
  insignia: {
    backgroundColor: "#6366f1",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginTop: 8,
  },
  textoInsignia: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 12,
  },
});
