import React, { Component } from "react";

import { StyleSheet, View, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

function Divider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  divider: {
    marginTop: 15,
    marginBottom: 15,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  }
});

export default Divider;
