import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerItemList } from "@react-navigation/drawer";
import User from "./assets/huseyin.png"; // Kullanıcı resminin yolunu belirtin

export default function solmenu(props) {
  return (
    <SafeAreaView>
      <View
        style={{
          height: 200,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          borderBottomColor: "#f4f4f4",
          borderBottomWidth: 1,
        }}
      >
        <Image
          source={User}
          style={{
            height: 130,
            width: 130,
            borderRadius: 65,
          }}
        />
        <Text
          style={{
            fontSize: 22,
            marginVertical: 6,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Hüseyin Ergin
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "white",
          }}
        >
          Admin
        </Text>
      </View>
      <DrawerItemList {...props} />
    </SafeAreaView>
  );
}
