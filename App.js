import React, { Component } from 'react';

import { View,Text,StyleSheet } from 'react-native';

class App extends Component {
  render() {
    
    const myStyle = StyleSheet.create({
      green: {
        color: 'green',
        fontSize: 24
      }
    });

    return (
      <View>
        <Text style={myStyle.green}> SALAM this is my First Component With React Native  </Text>
      </View>
    );

    

    
  }

  
}

export default App;