import {
  ScrollView,
  Switch,
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Button,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
// import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import Toast from "react-native-toast-message";
import showToast from "../utilities/Toast";
import {launchImageLibrary} from 'react-native-image-picker';

export default function CreateNews() {
  const [text, onChangeText] = React.useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setImage(imageUri);
      }
    });
  };

  //switch
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const createPost = async () => {
    const payload = {
      image: image,
      description: text,
      name: "samuel",
      role: "author",
    };
    try {
      let res = await axios.post("http://192.168.1.40:3000/create", payload);
      console.log(res.data);
      if (res.data.code === 0) {
        showToast("error", "Error", "Error creating post");
        return;
      }

      showToast("success", "Success", "Post created");

      setImage("");
      onChangeText("");
    } catch (err) {
      console.error(err);
      showToast("error", "Error", "Something went wrong");
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Description"
          keyboardType="text"
          multiline={true}
          numberOfLines={4}
        />
      </View>
      {/* <View style={styles.switch}>
        <Text>use image</Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View> */}
      <View style={styles.button}>
        <Button title="Pick an image" onPress={pickImage} />
        {image && (
          <Image
            source={{ uri: image }}
            style={{ width: 100, height: 100, marginTop: 10 }}
          />
        )}
      </View>

      <View style={styles.view}>
        <Button
          disabled={(!image && !text) || (!image && text) || (image && !text)}
          title="create"
          onPress={createPost}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#1877F2",
    paddingStart: 10,
  },
  view: {
    margin: 10,
  },
  button: {
    marginTop: 10,
    alignItems: "center",
  },
  container: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
  },
  // switch:{
  //   justifyContent:'center',
  //   flexDirection:'row',
  //   alignItems:'center'
  // }
});
