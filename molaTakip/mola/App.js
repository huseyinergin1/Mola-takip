import "react-native-gesture-handler";
import { View, Text, Image, StyleSheet } from "react-native";

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

import User from "./assets/user.png";
import Iletisim from "./screens/Iletisim";
import gMola from "./screens/Gmola";
import Home from "./screens/Home";
import Logout from "./screens/Logout";
import Timer from "./screens/Timer";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => {
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
        }}
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#5c0501",
            width: 250,
          },
          headerStyle: {
            backgroundColor: "#5c0501",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          drawerLabelStyle: {
            color: "white",
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Anasayfa",
            title: "Anasayfa",
            drawerIcon: () => (
              <SimpleLineIcons name="home" size={20} color="white" />
            ),
          }}
          component={Home}
        />
        <Drawer.Screen
          name="Timer"
          options={{
            drawerLabel: "Mola",
            title: "Mola",
            drawerIcon: () => (
              <MaterialIcons name="timer" size={20} color="white" />
            ),
          }}
          component={Timer}
        />

        <Drawer.Screen
          name="Geçmiş Molalarım"
          options={{
            drawerLabel: "Geçmiş Molalarım",
            title: "Geçmiş Molalarım",
            drawerIcon: () => (
              <MaterialIcons
                name="dashboard-customize"
                size={20}
                color="white"
              />
            ),
          }}
          component={gMola}
        />

        <Drawer.Screen
          name="İletişim"
          options={{
            drawerLabel: "İletişim",
            title: "İletişim",
            drawerIcon: () => (
              <MaterialCommunityIcons
                name="message-alert-outline"
                size={20}
                color="white"
              />
            ),
          }}
          component={Iletisim}
        />
        <Drawer.Screen
          name="Çıkış Yap"
          options={{
            drawerLabel: "Çıkış Yap",
            title: "Çıkış Yap",
            drawerIcon: () => (
              <SimpleLineIcons name="logout" size={20} color="white" />
            ),
          }}
          component={Logout}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
