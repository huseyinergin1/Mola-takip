import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

export default function () {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [customInterval, setCustomInterval] = useState();

  const startTime = () => {
    setCustomInterval(
      setInterval(() => {
        changeTime();
      }, 1000)
    );
  };

  const stopTimer = () => {
    if (customInterval) {
      clearInterval(customInterval);
    }
  };

  const clear = () => {
    stopTimer();
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  const changeTime = () => {
    setSeconds((prevState) => {
      if (prevState + 1 === 60) {
        setMinutes((prevMinutes) => {
          if (prevMinutes + 1 === 60) {
            setHours((prevHours) => prevHours + 1);
            return 0;
          }
          return prevMinutes + 1;
        });
        return 0;
      }
      return prevState + 1;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>MOLA</Text>
      <Text style={styles.timerText}>
        {hours < 10 ? "0" + hours : hours}:
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={startTime}>
          <Text style={styles.buttonText}>Başlat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={stopTimer}>
          <Text style={styles.buttonText}>Durdur</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={clear}>
          <Text style={styles.buttonText}>Bitir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  timerText: {
    fontSize: 80,
    color: "#5c0501",
  },
  buttonContainer: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  text: {
    fontSize: 30,
    color: "#5c0501",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#5c0501",
  },
  buttonText: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
