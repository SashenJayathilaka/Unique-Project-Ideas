import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const CartScreen = () => {
  return (
    <View>
      <Text>Cart</Text>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
