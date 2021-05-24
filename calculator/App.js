import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';

import Button from './src/components/Button'
import Display from './src/components/Display'

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [clearDisplay, setClearDisplay] = useState(false);
  const [operation, setOperation] = useState(null);
  const [values, setValues] = useState([0, 0]);
  const [current, setCurrent] = useState(0);

  const addDigit = (n) => {
    const limparDisplay = displayValue === '0' || clearDisplay;

    if (n === '.' && !clearDisplay && displayValue.includes('.')) {
      return 
    }

    const currentValue = limparDisplay ? '' : displayValue;
    const valorDisplay = currentValue + n;
    setDisplayValue(valorDisplay);
    setClearDisplay(false);

    if (n !== '.') {
      const newValue = parseFloat(valorDisplay);
      const valores = [values];
      valores[current] = newValue;
      setValues(valores);
    }
  }

  const clearMemory = () => {
    setDisplayValue('0');
    setClearDisplay(false);
    setOperation(null);
    setValues([0,0]);
    setCurrent(0);
  }

  const modificarOperacao = (operacao) => {
    if (current === 0) {
      setOperation(operacao);
      setCurrent(1);
      setClearDisplay(true);
    } else {
      const equals = operacao === "="
      const valores = values;

      try {
        valores[0] = eval(`${valores[0]} ${operation} ${valores[1]}`)
      } catch(e) {
        valores[0] = values[0]
      }

      valores[1] = 0
      setDisplayValue(`${valores[0]}`)
      setOperation(equals ? null : operacao);
      setCurrent(equals ? 0 : 1)
      setClearDisplay(true);
      setValues(valores);
    }
  } 

  return (
    <SafeAreaView style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button label='AC' triple onClick={clearMemory} />
        <Button label='/' operation onClick={modificarOperacao} />
        <Button label='7' onClick={addDigit} />
        <Button label='8' onClick={addDigit} />
        <Button label='9' onClick={addDigit} />
        <Button label='*' operation onClick={modificarOperacao} />
        <Button label='4' onClick={addDigit} />
        <Button label='5' onClick={addDigit} />
        <Button label='6' onClick={addDigit} />
        <Button label='-' operation onClick={modificarOperacao} />
        <Button label='1' onClick={addDigit} />
        <Button label='2' onClick={addDigit} />
        <Button label='3' onClick={addDigit} />
        <Button label='+' operation onClick={modificarOperacao} />
        <Button label='0' double onClick={addDigit} />
        <Button label='.' onClick={addDigit} />
        <Button label='=' operation onClick={modificarOperacao} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

export default App;
