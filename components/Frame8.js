import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
export default function Frame8() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{ width: 140, height: 140 }}
          source={require("../assets/eyeball-3097971.png")}
        ></Image>
      </View>

      <View style={styles.content}>
        <View style={styles.wrapperInput}>
          <SimpleLineIcons
            style={{ paddingVertical: 5 }}
            name="user"
            size={24}
            color="blue"
          />
          <TextInput
            style={styles.inputPlaceholder}
            placeholder="Please input user name"
          ></TextInput>
        </View>
        <View style={styles.wrapperInput}>
          <Feather
            style={{ paddingVertical: 5 }}
            name="lock"
            size={24}
            color="blue"
          />
          <TextInput
            style={styles.inputPlaceholder}
            placeholder="Please input password"
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.textLogin}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.wrapperActive}>
          <Text style={styles.text}>Register</Text>
          <Text style={styles.text}>Forgot Password</Text>
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: "space-around" }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          <View style={styles.line} />
          <Text style={styles.text}>Other Login Methods</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.wrapperLoginMethods}>
          <View
            style={[
              { backgroundColor: "rgba(58, 180, 255, 1)" },
              styles.methods,
            ]}
          >
            <FontAwesome5 name="user-plus" size={24} color="white" />
          </View>
          <View
            style={[
              { backgroundColor: "rgba(244, 170, 71, 1)" },
              styles.methods,
            ]}
          >
            <Fontisto name="wifi" size={24} color="white" />
          </View>
          <View
            style={[
              { backgroundColor: "rgba(58, 87, 156, 1)" },
              styles.methods,
            ]}
          >
            <FontAwesome5 name="facebook-f" size={24} color="white" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    paddingTop: 10,
    alignItems: "center",
  },
  content: {
    flex: 2,
    marginHorizontal: 20,
  },
  wrapperInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    justifyItems: "flex-start",
    borderBottomWidth: 1,
    marginVertical: 15,
    borderBottomColor: "rgba(196, 196, 196, 1)",
  },
  inputPlaceholder: {
    color: "rgba(196, 196, 196, 1)",
    width: "90%",
    fontSize: 18,
  },
  buttonLogin: {
    borderRadius: 10,
    backgroundColor: "rgba(56, 111, 252, 1)",
    height: 48,
    justifyContent: "center",
  },
  textLogin: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
  },
  wrapperActive: {
    flexDirection: "row",
    marginVertical: 8,
    justifyContent: "space-between",
  },
  line: {
    flex: 1,
    height: 1, // Adjust the line height as needed
    backgroundColor: "black", // Adjust the line color as needed
  },
  text: {
    paddingHorizontal: 16, // Adjust the spacing between text and lines as needed
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  wrapperLoginMethods: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  methods: {
    width: 74,
    height: 74,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
