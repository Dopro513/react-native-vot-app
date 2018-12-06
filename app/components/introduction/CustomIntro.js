"use strict";

import React, { Component } from "react";

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";
import Modal from "react-native-modal";
import styles from "./styles";

import { Ionicons } from "@expo/vector-icons";
class CustomIntro extends Component {
  render() {
    const { isVisible, onClose } = this.props;
    return (
      <Modal
        isVisible={isVisible}
        animationIn={"slideInLeft"}
        animationOut={"slideOutRight"}
      >
        <View style={styles.modalContent}>
          <View style={{ position: "absolute", right: 20, top: 0 }}>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="ios-close-outline" size={32} />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Custom into
            </Text>

            <View style={{ marginTop: 15, marginBottom: 15 }}>
              <Text style={{ fontWeight: "400" }}>
                Share your unique referral link with any of your friends and
                we'll know your friends heard about our campaign through you!
              </Text>
            </View>

            <TextInput
              value={"simelinek here"}
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                height: 50,
                paddingLeft: 10
              }}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="ios-mail" size={32} style={{ padding: 15 }} />
            <Ionicons name="logo-facebook" size={32} style={{ padding: 15 }} />
            <Ionicons name="logo-twitter" size={32} style={{ padding: 15 }} />
            <Ionicons name="logo-instagram" size={32} style={{ padding: 15 }} />
          </View>
        </View>
      </Modal>
    );
  }
}

export default CustomIntro;
