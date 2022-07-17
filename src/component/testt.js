import React, { Component } from "react";
import { Text, View } from "react-native";
import tw from "twrnc";

export default class Testt extends Component {
  render() {
    return (
      <>
        <View style={tw`flex justify-center`}>
          <Text style={tw`font-bold`}>HALO DUNIA</Text>
        </View>
      </>
    );
  }
}
