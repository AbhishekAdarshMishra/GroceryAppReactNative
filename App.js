import { StyleSheet, Text, View } from "react-native";
import MyDrawer from "./routes/MyDrawer";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <View style={styles.app}>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f7f7f7",
  },
  background: {
    width: "100%",
    height: "100%",
    padding: "2.5%",
  },
});
