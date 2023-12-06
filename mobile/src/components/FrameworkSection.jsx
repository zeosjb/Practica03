import React from 'react';
import { View, Text } from 'react-native';

export default function FrameworksSection({ frameworksData, styles }) {
  return (
    <View>
      <Text style={styles.sectionTitle}>Frameworks</Text>
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Indice</Text>
            <Text style={styles.tableHeaderText}>Nombre</Text>
            <Text style={styles.tableHeaderText}>Nivel</Text>
            <Text style={styles.tableHeaderText}>Año</Text>
            <Text style={styles.tableHeaderText}>Porcentaje</Text>
          </View>
          {frameworksData.map((framework, index) => (
            <View key={index} style={styles.tableRow}>
              <Text>{index + 1}</Text>
              <Text>{framework.name}</Text>
              <Text>{framework.level}</Text>
              <Text>{framework.year}</Text>
              <View style={styles.progressBarContainer}>
                <Text>{framework.percentage}%</Text>
              </View>
            </View>
          ))}
        </View>
    </View>
  );
}