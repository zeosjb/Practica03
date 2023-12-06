import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { Avatar, Text, Title, Paragraph, Provider as PaperProvider, Modal, Button, IconButton } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';

import userApi from './src/api/userApi';

export default function App() {
  const [userData, setUserData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedHobby, setSelectedHobby] = useState(null);
  const [selectedInfo, setSelectedInfo] = useState('');
  const [frameworksData, setFrameworksData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await userApi.get('/');

        const firstProfile = response.data[0];

        if (firstProfile) {
          setUserData(firstProfile);
          setFrameworksData(firstProfile.Frameworks || []);
        } else {
          console.error('No se encontraron perfiles.');
        }
      } catch (error) {
        console.error('Error al obtener datos del perfil:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleHobbyPress = (hobby) => {
    setModalVisible(true);
    setSelectedHobby(hobby);
  };

  const handlePress = (infoType) => {
    setModalVisible(true);
    setSelectedInfo(infoType);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedHobby(null);
    setSelectedInfo('');
  };

  const getInfoText = () => {
    switch (selectedInfo) {
      case 'edad':
        return userData ? `${userData.age} Años` : 'Edad: Cargando...';
      case 'ciudad':
        return userData ? `${userData.city}, ${userData.country}` : 'Ciudad: Cargando...';
      case 'email':
        return userData ? `${userData.email}` : 'Correo Electrónico: Cargando...';
      default:
        return '';
    }
  };

  function getImageSource(hobby) {
    switch (userData.hobbies.indexOf(hobby)) {
      case 0:
        return require('./src/assets/imagen1.jpg');
      case 1:
        return require('./src/assets/imagen2.jpg');
      case 2:
        return require('./src/assets/imagen3.jpg');
      default:
        return null;
    }
  }

  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <Avatar.Icon size={100} icon="account-circle" />
        <Title>{userData?.name} {userData?.lastName}</Title>

        <View style={styles}>
          <Paragraph>{userData?.summary}</Paragraph>
        </View>

        <Text style={styles.infoTitle}>Información Personal:</Text>
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

        <Modal visible={modalVisible} onDismiss={closeModal}>
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
            <Button onPress={closeModal}>Cerrar</Button>
          </View>
        </Modal>

        <StatusBar style="auto" />
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoButton: {
    width: 'auto',
    height: 'auto',
    backgroundColor: 'lightgray',
    padding: 'auto',
    marginVertical: 5,
    borderRadius: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  hobbiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  hobbyBox: {
    width: 'auto',
    height: 'auto',
    backgroundColor: 'lightgray',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableContainer: {
    width: '100%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    marginTop: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'lightblue',
    padding: 10,
  },
  tableHeaderText: {
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    alignItems: 'center',
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    height: 10,
    backgroundColor: 'lightblue',
    marginLeft: 5,
  },
  modalContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
  },
  hobbyImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  hobbyName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  hobbyDescription: {
    fontSize: 16,
  },
});
