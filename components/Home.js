import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import CategoriesCard from "../shared/CategoriesCard";
import PopularCard from "../shared/PopularCard";
import CarouselCard from "../shared/CarouselCard";
import { data } from "../data/growcerryData";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.",
]);
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
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
        <TouchableOpacity
          style={styles.notificationView}
          onPress={() => navigation.navigate("cartScreen")}
        >
          <Image
            style={styles.notification}
            source={require("../assets/cart.png")}
          ></Image>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
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
          <ScrollView
            style={styles.sectionScroll}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
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
          <ScrollView
            style={styles.sectionScroll}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
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
            <FlatList
              keyExtractor={(item) => item.id}
              data={data}
              renderItem={({ item }) => (
                <PopularCard data={item} navigation={navigation} />
              )}
              scrollEnabled={false}
              numColumns={2}
            />
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
    flex: 1,
    marginRight: 50,
  },
  sectionScroll: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: "#696b67",
    fontWeight: "bold",
    marginLeft: "4%",
  },
  section: {
    marginLeft: "4%",
    flex: 1,
  },
  popular: {
    flex: 1,
    marginHorizontal: "8%",
  },
  popularView: {
    flex: 1,
    marginBottom: 10,
  },
  container: {
    flex: 1,
  },
});
