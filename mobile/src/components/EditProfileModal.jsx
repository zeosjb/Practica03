import React from "react";
import { View, TextInput } from "react-native";
import { Modal, Button } from "react-native-paper";

import userApi from "../api/userApi";

export default function EditProfileModal({
  visible,
  onClose,
  userData,
  editedData,
  onEdit,
}) {

  const handleFieldChange = (field, value) => {
    onEdit({ ...editedData, [field]: value });
  };

  const handleSaveChanges = async () => {
    try {
      const response = await userApi.put(`/${userData._id}`, editedData);
      onEdit(response.data);
      onClose();
    } catch (error) {
      console.error('Error al guardar cambios:', error.message);
    }
  };

  return (
    <Modal visible={visible} onDismiss={onClose}>
      <View style={{ padding: 20, backgroundColor: 'white', borderRadius: 10 }}>
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

        <Button mode="contained" style={{ marginTop: 10 }} onPress={handleSaveChanges}>
          Guardar Cambios
        </Button>
      </View>
    </Modal>
  );
}
