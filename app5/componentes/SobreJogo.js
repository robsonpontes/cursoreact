import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class SobreJogos extends Component{
    render(){
        return(
            <Text style={{flex: 1, backgroundColor: '#61BD8C'}}>
                Aqui podem ser apresentado informações sobre o jogo
            </Text>
        );
    }
}