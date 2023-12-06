import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default function HobbiesSection({ handleHobbyPress, userData, styles }) {
  return (
    <View>
      <Text style={styles.sectionTitle}>Hobbies</Text>
      <View style={styles.hobbiesContainer}>
        {userData?.hobbies.map((hobby, index) => (
          <TouchableOpacity
            key={index}
            style={styles.hobbyBox}
            onPress={() => handleHobbyPress(hobby)}
          >
            <Text>{hobby.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}