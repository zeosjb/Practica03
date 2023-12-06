import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { Modal, Button, Title } from "react-native-paper";

import userApi from "../api/userApi";

export default function EditProfileModal({
  visible,
  onClose,
  userData,
  editedData,
  onEdit,
}) {
  const [sections, setSections] = useState({
    info: false,
    frameworks: false,
    hobbies: false,
  });

  const handleFieldChange = (field, value) => {
    onEdit({ ...editedData, [field]: value });
  };

  const handleSaveChanges = async () => {
    try {
      const response = await userApi.put(`/${userData._id}`, editedData);
      onEdit(response.data);
      onClose();
    } catch (error) {
      console.error("Error al guardar cambios:", error.message);
    }
  };

  const toggleSection = (section) => {
    setSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  };

  return (
    <Modal visible={visible} onDismiss={onClose}>
      <View style={{ padding: 20, backgroundColor: "white", borderRadius: 10 }}>
        <Title onPress={() => toggleSection('info')}>Informacion</Title>
        {sections.info && (
          <>
            <TextInput
          label="Nombre"
          value={editedData.name || userData.name}
          onChangeText={(text) => handleFieldChange("name", text)}
        />

        <TextInput
          label="Apellido"
          value={editedData.lastName || userData.lastName}
          onChangeText={(text) => handleFieldChange("lastName", text)}
        />

        <TextInput
          label="Edad"
          value={editedData.age !== undefined ? editedData.age.toString() : ""}
          onChangeText={(text) => handleFieldChange("age", text)}
        />

        <TextInput
          label="Ciudad"
          value={editedData.city || userData.city}
          onChangeText={(text) => handleFieldChange("city", text)}
        />

        <TextInput
          label="Pais"
          value={editedData.country || userData.country}
          onChangeText={(text) => handleFieldChange("country", text)}
        />

        <TextInput
          label="Correo"
          value={editedData.email || userData.email}
          onChangeText={(text) => handleFieldChange("email", text)}
        />
          </>
        )}

        <Title onPress={() => toggleSection('frameworks')}>Frameworks</Title>
        {sections.frameworks && (
          <>
            <TextInput
          label="Framework 1"
          value={
            editedData.Frameworks && editedData.Frameworks[0]
              ? editedData.Frameworks[0].name
              : ""
          }
          onChangeText={(text) => handleFieldChange("Frameworks[0].name", text)}
        />

        <TextInput
          label="Nivel Framework 1"
          value={
            editedData.Frameworks && editedData.Frameworks[0]
              ? editedData.Frameworks[0].level
              : ""
          }
          onChangeText={(text) =>
            handleFieldChange("Frameworks[0].level", text)
          }
        />

        <TextInput
          label="Año Framework 1"
          value={
            editedData.Frameworks && editedData.Frameworks[0]
              ? editedData.Frameworks[0].year.toString()
              : ""
          }
          onChangeText={(text) => handleFieldChange("Frameworks[0].year", text)}
        />

        <TextInput
          label="Porcentaje Framework 1"
          value={
            editedData.Frameworks && editedData.Frameworks[0]
              ? editedData.Frameworks[0].percentage.toString()
              : ""
          }
          onChangeText={(text) =>
            handleFieldChange("Frameworks[0].percentage", text)
          }
        />

        <TextInput
          label="Framework 2"
          value={
            editedData.Frameworks && editedData.Frameworks[1]
              ? editedData.Frameworks[1].name
              : ""
          }
          onChangeText={(text) => handleFieldChange("Frameworks[1].name", text)}
        />

        <TextInput
          label="Nivel Framework 2"
          value={
            editedData.Frameworks && editedData.Frameworks[1]
              ? editedData.Frameworks[1].level
              : ""
          }
          onChangeText={(text) =>
            handleFieldChange("Frameworks[1].level", text)
          }
        />

        <TextInput
          label="Año Framework 2"
          value={
            editedData.Frameworks && editedData.Frameworks[1]
              ? editedData.Frameworks[1].year.toString()
              : ""
          }
          onChangeText={(text) => handleFieldChange("Frameworks[1].year", text)}
        />

        <TextInput
          label="Porcentaje Framework 2"
          value={
            editedData.Frameworks && editedData.Frameworks[1]
              ? editedData.Frameworks[1].percentage.toString()
              : ""
          }
          onChangeText={(text) =>
            handleFieldChange("Frameworks[1].percentage", text)
          }
        />

        <TextInput
          label="Framework 3"
          value={
            editedData.Frameworks && editedData.Frameworks[2]
              ? editedData.Frameworks[2].name
              : ""
          }
          onChangeText={(text) => handleFieldChange("Frameworks[2].name", text)}
        />

        <TextInput
          label="Nivel Framework 3"
          value={
            editedData.Frameworks && editedData.Frameworks[2]
              ? editedData.Frameworks[2].level
              : ""
          }
          onChangeText={(text) =>
            handleFieldChange("Frameworks[2].level", text)
          }
        />

        <TextInput
          label="Año Framework 3"
          value={
            editedData.Frameworks && editedData.Frameworks[2]
              ? editedData.Frameworks[2].year.toString()
              : ""
          }
          onChangeText={(text) => handleFieldChange("Frameworks[2].year", text)}
        />

        <TextInput
          label="Porcentaje Framework 3"
          value={
            editedData.Frameworks && editedData.Frameworks[2]
              ? editedData.Frameworks[2].percentage.toString()
              : ""
          }
          onChangeText={(text) =>
            handleFieldChange("Frameworks[2].percentage", text)
          }
        />
          </>
        )}

        <Title onPress={() => toggleSection('hobbies')}>Hobbies</Title>
        {sections.hobbies && (
          <>
            <TextInput
          label="Hobbie 1"
          value={
            editedData.hobbies && editedData.hobbies[0]
              ? editedData.hobbies[0].name
              : ""
          }
          onChangeText={(text) => handleFieldChange("hobbies[0].name", text)}
        />

        <TextInput
          label="Descripción Hobbie 1"
          value={
            editedData.hobbies && editedData.hobbies[0]
              ? editedData.hobbies[0].description
              : ""
          }
          onChangeText={(text) =>
            handleFieldChange("hobbies[0].description", text)
          }
        />

        <TextInput
          label="Hobbie 2"
          value={
            editedData.hobbies && editedData.hobbies[1]
              ? editedData.hobbies[1].name
              : ""
          }
          onChangeText={(text) => handleFieldChange("hobbies[1].name", text)}
        />

        <TextInput
          label="Descripción Hobbie 2"
          value={
            editedData.hobbies && editedData.hobbies[1]
              ? editedData.hobbies[1].description
              : ""
          }
          onChangeText={(text) =>
            handleFieldChange("hobbies[1].description", text)
          }
        />

        <TextInput
          label="Hobbie 3"
          value={
            editedData.hobbies && editedData.hobbies[2]
              ? editedData.hobbies[2].name
              : ""
          }
          onChangeText={(text) => handleFieldChange("hobbies[3].name", text)}
        />

        <TextInput
          label="Descripción Hobbie 3"
          value={
            editedData.hobbies && editedData.hobbies[2]
              ? editedData.hobbies[2].description
              : ""
          }
          onChangeText={(text) =>
            handleFieldChange("hobbies[3].description", text)
          }
        />
          </>
        )}

        <Button
          mode="contained"
          style={{ marginTop: 10 }}
          onPress={handleSaveChanges}
        >
          Guardar Cambios
        </Button>
      </View>
    </Modal>
  );
}

