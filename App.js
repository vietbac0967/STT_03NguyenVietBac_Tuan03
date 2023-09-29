import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-web";
import Frame2 from "./components/Frame2";
import Frame3 from "./components/Frame3";
import Frame4 from "./components/Frame4";
import Frame5 from "./components/Frame5";
import Frame6 from "./components/Frame6";
import Frame7 from "./components/Frame7";
import Frame8 from "./components/Frame8";
export default function App() {
  return (
    // <Frame2/>
    // <Frame3/>
    // <Frame4/>
    // <Frame5 />
    //  <Frame6/>
    // <Frame7/>
    <Frame8/>
    // <RegistrationForm/>
    // <View style={styles.container}>
    //   <View style={styles.content}>
    //     <View style={styles.eclipse}></View>
    //     <Text style={styles.title}>GROW YOUR BUSINESS</Text>
    //   </View>
    //   <View style={styles.contentCenter}>
    //     <Text style={styles.textContent}>
    //       We will help you to grow your business using online server
    //     </Text>
    //   </View>
    //   <View style={styles.bottom}>
    //     <TouchableOpacity style={styles.button}>
    //       <Text style={styles.textButton}>LOGIN</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={styles.button}>
    //       <Text style={styles.textButton}>SIGN UP</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(95,223,251)",
    fontFamily: "Roboto",
  },
  content: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    flex: 2,
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
    marginTop: 40,
    fontSize: 25,
    fontWeight: 700,
    textAlign: "center",
  },
  contentCenter: {
    flex: 1,
    justifyContent: "center",
  },
  textContent: {
    fontSize: 15,
    textAlign: "center",
    lineHeight: 17.58,
    fontWeight: 700,
    marginHorizontal: 20,
  },
  button: {
    borderRadius: 10,
    backgroundColor: "rgba(227, 192, 0, 1)",
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 40,
  },
  textButton: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
