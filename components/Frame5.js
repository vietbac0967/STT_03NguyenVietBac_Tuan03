import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
export default function Frame5() {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 25, fontWeight: 700, textAlign: "center" }}>
          LOGIN
        </Text>
      </View>
      <View style={{ marginTop: 70 }}>
        <TextInput placeholder="Email" style={styles.button}></TextInput>
        <TextInput placeholder="Password" style={styles.button}></TextInput>
      </View>
      <TouchableOpacity
        style={{
          marginTop: 30,
          backgroundColor: "rgba(229, 57, 53, 1)",
          width: 330,
          height: 54,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontWeight: 700, fontSize: 25, color: "white" }}>
          LOGIN
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 14,
          fontFamily: "Roboto",
          fontWeight: 400,
          marginTop: 20,
        }}
      >
        When you agree to terms and conditions
      </Text>
      <Text
        style={{
          color: "rgba(93, 37, 250, 1)",
          fontSize: 14,
          fontWeight: 400,
          marginTop: 20,
        }}
      >
        For got your password?
      </Text>
      <Text style={{ fontSize: 14, fontWeight: 400, marginTop: 20 }}>
        Or login with
      </Text>
      <View style={styles.login}>
        <View
          style={{
            backgroundColor: "rgba(37, 71, 155, 1)",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../assets/icons8-facebook-48.png")}
          ></Image>
        </View>

        <View
          style={{
            backgroundColor: "#1593C5",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../assets/icons8-zalo-48.png")}
          ></Image>
        </View>

        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../assets/icons8-google-48.png")}
          ></Image>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(49, 170, 82, 0.19)", // Set a transparent background
    alignItems: "center",
    fontFamily: "Red Hat Display', sans-serif",
  },
  button: {
    width: 330,
    height: 54,
    backgroundColor: "rgba(196, 196, 196, 0.3)",
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: "rgba(242, 242, 242, 1)",
    marginBottom: 40,
  },
  login: {
    flexDirection: "row",
    width: 330,
    height: 54,
    marginTop: 20,
    borderWidth: 1,
    justifyContent: "space-between",
    alignItems: "stretch",
  },
});
