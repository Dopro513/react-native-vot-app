"use strict";

import React, { Component } from "react";

import { StyleSheet, View, Text } from "react-native";
import { Constants } from "expo";
import RightButton from "../RightButton";
import Campaign from "../Campaign";
import { withNavigation } from "@expo/ex-navigation";

@withNavigation
class MyCandidate extends Component {
  static route = {
    navigationBar: {
      title: "Outvote",
      renderRight: (route, props) => <RightButton />
    }
  };

  constructor(props) {
    super(props);

    this.state = {};

    this.onGoToCampaign = this.onGoToCampaign.bind(this);
  }

  onGoToCampaign() {
    this.props.navigator.push("candidateCampaign");
  }

  render() {
    return (
      <View style={styles.container}>
        <Campaign
          title={"Candidate Name"}
          divide
          buttonTitle="Go to Campaign"
          onPress={this.onGoToCampaign}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  row: {},
  headLabel: {
    fontSize: 16,
    fontWeight: "600"
  }
});

export default MyCandidate;
