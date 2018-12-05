"use strict";

import React, { Component } from "react";

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";
import { Constants, Video } from "expo";
import { Ionicons } from "@expo/vector-icons";
import Accordion from "react-native-collapsible/Accordion";
import Campaign from "../Campaign";

const { width } = Dimensions.get("window");

const SECTIONS = [
  {
    title: "Campaign",
    content: "Lorem ipsum..."
  },
  {
    title: "Updates",
    content: "Lorem ipsum..."
  },

  {
    title: "FAQ",
    content: "Lorem ipsum..."
  },
  {
    title: "Comments",
    content: "Lorem ipsum..."
  }
];

class Detail extends Component {
  static state = {
    index: 0
  };
  static route = {
    navigationBar: {
      title: "Outvote",
      renderRight: (route, props) =>
        <TouchableOpacity
          style={{
            width: 50,
            alignItems: "center",
            marginTop: 5
          }}
        >
          <Ionicons name="ios-notifications-outline" size={32} />
        </TouchableOpacity>
    }
  };

  _renderHeader(section, index, isActive) {
    return (
      <View
        style={[
          styles.collapseHeader,
          isActive ? { backgroundColor: "#ccc" } : {}
        ]}
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  }

  _renderContent(section) {
    return (
      <View
        style={{
          height: 150,
          justifyContent: "center",
          padding: 16,
          alignItems: "center"
        }}
      >
        <Text>section</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.videoContainer}><Text>Viedo Block</Text></View>
          <View style={{ marginTop: 15 }}>
            <Campaign
              title="Some title here"
              buttonTitle="Join the Campaign"
              onPress={() => alert("press me")}
            />
          </View>

          <View style={{ marginTop: 15 }}>
            <Accordion
              onChange={index => this.setState({ index: index })}
              underlayColor={"transparent"}
              initiallyActiveSection={0}
              sections={SECTIONS}
              renderHeader={this._renderHeader}
              renderContent={this._renderContent}
            />
          </View>
          <View style={{ height: 50 }} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight - 20,
    paddingBottom: 15
  },
  videoContainer: {
    width: width,
    height: 200,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center"
  },
  collapseHeader: {
    height: 40,
    alignItems: "flex-start",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 16
  },
  headerText: {
    fontSize: 16
  }
});

export default Detail;
