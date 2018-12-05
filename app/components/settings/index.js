"use strict";

import React, { Component } from "react";

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Switch,
  ScrollView
} from "react-native";
import { Constants } from "expo";
import styles from "./styles";
import RightButton from "../RightButton";
import { Ionicons } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";

const options = [
  {
    label: "Mentioned your name when reaching out",
    value: "mention",
    isCheck: true
  },
  {
    label: "only reach out to approved connections(standard tier)",
    value: "only_reach_out",
    isCheck: true
  },
  {
    label: "reach out once to any connection without approve(power tier)",
    value: "react_out_any_connection",
    isCheck: true
  },
  {
    label: "send me a reminder prior to election day",
    value: "reminder_prior_election",
    isCheck: true
  },
  {
    label: "contact me on election day",
    value: "contact_on_election",
    isCheck: true
  },
  {
    label: "send my connections one reminder prior to election day",
    value: "connections_reminder_on_election",
    isCheck: true
  }
];
class Setting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: {
        facebook: true,
        twitter: true,
        linkedin: true,
        instagram: true
      },
      checkboxs: options
    };

    this.onToggleChange = this.onToggleChange.bind(this);
    this.onCheckBoxChange = this.onCheckBoxChange.bind(this);
  }
  static route = {
    navigationBar: {
      title: "Outvote",
      renderRight: (route, props) => <RightButton />
    }
  };

  onToggleChange(field, bool) {
    const { toggle } = this.state;
    toggle[field] = bool;
    this.setState({ toggle: toggle });
  }

  onCheckBoxChange(field, bool) {
    const { checkboxs } = this.state;
    const index = checkboxs.findIndex(option => option.value === field);
    if (index > -1) {
      checkboxs[index].isCheck = bool;
      this.setState({ checkboxs: checkboxs });
    }
  }
  render() {
    const { facebook, twitter, linkedin, instagram } = this.state.toggle;
    const { checkboxs } = this.state;
    const checkboxElements = [];
    checkboxs.map((option, index) => {
      checkboxElements.push(
        <CheckBox
          key={option.value}
          title={option.label}
          checked={option.isCheck}
          containerStyle={{
            backgroundColor: "transparent",
            borderWidth: 0,
            marginLeft: -10
          }}
          onPress={() => this.onCheckBoxChange(option.value, !option.isCheck)}
        />
      );
    });
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.items}>
            <Text style={styles.headLabel}>ID Verification</Text>

            <View style={styles.item}>
              <Text style={styles.itemLabel}>Phone</Text>
              <Text
                style={[styles.itemLabel, styles.itemLink, styles.itemValue]}
              >
                Send a Text
              </Text>
              <Ionicons name="ios-close-circle" size={32} color={"#CF2A28"} />
            </View>

            <View style={styles.item}>
              <Text style={styles.itemLabel}>Location</Text>
              <Text style={[styles.itemLabel, styles.itemValue]}>
                Boston, MA
              </Text>
              <Ionicons
                name="ios-checkmark-circle"
                size={32}
                color={"#009E11"}
              />
            </View>
          </View>

          <View style={styles.items}>
            <Text style={styles.headLabel}>My Network</Text>
            <Text style={styles.description}>
              Enabling network just means adding your contact from that network
              for possible introductions.
            </Text>
            <View style={styles.row}>
              <View style={styles.col}>
                <Ionicons name="logo-facebook" size={52} />
                <Switch
                  value={facebook}
                  style={styles.switch}
                  onValueChange={value =>
                    this.onToggleChange("facebook", value)}
                />
              </View>

              <View style={styles.col}>
                <Ionicons name="logo-instagram" size={52} />
                <Switch
                  value={instagram}
                  style={styles.switch}
                  onValueChange={value =>
                    this.onToggleChange("instagram", value)}
                />
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.col}>
                <Ionicons name="logo-twitter" size={52} />
                <Switch
                  value={twitter}
                  style={styles.switch}
                  onValueChange={value => this.onToggleChange("twitter", value)}
                />
              </View>

              <View style={styles.col}>
                <Ionicons name="logo-linkedin" size={52} />
                <Switch
                  value={linkedin}
                  style={styles.switch}
                  onValueChange={value =>
                    this.onToggleChange("linkedin", value)}
                />
              </View>
            </View>
          </View>

          <View style={styles.items}>
            <Text style={styles.headLabel}>Network Settings</Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                marginTop: 16,
                marginBottom: 16
              }}
            >
              Allow campaign to:
            </Text>

            <View style={styles.options}>
              {checkboxElements}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Setting;
