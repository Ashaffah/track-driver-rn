import React, { Component } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { StyleSheet, TouchableOpacity, Text, View, Button } from "react-native";
import tw from "twrnc";
import Track from "./src/component/track";
import Testt from "./src/component/testt";

export default class App extends Component {
  render() {
    return (
      <>
        <View style={tw`mx-auto mt-20`}>
          <Testt />
          <Track />
        </View>
      </>
    );
  }
}
