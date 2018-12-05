"use strict";

import React, { Component } from "react";

import { View, TextInput } from "react-native";

import styles from "./styles";

class Form extends Component {
  render() {
    const { form, onFormChange } = this.props;
    return (
      <View>
        <View style={[styles.inputContainer, styles.center]}>
          <TextInput
            ref={ref => (this.emailField = ref)}
            value={form.email}
            underlineColorAndroid={"transparent"}
            style={styles.input}
            returnKeyType="next"
            placeholder="Email"
            keyboardType="email-address"
            maxLength={40}
            onChangeText={value => onFormChange("email", value.toLowerCase())}
            onSubmitEditing={() => this.passwordField.focus()}
          />
        </View>

        <View style={[styles.inputContainer, styles.center]}>
          <TextInput
            ref={ref => (this.passwordField = ref)}
            value={form.password}
            returnKeyType="done"
            secureTextEntry
            maxLength={18}
            underlineColorAndroid={"transparent"}
            style={styles.input}
            placeholder="Password"
            onChangeText={value => onFormChange("password", value)}
          />
        </View>
      </View>
    );
  }
}

export default Form;
