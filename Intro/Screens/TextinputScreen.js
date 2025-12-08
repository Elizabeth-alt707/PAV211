import { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView 
} from 'react-native';

export default function TextimputScreen({ navigation }) {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.container}>

        <Text style={styles.title}>Bienvenido a</Text>
        <Text style={styles.subtitle}>Health Hero</Text>

        <Text style={styles.label}>Usuario:</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          placeholderTextColor="#999"
          value={usuario}
          onChangeText={setUsuario}
        />

        <Text style={styles.label}>Contraseña:</Text>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Olvidaste tu contraseña */}
        <TouchableOpacity onPress={() => navigation.navigate("RecuperarScreen")}>
          <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>

        {/* Iniciar sesión */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("MenuScreen")}
        >
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        {/* ¿Todavía no tienes una cuenta? (AHORA ES BOTÓN) */}
        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
          <Text style={styles.link}>¿Todavía no tienes una cuenta?</Text>
        </TouchableOpacity>

        {/* Botón Registrarse */}
        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingVertical: 40,
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    color: "#000",
  },
  subtitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
  },
  label: {
    alignSelf: "flex-start",
    marginTop: 10,
    color: "#333",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 8,
    color: "#000",
  },
  link: {
    color: "#444",
    textDecorationLine: "underline",
    marginTop: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#8b0000",
    padding: 15,
    width: "80%",
    borderRadius: 10,
  },
  buttonRegister: {
    marginTop: 10,
    backgroundColor: "#a00000",
    padding: 15,
    width: "80%",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  textSmall: {
    marginTop: 15,
    color: "#333",
  }
});