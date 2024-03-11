import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import PersonelP from "./PersonelP";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Personeller</Text>
      <PersonelP />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#5c0501",
    textTransform: "uppercase",
    textAlign: "center",
  },
});
