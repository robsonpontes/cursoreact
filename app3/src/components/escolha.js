import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

class Escolha extends Component {
    constructor(props){
        super(props);

        this.state = props.state;
    }
    
    jokenpo(escolhaUsuario) {
        var numAleatorio = Math.floor(Math.random() * 3);

        var escolhaComputador = '';
        var resultado = 'a';

        switch (numAleatorio) {
            case 0: escolhaComputador = 'pedra'; break;
            case 1: escolhaComputador = 'papel'; break;
            case 2: escolhaComputador = 'tesoura'; break;
        }



        if ((escolhaUsuario == "papel" && escolhaComputador == "pedra") || (escolhaUsuario == "pedra" && escolhaComputador == "tesoura") || (escolhaUsuario == "tesoura" && escolhaComputador == "papel")) {
            resultado = 'Usuário ganhou';
        } else {
            if (escolhaUsuario == escolhaComputador) {
                resultado = 'Empate';
            } else {
                resultado = 'Computador ganhou'
            }
        }

        this.setState({ escolhaUsuario: escolhaUsuario, escolhaComputador: escolhaComputador, resultado: resultado });    
    }

  render() {
    return (
        <View style={styles.painelAcoes}>
            <View style={styles.btnEscolha}>
                <Button title="pedra" onPress={this.props.onPress}  />
            </View>

            <View style={styles.btnEscolha}>
                <Button title="papel" onPress={() => this.jokenpo('papel') } />
            </View>

            <View style={styles.btnEscolha}>
                <Button title="tesoura" onPress={() => {this.setState({ escolhaUsuario: 'tesoura'}), this.props.onPress }} />
            </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
    btnEscolha: {
        width: 90
    },
    painelAcoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },

});

export default Escolha;
