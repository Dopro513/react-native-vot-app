"use strict";

import React, { Component } from "react";

import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Select, Option } from "react-native-chooser";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Card, Button, ButtonGroup } from "react-native-elements";
import Modal from "react-native-modal";
const { width, height } = Dimensions.get("window");
import CustomIntro from "./CustomIntro";

class Introduction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "undertaker",
      selectedIndex: 2,
      isVisible: false
    };

    this.onSelect = this.onSelect.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
  }
  onSelect(data) {
    this.setState({ selected: data });
  }
  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }
  render() {
    const buttons = ["Yes", "Skip", "No"];
    const { selectedIndex, isVisible } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 16,
              marginBottom: 16
            }}
          >
            <Select
              onSelect={this.onSelect}
              defaultText="Candidate Campaign"
              style={{
                width: width - 20
              }}
              textStyle={{}}
              selected={this.state.selected}
            >
              <Option value="johnceena">Johnceena</Option>
              <Option value="undertaker">Undertaker</Option>
              <Option value="Daniel">Daniel</Option>
              <Option value="Roman">Roman</Option>
              <Option value="Stonecold">Stonecold</Option>
              <Option value="Rock">Rock</Option>
              <Option value="Sheild">Sheild</Option>
              <Option value="Orton">Orton</Option>

            </Select>
          </View>

          <View
            style={{
              height: 50,
              backgroundColor: "#ccc",
              flexDirection: "row",
              padding: 16,
              alignItems: "center"
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "600" }}>First Last</Text>
            <View style={{ position: "absolute", right: 15 }}>
              <Ionicons name="ios-search" size={32} />
            </View>
          </View>

          <View style={{ padding: 16 }}>
            <View style={styles.cardBox}>
              <View style={{ height: 150, backgroundColor: "#ccc" }} />
              <View style={{ padding: 16 }}>
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 16,
                    fontWeight: "600"
                  }}
                >
                  First Name
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons
                    name="md-checkmark"
                    size={28}
                    style={{ fontWeight: "bold" }}
                  />
                  <Text style={{ fontWeight: "600", marginLeft: 16 }}>
                    Can Vote
                  </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons
                    name="ios-star"
                    size={28}
                    style={{ fontWeight: "bold" }}
                  />
                  <Text style={{ fontWeight: "600", marginLeft: 15 }}>
                    Likely Supporter
                  </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons
                    name="ios-star"
                    size={28}
                    style={{ fontWeight: "bold" }}
                  />
                  <Text style={{ fontWeight: "600", marginLeft: 15 }}>
                    Voter Connections
                  </Text>
                </View>
              </View>
              <View style={{ alignItems: "center", marginBottom: -5 }}>
                <ButtonGroup
                  onPress={this.updateIndex}
                  selectedIndex={selectedIndex}
                  buttons={buttons}
                  containerStyle={{ width: width - 34, borderRadius: 0 }}
                />
              </View>
            </View>

            <View style={styles.customButton}>
              <TouchableOpacity
                onPress={() => this.setState({ isVisible: true })}
              >
                <Text
                  style={{ textDecorationLine: "underline", color: "#2D61A4" }}
                >
                  Send a custom into
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <CustomIntro
          isVisible={isVisible}
          onClose={() => this.setState({ isVisible: false })}
        />
      </View>
    );
  }
}

export default Introduction;
