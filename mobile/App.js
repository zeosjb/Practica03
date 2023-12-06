import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Avatar, Title, Paragraph, Provider as PaperProvider, Modal } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';


import userApi from './src/api/userApi';
import UserInfo from './src/components/UserInfo';
import HobbiesSection from './src/components/HobbieSection';
import FrameworksSection from './src/components/FrameworkSection';
import ModalContent from './src/components/ModalContent';

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

        <View>
          <Paragraph>{userData?.summary}</Paragraph>
        </View>

        <UserInfo handlePress={handlePress} userData={userData} styles={styles} />

        <HobbiesSection handleHobbyPress={handleHobbyPress} userData={userData} styles={styles} />

        <FrameworksSection frameworksData={frameworksData} styles={styles} />

        <Modal visible={modalVisible} onDismiss={closeModal}>
          <ModalContent
            selectedHobby={selectedHobby}
            selectedInfo={selectedInfo}
            closeModal={closeModal}
            getImageSource={getImageSource}
            getInfoText={getInfoText}
            styles={styles}
          />
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
  themeButtonContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
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
    paddingHorizontal: 40,
    paddingVertical: 7,
    marginVertical: 5,
    borderRadius: 18,
    marginHorizontal: 2,
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
    paddingHorizontal: 20,
    paddingVertical: 7,
    margin: 5,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableContainer: {
    width: 350,
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
  button: {
    marginTop: 10
  },
});