import React from 'react';
import {View, Text, Image,TouchableOpacity} from 'react-native';

const Estilo = {
  estiloTexto:{
     fontSize: 50
  },
  principal:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  botao:{
    marginTop: 20,
    backgroundColor: '#538330',
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  textoBotao:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }

}


const frase = () => {

  let posrandon = Math.floor(Math.random() * 4);
  let arr_frase = ["Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado",
   "Imagine uma nova história para sua vida e acredite nela.", 
   "A amizade desenvolve a felicidade e reduz o sofrimento, duplicando a nossa alegria e dividindo a nossa dor.",
    "Não tenha medo da mudança. Coisas boas se vão para que outras melhores possam vir",
  "O tempo é o melhor autor. Sempre encontra um final perfeito"];

  alert(arr_frase[posrandon]);

}

const App = () => <View style={Estilo.principal}>
<Image source={ require('./imgs/logo.png')} />
    <TouchableOpacity style={Estilo.botao} onPress={frase}>
        <Text style={Estilo.textoBotao}>Nova Frase</Text>
    </TouchableOpacity>
  </View>

export default App;