import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import HomeScreen from './HomeScreen';
// import SettingsScreen from './SettingsScreen';
import Icon from "react-native-vector-icons/FontAwesome"; // Importing FontAwesome icons
import Settings from "../pages/settings";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Home from "../pages/home";
import CreateNews from "../pages/create-news";
const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Create") {
            iconName = focused ? "pluscircle" : "pluscircleo";
          } else if (route.name === "Settings") {
            iconName = focused ? "setting" : "setting";
          }

          return <Icon name={iconName} size={size} color={color} />;
          // return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#1877F2",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          borderRadius: 10,
          margin: 10,
          paddingBottom: 4,
          paddingTop: 6,
        },
        headerStyle: {
          backgroundColor: "#1877F2",
        },
        headerTintColor: "#fff", // Color for the back button and title
        headerTitleStyle: {
          fontWeight: "bold",
          color: "white",
        },
      })}
    >
      {/* <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Create" component={CreateNews} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
