import React from 'react';
import { Modal, ScrollView, View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import type { outputData } from '../screens/home/disease-detector';

type OutputModalProps={
    visible:boolean;
    onClose:()=>void;
    output:outputData | undefined
}

const OutputModal:React.FC<OutputModalProps> = ({ visible, onClose, output }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <ScrollView style={styles.scrollView}>
            
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles =StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    maxHeight: '80%',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollView: {
    marginTop: 20,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default OutputModal;
