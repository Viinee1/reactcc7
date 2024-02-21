import { StatusBar, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [valor, setValor] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#fff');
  const [cliquesfundo, setFundo] = useState(0);
  const [imagem, setImagem] = useState('./images/jack.jpeg');


  const trocarImagem = () => {
    setImagem('./images/mp.jpg');
  };

  const subtrairContador = () => {
    setValor(valor - 1);
  };

  const atualizarFundo = () => {
    setFundo(cliquesfundo + 1);

    if (cliquesfundo >= 0) {
      setBackgroundColor('green');
    }
  };

  const atualizarValor = () => {
    setValor(valor + 1);
  };

  return (
    <Pressable onPress={atualizarFundo} style={[styles.container, { backgroundColor }]}>
    <View style={[styles.container, { backgroundColor }]}>
      <StatusBar style="auto" />
      <Pressable onPress={trocarImagem}>
        <Image source={imagem} 
        style={styles.image} />
      </Pressable>
      <br></br>
      <Pressable onPress={subtrairContador}>
        <Text>{valor}</Text>
      </Pressable>
      <Pressable onPress={atualizarValor}>
        <Text style={styles.button}>somar</Text>
      </Pressable>
    </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "purple",
    color: "white",
  },
  image: {
    width: 300,
    height: 450,
    borderRadius: 20,
    borderStyle: 'solid',
    borderColor: 'yellow',
    borderWidth: 'medium'
  }
});
