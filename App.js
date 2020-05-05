import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight,  } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { numAleatorio: 0 }
  }

  gerarNumero = () => {
    let min = Math.ceil(this.min);
    let max = Math.floor(this.max);
    let numero = Math.floor(Math.random() * (max - min)) + min;
    this.setState(this.state, () => {
      this.state.numAleatorio = numero
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.containerNumText}>{this.state.numAleatorio}</Text>
        </View>

        <View style={styles.containerText}> 
          <TextInput
            style={styles.input}
            placeholder = "Primeiro Número"
            autoCorrect={false}
            onChangeText={text => {
              this.min = text
            }}
          />
          <TextInput
            style={styles.input}
            placeholder = "Segundo Número"
            autoCorrect={false}
            onChangeText={text => {
              this.max = text
            }}
          />
          <TouchableHighlight
            onPress={this.gerarNumero}
            style={styles.btnsubmit}>
            <Text style={styles.btnText}>Gerar Numero</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF0F3',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  containerNumText:{
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fffcfc',
    fontSize: 50,
  },
  containerText:{
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    color: '#FFF',
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 10,
    padding: 10,
  },
  btnsubmit: {
    backgroundColor:'#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnText: {
    color:'#FFF',
    fontSize: 18,
  }

});