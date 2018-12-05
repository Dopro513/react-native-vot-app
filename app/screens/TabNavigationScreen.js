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
          <StackNavigation
            id="myCandidate"
            navigatorUID="myCandidate"
            initialRoute={Router.getRoute("myCandidate")}
          />
        </TabItem>
        <TabItem
          id="dashboard"
          selectedStyle={styles.selectedTab}
          renderIcon={isSelected =>
            this._renderIcon("ios-aperture-outline", "ios-aperture", false)}
        >
          <StackNavigation
            id="introduction"
            navigatorUID="introduction"
            initialRoute={Router.getRoute("introduction")}
          />
        </TabItem>
        <TabItem
          id="cash"
          selectedStyle={styles.selectedTab}
          renderIcon={isSelected =>
            this._renderIcon("ios-cash-outline", "ios-cash", false)}
        >
          <StackNavigation
            id="campaign"
            navigatorUID="campaign"
            initialRoute={Router.getRoute("campaign")}
          />
        </TabItem>

        <TabItem
          id="setting"
          selectedStyle={styles.selectedTab}
          renderIcon={isSelected =>
            this._renderIcon("ios-cog-outline", "ios-cog", false)}
        >
          <StackNavigation
            id="setting"
            navigatorUID="setting"
            initialRoute={Router.getRoute("setting")}
          />
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
