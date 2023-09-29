import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function Frame4() {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 70 }}>
        <Text style={{ fontSize: 60, fontWeight: 700 }}>CODE</Text>
      </View>

      <View style={{ marginTop: 60 }}>
        <Text style={{ fontSize: 20, fontWeight: 700 }}>VERIFICATION</Text>
      </View>

      <View
        style={{ marginTop: 60, alignItems: "center", marginHorizontal: 60 }}
      >
        <Text style={{ textAlign: "center", fontSize: 15, fontWeight: 700 }}>
          Enter ontime password sent on ++849092605798
        </Text>
      </View>
      
      <View style={{ flexDirection: "row", marginTop: 60 }}>
        <View style={{ borderWidth: 1, width: 50, height: 50 }}></View>
        <View style={{ borderWidth: 1, width: 50, height: 50 }}></View>
        <View style={{ borderWidth: 1, width: 50, height: 50 }}></View>
        <View style={{ borderWidth: 1, width: 50, height: 50 }}></View>
        <View style={{ borderWidth: 1, width: 50, height: 50 }}></View>
        <View style={{ borderWidth: 1, width: 50, height: 50 }}></View>
      </View>
      {/* <View style={{ flex: 1 }}> */}
      <TouchableOpacity
        style={{
          marginTop: 60,
          backgroundColor: "rgba(227, 192, 0, 1)",
          width: "80%",
          padding: 20,
          alignItems: "center",
          marginVertical: 60,
        }}
      >
        <Text style={{ fontWeight: 700, fontSize: 18 }}>VERIFY CODE</Text>
      </TouchableOpacity>
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent", // Set a transparent background
    backgroundImage:
      "linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)",
    alignItems: "center",
  },
});
