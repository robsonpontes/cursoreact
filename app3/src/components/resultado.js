import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Icone from '../../src/components/icone';

class Resultado extends Component {
    constructor(props){
        super(props);

        this.state = props.state;
    }
    
   
  render() {
    return (
        <View style={styles.palco}>
        <Text style={styles.txtResultado}>{this.props.resultado}</Text>

        <Icone escolha={this.props.escolhaComputador} jogador='Computador' />

        <Icone escolha={this.props.escolhaUsuario} jogador='Você' />

    </View>
    );
  }
}

const styles = StyleSheet.create({
    palco: {
        alignItems: 'center',
        marginTop: 10
    },
    txtResultado: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
        height: 60
    }

});

export default Resultado;
