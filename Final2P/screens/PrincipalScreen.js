import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ImageBackground, 
  Alert, 
  ScrollView,
  TouchableOpacity 
} from 'react-native';

export default function PrincipalScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleDetails = (city, temp, condition) => {
    Alert.alert(
      `Clima en ${city}`,
      `Temperatura: ${temp}\nCondición: ${condition}`,
      [{ text: "OK", style: "cancel" }]
    );
  };

  const weatherData = [
    { city: "Puebla", temp: "-5°", condition: "Nublado" },
    { city: "Querétaro", temp: "25°", condition: "Soleado" },
    { city: "Guanajuato", temp: "-10°", condition: "Tormenta eléctrica" },
    { city: "Veracruz", temp: "10°", condition: "Lluvia ligera" },
  ];

  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <ImageBackground 
          source={require('../assets/nube.jpg')} 
          style={styles.splashBackground}
          resizeMode="cover"
        >
          <View style={styles.splashOverlay}>
            <Text style={styles.splashTitle}>WeatherUPQ</Text>
            <Text style={styles.splashSubtitle}>Cargando...</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }

  return (
    <ImageBackground 
      source={require('../assets/nube.jpg')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Clima Actual</Text>
        </View>

        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
        >
          {weatherData.map((item, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cityName}>{item.city}</Text>
                <Text style={styles.temperature}>{item.temp}</Text>
              </View>
              
              <Text style={styles.condition}>{item.condition}</Text>
              
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleDetails(item.city, item.temp, item.condition)}
              >
                <Text style={styles.buttonText}>Ver Detalles</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
  },
  splashBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  splashOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  splashSubtitle: {
    fontSize: 16,
    color: 'white',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  header: {
    padding: 20,
    paddingTop: 50,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cityName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  temperature: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  condition: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});