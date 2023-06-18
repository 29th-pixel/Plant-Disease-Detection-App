import React from 'react';
import { Modal, ScrollView, View, Text, TouchableOpacity,StyleSheet,Image } from 'react-native';
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
                <View>
                <View>
                    <View>
                    <Text>
                        {output?.title}🍂
                    </Text>
                    </View>
                    {/* <br /> */}
                    <View>
                    <Image source={{uri:output?.image_url}} />
                    </View>

                    {/* <br /> */}
                    <View>
                    <View>
                        <Text>
                        {output?.pred === 3 ||
                        output?.pred === 5 ||
                        output?.pred === 7 ||
                        output?.pred === 11 ||
                        output?.pred === 15 ||
                        output?.pred === 18 ||
                        output?.pred === 20 ||
                        output?.pred === 23 ||
                        output?.pred === 24 ||
                        output?.pred === 25 ||
                        output?.pred === 28 ||
                        output?.pred === 38 ? (
                            <Text> Tips to Grow Healthy Plants :</Text>
                        ) : (
                            <Text>Brief Descritpion :</Text>
                        )}
                        </Text>
                        <Text>{output?.desc}</Text>
                    </View>

                    <View>
                        <Text>
                        {output?.pred === 3 ||
                        output?.pred === 5 ||
                        output?.pred === 7 ||
                        output?.pred === 11 ||
                        output?.pred === 15 ||
                        output?.pred === 18 ||
                        output?.pred === 20 ||
                        output?.pred === 23 ||
                        output?.pred === 24 ||
                        output?.pred === 25 ||
                        output?.pred === 28 ||
                        output?.pred === 38 ? (
                            <Text> Benefits :</Text>
                        ) : (
                            <Text>Prevent This Plant Disease By follow below steps :</Text>
                        )}
                        </Text>
                        <Text>{output?.prevention}</Text>
                    </View>
                    </View>

                    <Text>
                    {output?.pred !== 4 ? (
                        <>
                        <Text>
                            {output?.pred === 3 ||
                            output?.pred === 5 ||
                            output?.pred === 7 ||
                            output?.pred === 11 ||
                            output?.pred === 15 ||
                            output?.pred === 18 ||
                            output?.pred === 20 ||
                            output?.pred === 23 ||
                            output?.pred === 24 ||
                            output?.pred === 25 ||
                            output?.pred === 28 ||
                            output?.pred === 38 ? (
                            <Text> Fertilizer :</Text>
                            ) : (
                            <Text>Supplements :</Text>
                            )}
                        </Text>

                        <Text>{output?.sname}</Text>
                        </>
                    ) : (
                        <View></View>
                    )}
                    </Text>
                </View>
                </View>
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
