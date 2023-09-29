import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function Frame2() {
  return (
    <View style={styles.containers}>
      <View style={styles.top}>
        <View style={styles.eclipse}></View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>GROW</Text>
        <Text style={styles.title}>YOUR BUSINESS</Text>
        <Text style={styles.text}>
          We will help you to grow your business using online server
        </Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.groupButton}>
          <TouchableOpacity style={styles.button}>
            <Text style={{ fontSize: 18, fontWeight: 700 }}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{ fontSize: 18, fontWeight: 700 }}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>HOW WE WORK?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: 'transparent', // Set a transparent background
    backgroundImage: 'linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)'
  },
  top: {
    flex: 1,
    marginTop: 60,
    alignItems: "center",
  },
  bottom: {
    flex: 2,
  },
  groupButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  eclipse: {
    borderRadius: 100,
    borderWidth: 15,
    width: 140,
    height: 140,
  },
  title: {
    fontSize: 25,
    fontWeight: 700,
  },
  content: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  textContent: {
    alignItems: "center",
    justifyContent: "center",
    // marginHorizontal: 20,
  },
  text: {
    fontSize: 15,
    textAlign: "center",
    lineHeight: 17.58,
    fontWeight: 700,
    marginHorizontal: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: "rgba(227, 192, 0, 1)",
    width: 140,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
