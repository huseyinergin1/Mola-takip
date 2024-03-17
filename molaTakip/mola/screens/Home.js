import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import PersonelP from "./PersonelP";
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { DrawerContentScrollView } from "@react-navigation/drawer";

import User from "../assets/huseyin.png";
import Hakkimizda from "./Hakkimizda";
import gMola from "./Gmola";
import Logout from "./Logout";
import Timer from "./Timer";
import Login from "./Login";

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Personeller</Text>
      <PersonelP />
    </View>
  );
}

// Drawer içeriği için özel bileşen
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContainer}>
        <View style={styles.drawerProfileContainer}>
          <Image source={User} style={styles.drawerProfileImage} />
          <Text style={styles.drawerProfileText}>Hüseyin Ergin</Text>
          <Text style={styles.drawerProfileText2}>Admin</Text>
        </View>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}
const Drawer = createDrawerNavigator();

export default function Home() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: styles.header,
        headerTintColor: "white",
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeScreen"
        options={{
          drawerLabel: ({ focused }) => (
            <Text
              style={[
                styles.drawerItemLabel,
                { color: focused ? "#5c0501" : "#000" },
              ]}
            >
              Anasayfa
            </Text>
          ),
          title: "Anasayfa",
          drawerIcon: () => (
            <SimpleLineIcons name="home" size={25} color="#5c0501" />
          ),
        }}
        component={HomeScreen}
      />

      <Drawer.Screen
        name="Timer"
        options={{
          drawerLabel: ({ focused }) => (
            <Text
              style={[
                styles.drawerItemLabel,
                { color: focused ? "#5c0501" : "#000" },
              ]}
            >
              Mola
            </Text>
          ),
          title: "Mola",
          drawerIcon: () => (
            <MaterialIcons name="timer" size={25} color="#5c0501" />
          ),
        }}
        component={Timer}
      />

      <Drawer.Screen
        name="Geçmiş Molalarım"
        options={{
          drawerLabel: ({ focused }) => (
            <Text
              style={[
                styles.drawerItemLabel,
                { color: focused ? "#5c0501" : "#000" },
              ]}
            >
              Geçmiş Molalarım
            </Text>
          ),
          title: "Geçmiş Molalarım",
          drawerIcon: () => (
            <MaterialIcons
              name="dashboard-customize"
              size={25}
              color="#5c0501"
            />
          ),
        }}
        component={gMola}
      />

      <Drawer.Screen
        name="Hakkımızda"
        options={{
          drawerLabel: ({ focused }) => (
            <Text
              style={[
                styles.drawerItemLabel,
                { color: focused ? "#5c0501" : "#000" },
              ]}
            >
              Hakkımızda
            </Text>
          ),
          title: "Hakkımızda",
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="message-alert-outline"
              size={25}
              color="#5c0501"
            />
          ),
        }}
        component={Hakkimizda}
      />
      <Drawer.Screen
        name="Çıkış Yap"
        options={{
          drawerLabel: ({ focused }) => (
            <Text
              style={[
                styles.drawerItemLabel,
                { color: focused ? "#5c0501" : "#000" },
              ]}
            >
              Çıkış Yap
            </Text>
          ),
          title: "Çıkış Yap",
          drawerIcon: () => (
            <SimpleLineIcons name="logout" size={25} color="#5c0501" />
          ),
        }}
        component={Login}
      />
    </Drawer.Navigator>
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
  drawerContainer: {
    flex: 1,
  },
  drawerProfileContainer: {
    alignItems: "center",
    padding: 20,
    height: 200,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#f4f4f4",
    borderBottomWidth: 1,
  },
  drawerProfileImage: {
    height: 130,
    width: 130,
    borderRadius: 65,
  },
  drawerProfileText: {
    fontSize: 22,
    marginVertical: 6,
    fontWeight: "bold",
    color: "#5c0501",
    textTransform: "uppercase",
  },
  drawerProfileText2: {
    fontSize: 15,
    color: "#5c0501",
    textTransform: "capitalize",
  },
  drawerItemLabel: {
    fontSize: 17,
  },
  header: {
    backgroundColor: "#5c0501",
  },
});
