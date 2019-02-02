/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import Topo from './src/components/topo';
import Escolha from './src/components/escolha';
import Resultado from './src/components/resultado';


const styles = StyleSheet.create({
    btnEscolha: {
        width: 90
    },
    painelAcoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
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
})

class app3 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            escolhaUsuario: '',
            escolhaComputador: '',
            resultado: ''
        }
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
            <View>
                <Topo></Topo>
                <Escolha onPress={() => { this.jokenpo('pedra') }}></Escolha>
               
                <View style={styles.painelAcoes}>                    
                    <View style={styles.btnEscolha}>
                        <Button title="pedra" onPress={() => { this.jokenpo('pedra'); }} />
                    </View>

                    <View style={styles.btnEscolha}>
                        <Button title="papel" onPress={() => { this.jokenpo('papel'); }} />
                    </View>

                    <View style={styles.btnEscolha}>
                        <Button title="tesoura" onPress={() => { this.jokenpo('tesoura'); }} />
                    </View>

                </View>

                <Resultado resultado={this.state.resultado} escolhaComputador={this.state.escolhaComputador}  escolhaUsuario={this.state.escolhaUsuario}/>

{/*   
                <View style={styles.palco}>
                    <Text style={styles.txtResultado}>{this.state.resultado}</Text>

                    <Icone escolha={this.state.escolhaComputador} jogador='Computador' />

                    <Icone escolha={this.state.escolhaUsuario} jogador='Você' />

                </View>
                            
                <Text>Escolha do Computador {this.state.escolhaComputador}</Text>
                <Text>Escolha do usuário: {this.state.escolhaUsuario}</Text>
                <Text>Resultado: {this.state.resultado}</Text>
                <Button title="pedra" onPress={() => { this.jokenpo('pedra') }} />
                <Button title="papel" onPress={() => { this.jokenpo('papel') }} />
                <Button title="tesoura" onPress={() => { this.jokenpo('tesoura') }} />
                */}
            </View>
        );
    }
}
/*
class Topo extends Component {
    render() {
        return (
            <View>
                <Image source={require('./imgs/jokenpo.png')} />
            </View>
        );
    }
}
*/

class MeuComponenete extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.teste}</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('app3', () => app3);
