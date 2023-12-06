import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default function UserInfo({ handlePress, userData, styles }) {
  return (
    <View style={styles.infoContainer}>
      <TouchableOpacity onPress={() => handlePress('edad')} style={styles.infoButton}>
        <Text>Edad</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('ciudad')} style={styles.infoButton}>
        <Text>Ciudad</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('email')} style={styles.infoButton}>
        <Text>Email</Text>
      </TouchableOpacity>
    </View>
  );
}
