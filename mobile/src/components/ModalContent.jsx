import React from 'react';
import { View, Image, Text } from 'react-native';
import { Button } from 'react-native-paper';

export default function ModalContent({ selectedHobby, selectedInfo, closeModal, getImageSource, getInfoText, styles }) {
  return (
    <View style={styles.modalContainer}>
      {selectedHobby && (
        <>
          <Image
            style={styles.hobbyImage}
            source={getImageSource(selectedHobby)}
          />
          <Text style={styles.hobbyName}>{selectedHobby.name}</Text>
          <Text style={styles.hobbyDescription}>{selectedHobby.description}</Text>
        </>
      )}
      {selectedInfo && (
        <View>
          <Text>{getInfoText()}</Text>
        </View>
      )}
      <Button mode="contained" onPress={closeModal} style={styles.button}>
        Cerrar
      </Button>
    </View>
  );
}
