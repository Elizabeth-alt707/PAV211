image background // Importamos los elementos necesarios desde React y React Native
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ImageBackground, Dimensions } from "react-native";

// Imagen del splash inicial (pantalla de carga)
const SplashImage = require("../assets/favicon.png");

// Imagen principal del fondo (pantalla que aparece después del splash)
const MainBackground = require("../assets/splah-icon.png");

// Componente principal
export default function ImageBackgroundScreen({ navigation }) {
  // Estado para controlar si se muestra la pantalla de carga
  const [showSplash, setShowSplash] = useState(true);

  // useEffect se ejecuta una vez al iniciar el componente
  // Después de 3 segundos cambia showSplash a false
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 3 segundos

    // Limpia el temporizador si el componente se desmonta antes
    return () => clearTimeout(timer);
  }, []);

  // Si showSplash es true, muestra la pantalla de carga
  if (showSplash) {
    return (
      <ImageBackground
        source={SplashImage} // Imagen del splash
        style={styles.background}
        resizeMode="cover"
      >
        {/* Capa oscura encima de la imagen */}
        <View style={styles.vineta} />

        {/* Texto del splash */}
        <View style={styles.overlay}>
          <Text style={styles.title}>Bienvenido a la App</Text>
          <Text style={styles.subtitle}>Cargando...</Text>
        </View>
      </ImageBackground>
    );
  }

  // Si showSplash es false, muestra la pantalla principal
  return (
    <ImageBackground
      source={MainBackground} // Imagen de fondo principal
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.mainScreen}>
        <Text style={styles.mainText}>Bienvenido a la pantalla principal.</Text>
      </View>
    </ImageBackground>
  );
}

// Obtenemos las dimensiones de la pantalla del dispositivo
const { width, height } = Dimensions.get("window");

// Estilos visuales
const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
  vineta: {
    // Relleno completo del fondo con transparencia (efecto oscuro)
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  overlay: {
    // Centrar los textos en la pantalla
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#ff0000", // Rojo fuerte
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    color: "#c10000", // Rojo oscuro
    fontSize: 20,
  },
  mainScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    fontSize: 24,
    color: "#ffffff", // Texto blanco
  },
});