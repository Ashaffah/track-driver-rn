import React, { Component } from "react";
import { Text, View } from "react-native";
import tw from "twrnc";

export default class Testt extends Component {
  render() {
    return (
      <>
        <View style={tw`flex justify-center mb-8`}>
          <Text style={tw`font-bold text-center text-xl`}>HALO DUNIA</Text>
        </View>
      </>
    );
  }
}
