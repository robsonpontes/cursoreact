import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { blue } from 'ansi-colors';

class Topo extends Component {
  render() {
    return (
      <View style={styles.topo}>
         <Image source={require('../../imgs/jokenpo.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topo: {
    alignItems: 'center',
    backgroundColor: '#28B4E5'
  }

});

export default Topo;
