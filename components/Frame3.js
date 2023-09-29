import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
export default function Frame3() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={require("../assets/lock.png")} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.textTitle}>FORGET</Text>
        <Text style={styles.textTitle}>PASSWORD</Text>
        <Text style={styles.textContent}>
          Provide your account’s email for which you want to reset your password
        </Text>
      </View>
      <View style={styles.forInput}>
        <Feather
          style={{ justifyContent: "center",alignContent:'center',alignItems:'center',marginTop:3}}
          name="mail"
          size={30}
          color="black"
        />
        <TextInput
          style={{ width: "75%", fontWeight: "400" }}
          placeholder="Email"
        />
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(227, 192, 0, 1)",
            marginTop: 20,
            width: 305,
            height: 45,
            justifyContent: "center",
          }}
        >
          <Text style={{ textAlign: "center", fontWeight: 700, fontSize: 18 }}>
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent", // Set a transparent background
    backgroundImage:
      "linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200, // Adjust the width to your preference
    height: 200, // Adjust the height to your preference
  },
  top: {
    marginTop: 20,
  },
  content: {
    marginTop: 40,
    flex: 3,
    alignItems: "center",
  },
  textTitle: {
    fontSize: 25,
    fontWeight: 700,
    textAlign: "center",
  },
  textContent: {
    marginTop: 20,
    fontSize: 15,
    fontWeight: 700,
    textAlign: "center",
    marginHorizontal: 20,
  },
  bottom: {
    flex: 3,
    marginHorizontal: 10,
  },
  forInput: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 1,
    width: 305,
    height: 45,
    borderColor: "white",
    backgroundColor: "rgba(196, 196, 196, 0.3)",
    marginHorizontal: 20,
    marginVertical: 15,
  },
});
