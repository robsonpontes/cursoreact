
import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import Itens from './Itens.js'


export default class ListaItens extends Component<Props> {

  constructor(props){
    super(props);

    this.state = {ListaItens: [] };
  }

  componentWillMount() {
    axios.get("http://faus.com.br/recursos/c/dmairr/api/itens.html")
      .then(response => {

        this.setState({ListaItens: response.data});
         console.log(response); 
        })
      .catch(() => { console.log('Erro ao recuperar os dados'); });
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: 'red'}}>
        {this.state.ListaItens.map(item => (<Itens key={item.titulo} item={item} />))}
      </ScrollView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
