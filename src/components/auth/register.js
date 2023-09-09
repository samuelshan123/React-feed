import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import showToast from "../utilities/Toast";

export default function Register() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onRegister = () => {
    showToast("success", "Hello", "This is a dynamic toast message! 👋");
    navigation.navigate("Dashboard");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <Toast ref={(ref) => Toast.setRef(ref)} />
        <View style={styles.container}>
          <Text style={styles.title}>Register</Text>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            style={styles.input}
          />
          <TouchableOpacity style={styles.button} onPress={onRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

          <Text style={styles.sub}>
            Already an user?{" "}
            <Text
              style={styles.sub_reg}
              onPress={() => navigation.navigate("Login")}
            >
              Login
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  sub: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  sub_reg: {
    color: "#1877F2",
  },
  input: {
    width: 250,
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 8,
  },
  button: {
    width: 250,
    height: 40,
    backgroundColor: "#1877F2",
    color: "#fff",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
