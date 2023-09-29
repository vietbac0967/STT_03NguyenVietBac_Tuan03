import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function Frame6() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>REGISTER</Text>
      <TextInput style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Phone" />
      <TextInput style={styles.input} placeholder="Email" />
      <View style={styles.password}>
        <TextInput style={styles.inputPassword} placeholder="Password" />
        <AntDesign name="eye" size={24} color="black" style={{paddingRight:20}}/>
      </View>
      <TextInput style={styles.input} placeholder="Birthday" />
      {/* Checkbox */}
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "flex-start",
          marginLeft: 20,
        }}
      >
        <TouchableOpacity style={{ alignContent: "flex-start" }}>
          <View style={styles.radioWrapper}>
            <View style={styles.radio}></View>
            <Text style={styles.radioText}>Male</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.radioWrapper}>
            <View style={styles.radio}></View>
            <Text style={styles.radioText}>Female</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: "center", flex: 1 }}>
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.textSubmit}>REGISTER</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 14, marginTop: 15, fontWeight: 400 }}>
          When you agree to terms and conditions
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(49, 170, 82, 0.19)",
    fontFamily: "Roboto",
    borderWidth: 2,
    borderColor: "black",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  radioText: {
    fontSize: 18,
    fontWeight: 400,
    marginLeft: 10,
  },
  radio: {
    height: 20,
    width: 20,
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 20,
    marginLeft: 10,
  },
  radioWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputText: {
    width: 330,
    height: 60,
    borderWidth: 1,
    paddingLeft: 20,
    marginBottom: 15,
    fontSize: 18,
    fontWeight: 400,
  },
  btnSubmit: {
    width: 330,
    height: 54,
    backgroundColor: "rgba(229, 57, 53, 1)",
    alignItems: "center",
    justifyContent: "center",
  },
  textSubmit: {
    fontSize: 20,
    fontWeight: 700,
    color: "white",
  },
  inputPassword: {
    border: "none",
    padding: 10,
    width: "75%",
  },
  password:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    margin: 10,
  }
});
