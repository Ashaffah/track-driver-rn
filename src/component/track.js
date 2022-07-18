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
        <View style={tw`flex justify-center`}>
          <Text style={tw`mb-1 font-semibold text-lg`}>TES</Text>
          <SelectDropdown
            buttonStyle={tw`bg-red-500 mb-4 px-4 py-4 max-w-none h-auto rounded-lg`}
            dropdownStyle={tw`bg-blue-500 max-w-none rounded-lg`}
            buttonTextStyle={tw`text-center text-white`}
            rowTextStyle={tw`text-center text-white`}
            data={country}
            onSelect={(val, index) => {
              console.log(val, index);
            }}
          />
          <Text style={tw`mb-1 font-semibold text-lg`}>TES</Text>
          <SelectDropdown
            buttonStyle={tw`bg-red-500 mb-4 px-4 py-4 max-w-none h-auto rounded-lg`}
            dropdownStyle={tw`bg-blue-500 max-w-none rounded-lg`}
            buttonTextStyle={tw`text-center text-white`}
            rowTextStyle={tw`text-center text-white`}
            data={country}
            onSelect={(val, index) => {
              console.log(val, index);
            }}
          />
          <Text style={tw`mb-1 font-semibold text-lg`}>TES</Text>
          <SelectDropdown
            buttonStyle={tw`bg-red-500 mb-4 px-4 py-4 max-w-none h-auto rounded-lg`}
            dropdownStyle={tw`bg-blue-500 max-w-none rounded-lg`}
            buttonTextStyle={tw`text-center text-white`}
            rowTextStyle={tw`text-center text-white`}
            data={country}
            onSelect={(val, index) => {
              console.log(val, index);
            }}
          />
          <Text style={tw`mb-1 font-semibold text-lg`}>TES</Text>
          <SelectDropdown
            buttonStyle={tw`bg-red-500 px-4 py-4 max-w-none h-auto rounded-lg`}
            dropdownStyle={tw`bg-blue-500 max-w-none rounded-lg`}
            buttonTextStyle={tw`text-center text-white`}
            rowTextStyle={tw`text-center text-white`}
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
