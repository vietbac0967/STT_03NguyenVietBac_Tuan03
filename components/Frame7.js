import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
export default function Frame7() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>LOGIN</Text>
      <View style={styles.main}>
        <View style={styles.forInput}>
          <FontAwesome5
            style={styles.icon}
            name="user-alt"
            size={24}
            color="black"
          />
          <TextInput style={{ width: "75%" }} placeholder="Name" />
        </View>

        <View style={styles.forInput}>
          <FontAwesome5
            style={styles.icon}
            name="lock"
            size={24}
            color="black"
          />
          <TextInput placeholder="Password"></TextInput>
          <AntDesign name="eye" size={24} color="black" />
        </View>
        <TouchableOpacity style={styles.login}>
          <Text style={styles.textLogin}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={styles.textBottom}>CREATE ACCOUNT</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    backgroundImage: "linear-gradient(180deg, #FBCB00 0%, #BF9A00 100%)",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 40,
    paddingLeft: 20,
  },
  main: {
    flex: 1,
    paddingTop: 40,
    width: "100%",
    height: 50,
  },
  forInput: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "rgba(196, 196, 196, 0.3)",
    marginHorizontal: 20,
    marginVertical: 15,
  },
  icon: {
    width: 32,
    height: 32,
    justifyContent: "center",
    paddingTop: 2,
  },
  login: {
    backgroundColor: "black",
    marginHorizontal: 20,
    height: 45,
    justifyContent: "center",
    borderRadius: 2,
  },
  textLogin: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  textBottom:{
    paddingTop: 35,
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
  }
});
