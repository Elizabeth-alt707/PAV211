 // Importamos los hooks y componentes necesarios desde React y React Native
import { useState } from 'react';
import { StyleSheet, Text, View, Alert, Platform, ActivityIndicator, Button } from 'react-native';

// Componente principal de la pantalla
export default function ActivityScreen() {

  // Declaramos una variable de estado llamada "cargando"
  // "cargando" guarda si el indicador de carga (ruedita) debe mostrarse o no
  // "setCargando" es la función que actualiza ese valor
  const [cargando, setCargando] = useState(false);

  // --- FUNCIÓN QUE SIMULA UN PROCESO DE CARGA ---
  const carga = () => {
    // Al presionar el botón, activamos la ruedita de carga
    setCargando(true);

    // Simulamos un proceso que dura 3 segundos
    setTimeout(() => {
      // Al terminar el tiempo, ocultamos la ruedita
      setCargando(false);

      // Verificamos en qué plataforma se está ejecutando la app
      if (Platform.OS === 'web') {
        // Si es web, usamos la alerta del navegador
        window.alert('Carga completa');
      } else {
        // Si es Android o iOS, usamos la alerta nativa del sistema
        Alert.alert('Carga completa');
      }
    }, 3000); // Tiempo de espera: 3 segundos
  };

  // --- LO QUE SE MUESTRA EN PANTALLA ---
  return (
    // Vista principal que contiene todo el contenido
    <View style={styles.container}>

      {/* Texto principal de la pantalla */}
      <Text style={styles.texto}>Presione para iniciar la carga</Text>

      {/* Contenedor para el botón y la ruedita */}
      <View style={styles.botonesContainer}>

        {/* Operador ternario:
            Si 'cargando' es true → muestra el ActivityIndicator (ruedita)
            Si 'cargando' es false → muestra el botón */}
        {cargando ? (
          // Ruedita de carga (cuando está activo)
          <ActivityIndicator size='large' color='red' />
        ) : (
          // Botón (cuando no hay carga)
          <Button
            color='brown'                      // Color del botón
            title='Presione para iniciar'      // Texto del botón
            onPress={carga}                    // Acción al presionarlo
          />
        )}
      </View>
    </View>
  );
};

// --- ESTILOS VISUALES DE LA PANTALLA ---
const styles = StyleSheet.create({
  container: {
    flex: 1,                      // Ocupa toda la pantalla
    backgroundColor: '#836969ff', // Fondo color marrón claro
    alignItems: 'center',         // Centra horizontalmente el contenido
    justifyContent: 'center',     // Centra verticalmente el contenido
  },
  texto: {
    color: '#07060aff',           // Color del texto (gris oscuro)
    fontSize: 30,                 // Tamaño grande de letra
    fontFamily: 'Times New Roman',// Tipo de fuente
    fontWeight: 'bold',           // Texto en negritas
    fontStyle: 'italic',          // Texto en cursiva
  },
  botonesContainer: {
    marginTop: 20,                // Espacio arriba del contenedor
    gap: 20,                      // Separación entre los elementos internos
  },
});