
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ListaItens from './src/components/ListaItens.js'


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
     
          <ListaItens/>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  
});
