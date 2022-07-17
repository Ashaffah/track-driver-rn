import React, { Component } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { StyleSheet, TouchableOpacity, Text, View, Button } from "react-native";
import tw from "twrnc";

export default class Track extends Component {
  constructor() {
    super();
    this.state = {
      country: ["Egypt", "Canada", "Australia", "Ireland"],
      press: false,
    };

    // componentDidMount(){
    // }
  }
  render() {
    const { country } = this.state;
    return (
      <>
        <View style={tw`flex-auto my-auto mx-auto justify-center w-18`}>
          <SelectDropdown
            buttonStyle={tw`bg-red-500 text-center text-white px-4 py-4 w-18 rounded-lg`}
            dropdownStyle={tw`bg-blue-500 text-white text-center my-auto mx-auto w-18 rounded-lg`}
            data={country}
            onSelect={(val, index) => {
              console.log(val, index);
            }}
          />
        </View>
      </>
    );
  }
}
