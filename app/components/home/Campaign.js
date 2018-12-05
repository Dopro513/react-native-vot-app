"use strict";

import React, { Component } from "react";

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Constants } from "expo";
import Divider from "../Divider";

class Campaign extends Component {
  render() {
    const { title, buttonTitle, divide } = this.props;
    return (
      <View style={styles.campaignContainer}>
        {title && <Text style={styles.headLabel}>Cadidate Name</Text>}
        <Text style={styles.paragraph}>
          Lorem Ipsum has been the industry's standard dummy text ever.
        </Text>
        <View style={styles.currencyContainer}>
          <View style={[styles.item, { width: 110 }]}>
            <Text
              style={{
                color: "#41A5D8",
                fontSize: 22,
                textDecorationLine: "underline"
              }}
            >
              300K
            </Text>
            <Text>Introductions made</Text>
          </View>

          <View style={{ height: 50, width: 2, backgroundColor: "#000" }} />

          <View style={[styles.item, { width: 80 }]}>
            <Text
              style={{
                color: "#41A5D8",
                fontSize: 22,
                textDecorationLine: "underline"
              }}
            >
              30K
            </Text>
            <Text>Votes pledged</Text>
          </View>

          <View style={{ height: 50, width: 2, backgroundColor: "#000" }} />

          <View style={[styles.item, { width: 70 }]}>
            <Text
              style={{
                color: "#41A5D8",
                fontSize: 22,
                textDecorationLine: "underline"
              }}
            >
              $20K
            </Text>
            <Text>$ raised</Text>
          </View>
          <View style={{ height: 50, width: 2, backgroundColor: "#000" }} />

          <View style={[styles.item, { width: 40 }]}>
            <Text
              style={{
                color: "#41A5D8",
                fontSize: 22,
                textDecorationLine: "underline"
              }}
            >
              3
            </Text>
            <Text>Days left</Text>
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
            shadowOpacity: 0.4
          }}
        >
          <Text style={{ textAlign: "center" }}>
            {buttonTitle || "View Campaign"}
          </Text>
        </TouchableOpacity>
        {divide && <Divider />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  currencyContainer: {
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 15
  },
  item: {
    alignItems: "flex-start",
    marginLeft: 5
  },
  campaignContainer: {
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16
  },
  headLabel: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
    marginTop: 5
  },
  paragraph: {
    fontSize: 16
  }
});

export default Campaign;
