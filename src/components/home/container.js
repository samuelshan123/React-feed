import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import CardComponent from "../news-content/card";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "../bottom-navigation/BottomTabNavigator";

export default function Container() {
  return (
    <>
      <View style={styles.footer}>
        <NavigationContainer style={styles.footer}>
          <BottomTabNavigator />
        </NavigationContainer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
  },
});
