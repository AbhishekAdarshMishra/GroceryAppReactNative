import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import CategoriesCard from "../shared/CategoriesCard";
import PopularCard from "../shared/PopularCard";
import CarouselCard from "../shared/CarouselCard";

export default function Home({ navigation }) {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={styles.hamburgerView}>
            <Image
              style={styles.hamburger}
              source={require("../assets/hamburger.png")}
            ></Image>
          </View>
        </TouchableOpacity>
        <Text style={styles.logo}>Growcerry</Text>
        <View style={styles.notificationView}>
          <Image
            style={styles.notification}
            source={require("../assets/cart.png")}
          ></Image>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.searchBox}>
            <View style={styles.inputView}>
              <TextInput style={styles.input} placeholder="Search"></TextInput>
            </View>
            <View style={styles.searchView}>
              <Image
                style={styles.searchImg}
                source={require("../assets/magnifier.png")}
              ></Image>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.categoriesView}>
              <CarouselCard />
              <CarouselCard />
              <CarouselCard />
              <CarouselCard />
              <CarouselCard />
              <CarouselCard />
            </View>
          </ScrollView>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Categories</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.categoriesView}>
              <CategoriesCard />
              <CategoriesCard />
              <CategoriesCard />
              <CategoriesCard />
              <CategoriesCard />
              <CategoriesCard />
              <CategoriesCard />
              <CategoriesCard />
            </View>
          </ScrollView>
        </View>
        <View style={styles.popular}>
          <Text style={[styles.title, { marginLeft: "0%" }]}>Popular</Text>
          <View style={styles.popularView}>
            <PopularCard />
            <PopularCard />
            <PopularCard />
            <PopularCard />
            <PopularCard />
            <PopularCard />
            <PopularCard />
            <PopularCard />
            <PopularCard />
            <PopularCard />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: "8%",
    paddingTop: "2%",
    paddingHorizontal: "2%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hamburgerView: {
    padding: "2%",
  },
  hamburger: {
    height: 26,
    width: 26,
  },
  notification: {
    height: 28,
    width: 28,
  },
  searchImg: {
    height: 24,
    width: 24,
    alignSelf: "center",
  },
  inputView: {
    width: "85%",
    marginRight: "5%",
  },
  searchView: {
    width: "10%",
  },
  searchBox: {
    margin: "4%",
    height: 50,
    justifyContent: "center",
    paddingHorizontal: "3%",
    backgroundColor: "#fff",
    borderRadius: 15,
    borderColor: "#444",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  notificationView: {
    padding: "2%",
  },
  logo: {
    color: "#444",
    fontSize: 26,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  categoriesView: {
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
    color: "#696b67",
    fontWeight: "bold",
    marginLeft: "4%",
  },
  section: {
    marginLeft: "4%",
  },
  popular: {
    marginHorizontal: "8%",
  },
  popularView: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
