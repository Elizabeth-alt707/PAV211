import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, Modal } from 'react-native';

export default function ModalScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Soy un modal</Text>

      <Button title="Presioname" onPress={() => setModalVisible(true)} color="purple" />
      
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.textoModal}>webos</Text>
            <Button title="Ocultar modal" onPress={() => setModalVisible(false)} color="purple" />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000ff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'purple',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,255,0.5)',
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
  },
  textoModal: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});