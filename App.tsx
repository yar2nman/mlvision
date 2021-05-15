import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [selectedImage, setSelectedImage] = useState<any>(null)
 
 
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
        <TouchableOpacity
        onPress={openImagePickerAsync}
        style={styles.button}>
          <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
      </View>
    );
  }

  
  
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} style={styles.logo } />
      <Text style={styles.instructions} >
        hi there
      </Text>

      <TouchableOpacity
        onPress={openImagePickerAsync}
        style={styles.button}>
          <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 13,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
    margin: 4,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  }, 
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  }, 
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  }
});
