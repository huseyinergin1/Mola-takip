import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  Dimensions,
  StatusBar,
} from "react-native"; // StatusBar import edildi
import { personeller } from "./personel";
import { FlatList } from "react-native";

const windowHeight = Dimensions.get("window").height;
const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;
const navigationBarHeight = windowHeight - statusBarHeight - 600;

const personelP = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={personeller}
        renderItem={({ item }) => (
          <View
            style={{
              ...styles.personelContainer,
            }}
          >
            <Image source={item.Image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.alanContainer}>
              <Text style={styles.alan}>{item.alan}</Text>
            </View>
          </View>
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-around",
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  personelContainer: {
    backgroundColor: "#f2f2f2",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    borderRadius: 16,
    alignItems: "center",
    elevation: 10,
    paddingHorizontal: 8,
    paddingVertical: 26,
    marginBottom: 50,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "center",
    borderRadius: 100,
  },
  name: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  alanContainer: {
    flexDirection: "row",
  },
  alan: {
    // alan stilleri
  },
});

export default personelP;
