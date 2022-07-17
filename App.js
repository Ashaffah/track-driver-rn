import React, { Component } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { StyleSheet, TouchableOpacity, Text, View, Button } from "react-native";
import tw from "twrnc";
import Track from "./src/component/track";
import Testt from "./src/component/testt";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      press: false,
    };

    // componentDidMount(){
    // }
  }
  render() {
    const { press, counter } = this.state;
    console.log("Press", press);
    return (
      <>
        <View style={tw`mx-auto`}>
          <Testt style={tw`mb-4`} />
          <Track />
        </View>
      </>
      // <View style={tw`flex my-auto mx-auto justify-center`}>
      //   <Text style={tw`justify-center font-bold mb-4`}>
      //     Count: {this.state.counter}
      //   </Text>
      //   <TouchableOpacity
      //     onPress={() => {
      //       this.setState({ counter: counter + 1 });
      //     }}
      //   >
      //     <Text
      //       style={tw`bg-blue-500 text-white text-center hover:bg-blue-700 font-bold py-2 px-4 mb-4 rounded-full`}
      //     >
      //       TAMBAH +
      //     </Text>
      //   </TouchableOpacity>
      //   <TouchableOpacity
      //     onPress={() => {
      //       this.setState({ counter: counter - 1 });
      //     }}
      //   >
      //     <Text
      //       style={tw`bg-blue-500 text-white text-center hover:bg-blue-700 font-bold py-2 px-4 mb-4 rounded-full`}
      //     >
      //       KURANG -
      //     </Text>
      //   </TouchableOpacity>
      //   <TouchableOpacity
      //     onPress={() => {
      //       this.setState({ counter: 0 });
      //     }}
      //   >
      //     <Text
      //       style={tw`bg-red-500 text-white hover:bg-red-700 text-center font-bold py-2 px-4 mb-4 rounded-full`}
      //     >
      //       RESET
      //     </Text>
      //   </TouchableOpacity>
      // </View>
    );
  }
}
