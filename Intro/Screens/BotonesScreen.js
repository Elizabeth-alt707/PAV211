
import { Text, StyleSheet, View, TouchableOpacity, Switch } from 'react-native';
import React, { useState } from 'react';

// Componente principal que se exporta
export default function BotonesScreen() {

  // "prendido" guarda si el estado está encendido o apagado (true o false)
  // "setPrendido" sirve para cambiar ese valor
  const [prendido, setPrendido] = useState(false);

  // Cambia el color de fondo según el estado (claro si está prendido, oscuro si no)
  const backgroundColor = prendido ? '#F5F5F5' : '#121212';

  // Cambia el color del texto según el fondo (negro o blanco)
  const textColor = prendido ? '#000' : '#FFF';

  // Todo lo visual que se mostrará en pantalla
  return (
    // "style" combina los estilos generales con el color de fondo dinámico
    <View style={[styles.container, { backgroundColor }]}>

      {/* Texto que muestra si el estado está prendido o apagado */}
      <Text style={[styles.texto, { color: textColor }]}>
        Estado: {prendido ? 'Prendido' : 'Apagado'}
      </Text>

      {/* Botón para prender */}
      <TouchableOpacity
        style={styles.botonEncendido}
        onPress={() => setPrendido(true)} // cambia el estado a "true"
      >
        <Text style={styles.textoBoton}>PRENDER</Text>
      </TouchableOpacity>

      {/* Botón para apagar */}
      <TouchableOpacity
        style={styles.botonApagado}
        onPress={() => setPrendido(false)} // cambia el estado a "false"
      >
        <Text style={styles.textoBoton}>APAGAR</Text>
      </TouchableOpacity>

      {/* Switch (interruptor visual) que también controla el estado */}
      <View style={styles.switchContainer}>
        <Text style={[styles.switchLabel, { color: textColor }]}>
          Control de Switch:
        </Text>

        {/* Switch sincronizado con el mismo estado */}
        <Switch value={prendido} onValueChange={setPrendido} />
      </View>
    </View>
  );
}

// Estilos visuales
const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa toda la pantalla
    justifyContent: 'center', // centra el contenido verticalmente
    alignItems: 'center', // centra el contenido horizontalmente
    backgroundColor: '#B77272', // color de fondo por defecto
  },
  texto: {
    fontSize: 22,
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  botonEncendido: {
    backgroundColor: '#0C9600', // verde
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 10,
    marginBottom: 15,
  },
  botonApagado: {
    backgroundColor: '#B10000', // rojo
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 10,
    marginBottom: 25,
  },
  textoBoton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  switchContainer: {
    flexDirection: 'row', // coloca el texto y el switch en la misma línea
    alignItems: 'center', // los centra verticalmente
    gap: 10, // deja un pequeño espacio entre ellos
  },
  switchLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 10,
  },
});