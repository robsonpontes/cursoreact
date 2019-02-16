
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';


const logo = require('../src/imgs/logo.png');
const btnJogar = require('../src/imgs/botao_jogar.png');
const btnSobreJogo = require('../src/imgs/sobre_jogo.png');
const btnOutrosJogos = require('../src/imgs/outros_jogos.png');

type Props = {};
export default class Principal extends Component<Props> {
  render() {
    return (
        
      <View style={styles.cenaPrincipal}>     
        <View style={styles.apresentacaoJogo}>
          <Image source={logo} />
          <Image source={btnJogar} />
        </View>
        <View style={styles.rodape}>
          <Image source={btnSobreJogo} />
          <Image source={btnOutrosJogos} />
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  cenaPrincipal: {
    flex: 1,
    backgroundColor: '#61BD8C'
  },
  apresentacaoJogo:{
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rodape:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }



});
