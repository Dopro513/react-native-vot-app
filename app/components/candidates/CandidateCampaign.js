"use strict";

import React, { Component } from "react";

import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Constants } from "expo";
import RightButton from "../RightButton";
import Campaign from "../Campaign";
import { Ionicons } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");

class CandidateCampaign extends Component {
  static route = {
    navigationBar: {
      title: "Outvote",
      renderRight: (route, props) => <RightButton />
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Campaign
            title={"Candidate Name"}
            divide
            buttonTitle="Go to Campaign"
            button={false}
          />
          <View style={styles.row}>
            <Text style={styles.headLabel}>Introductions</Text>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.col}>
                <View style={styles.numberGroup}>
                  <Text style={{ fontSize: 34, fontWeight: "600" }}>55</Text>
                  <Ionicons
                    name="ios-information-circle"
                    size={22}
                    style={{ position: "absolute", right: 20 }}
                  />
                </View>
                <Text>Introductions made</Text>
              </View>

              <View style={styles.col}>
                <View style={styles.numberGroup}>
                  <Text style={{ fontSize: 34, fontWeight: "600" }}>1020</Text>
                  <Ionicons
                    name="ios-information-circle"
                    size={22}
                    style={{ position: "absolute", right: 20 }}
                  />
                </View>
                <Text>Introductions inspired</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={this.props.onPress}
              style={{
                borderColor: "#ccc",
                borderWidth: 1,
                padding: 16,
                shadowColor: "#000000",
                shadowOffset: {
                  width: 0,
                  height: 1
                },
                shadowRadius: 1,
                shadowOpacity: 0.4,
                marginTop: 20
              }}
            >
              <Text style={{ textAlign: "center" }}>
                Make an Introduction
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <Text style={styles.headLabel}>Introductions</Text>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.col}>
                <View style={styles.numberGroup}>
                  <Text style={{ fontSize: 34, fontWeight: "600" }}>55</Text>
                  <Ionicons
                    name="ios-information-circle"
                    size={22}
                    style={{ position: "absolute", right: 20 }}
                  />
                </View>
                <Text>Introductions made</Text>
              </View>

              <View style={styles.col}>
                <View style={styles.numberGroup}>
                  <Text style={{ fontSize: 34, fontWeight: "600" }}>1020</Text>
                  <Ionicons
                    name="ios-information-circle"
                    size={22}
                    style={{ position: "absolute", right: 20 }}
                  />
                </View>
                <Text>Introductions inspired</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={this.props.onPress}
              style={{
                borderColor: "#ccc",
                borderWidth: 1,
                padding: 16,
                shadowColor: "#000000",
                shadowOffset: {
                  width: 0,
                  height: 1
                },
                shadowRadius: 1,
                shadowOpacity: 0.4,
                marginTop: 20
              }}
            >
              <Text style={{ textAlign: "center" }}>
                Make a Pledge
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  row: {
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 25
  },
  headLabel: {
    fontSize: 16,
    fontWeight: "600"
  },
  numberGroup: {
    flexDirection: "row"
  },
  col: {
    width: width / 2 - 20,
    marginTop: 25
  }
});

export default CandidateCampaign;
