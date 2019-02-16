
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { Stack, Router, Scene } from 'react-native-router-flux';
import Principal from './componentes/Principal';
import SobreJogo from './componentes/SobreJogo';
import OutrosJogos from './componentes/OutrosJogos';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (

      <Router>
        <Stack key="root">
          <Scene key='principal' component={Principal} initial title="Cara ou Coroa"/>
          <Scene key='sobrejogo' component={SobreJogo} />
          <Scene key='outrosjogos' component={OutrosJogos} />
        </Stack>
      </Router>

    );
  }
}

const styles = StyleSheet.create({
  cenaPrincipal: {
    flex: 1,
    backgroundColor: 'red'
  },
  apresentacaoJogo: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rodape: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }



});
