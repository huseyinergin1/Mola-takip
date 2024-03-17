import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Burada kullanıcı girişi işlemleri yapılabilir, örneğin bir API'ye istek gönderilebilir

    // Örnek bir kullanıcı girişi kontrolü
    if (username === "admin" && password === "123") {
      // Kullanıcı girişi başarılı olduğunda ana ekranı göster
      navigation.navigate("Home");
    } else {
      // Kullanıcı girişi başarısız olduğunda hata mesajı gösterilebilir
      alert("Kullanıcı adı veya şifre hatalı.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Kullanıcı Adı</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Kullanıcı adınızı girin"
      />
      <Text style={styles.label}>Şifre</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder="Şifrenizi girin"
      />
      <Button title="Giriş Yap" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
    width: "100%",
  },
});

export default Login;
