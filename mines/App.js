import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet
} from 'react-native';
import params from './src/params';
import Field from './src/components/Field'

const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.welcome}>Iniciando o Mines!!!</Text>
      <Text style={style.instructions}>Tamanho da Grade: {params.getRowsAmount()}x{params.getColumnsAmount()}
      </Text>

      <Field />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center"
  }
})

export default App;
