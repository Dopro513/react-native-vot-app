"use strict";

import React, { Component } from "react";

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Dimensions,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";
import { withNavigation } from "@expo/ex-navigation";
import Router from "../../Router";
import styles from "./styles";
import Form from "./Form";

const propsTypes = {
  login: PropTypes.bool,
  title: PropTypes.string
};

const defaultProps = {
  login: false,
  title: "Sign Up"
};

@withNavigation
class Login extends Component {
  state = {
    form: {
      email: "",
      password: ""
    }
  };

  onFormChange = (field, value) => {
    const { form } = this.state;
    form[field] = value;
    this.setState({ form: form });
  };

  _handleButtonPress = () => {
    this.props.navigator.replace("tabNavigation");
  };

  onButtonPress = () => {
    this.props.navigator.push("login");
  };

  render() {
    const { form } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.headContainer}>
          <Text style={styles.headLabel}>Outvote</Text>
        </View>
        <View style={styles.formConatiner}>
          <Text style={{ textAlign: "center", fontSize: 18, marginBottom: 16 }}>
            Sign Up
          </Text>

          <Form onFormChange={this.onFormChange} form={form} />

          <View style={{ marginTop: 16 }}>
            <Button title={"Sign Up"} onPress={this._handleButtonPress} />
          </View>

          <View style={[styles.footerContainer, styles.center]}>
            <Text style={{ paddingBottom: 16, paddingTop: 16 }}>
              Already have an account?
            </Text>

            <TouchableOpacity onPress={this.onButtonPress}>
              <Text style={{ textDecorationLine: "underline" }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

Login.propsTypes = propsTypes;
Login.defaultProps = defaultProps;

export default Login;
