import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableHighlight
} from "react-native";
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem
} from "@expo/ex-navigation";
import Router from "../Router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

// Treat the TabScreen route like any other route -- you may want to set
// it as the initial route for a top-level StackNavigation
export default class TabScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false
    }
  };

  _renderIcon(defaultIcon, selectedIcon, isSelected) {
    return (
      <View style={styles.tabItemContainer}>
        <Ionicons
          name={isSelected ? selectedIcon : defaultIcon}
          size={32}
          color={"#000"}
        />
      </View>
    );
  }

  render() {
    return (
      <TabNavigation id="main" navigatorUID="main" initialTab="home">
        <TabItem
          id="home"
          selectedStyle={styles.selectedTab}
          renderIcon={isSelected =>
            this._renderIcon("ios-people-outline", "ios-people", true)}
        >

          <StackNavigation
            id="home"
            navigatorUID="home"
            initialRoute={Router.getRoute("home")}
          />
        </TabItem>

        <TabItem
          id="megaphone"
          selectedStyle={styles.selectedTab}
          renderIcon={isSelected =>
            this._renderIcon("ios-megaphone-outline", "ios-megaphone", false)}
        >
          <View
            style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
          >
            <Text>megaphone</Text>
          </View>
        </TabItem>
        <TabItem
          id="dashboard"
          selectedStyle={styles.selectedTab}
          renderIcon={isSelected =>
            this._renderIcon("ios-aperture-outline", "ios-aperture", false)}
        >
          <View
            style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
          >
            <Text>Dashboard</Text>
          </View>
        </TabItem>
        <TabItem
          id="cash"
          selectedStyle={styles.selectedTab}
          renderIcon={isSelected =>
            this._renderIcon("ios-cash-outline", "ios-cash", false)}
        >
          <View
            style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
          >
            <Text>Cash</Text>
          </View>
        </TabItem>

        <TabItem
          id="setting"
          selectedStyle={styles.selectedTab}
          renderIcon={isSelected =>
            this._renderIcon("ios-cog-outline", "ios-cog", false)}
        >
          <View
            style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
          >
            <Text>Setting</Text>
          </View>
        </TabItem>
      </TabNavigation>
    );
  }
}

const styles = StyleSheet.create({
  tabItemContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  tabTitleText: {
    fontSize: 11,
    color: "#fff"
  }
});
