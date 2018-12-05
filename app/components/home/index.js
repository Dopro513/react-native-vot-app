"use strict";

import React, { Component } from "react";
import Router from "../../Router";
import { Ionicons } from "@expo/vector-icons";
import { Constants } from "expo";

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform
} from "react-native";
import { withNavigation } from "@expo/ex-navigation";
import Campaign from "../Campaign";
import RightButton from "../RightButton";

@withNavigation
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onViewCampaign = this.onViewCampaign.bind(this);
  }
  static route = {
    navigationBar: {
      title: "Outvote",
      renderLeft: (route, props) => <View />,
      renderRight: (route, props) => <RightButton />
    }
  };

  onViewCampaign() {
    this.props.navigator.push("candidateScreen");
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {Array.apply(null, { length: 10 }).map((item, index) =>
            <Campaign
              key={index}
              title="Candidate Name"
              description="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "
              onPress={this.onViewCampaign}
              divide={index < 9}
            />
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  }
});

export default Home;
