import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Touchable } from 'react-native';
import {Alert} from 'react-native';

export default function App() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = (operation) => {
    if(firstNumber===''|| secondNumber===''){
      Alert.alert('Error', 'Please fill in both input fields!');
      Alert.alert('Error, fill in both input fields!');
      return;
    }

    
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if(isNaN(num1)|| isNaN(num2)){
      Alert.alert('Error', 'Please enter valid numbers');
      return;
    }
if(isNaN(num1) || isNaN(num2)) {
  Alert.alert('Error', 'Please enter a valid number!');
  return;

}



    let calculation;
    switch (operation) {
      case 'Add':
        calculation - num1 + num2;
        break;
      case 'Subtract':
        calculation - num1 - num2;
        break;
      case 'Mutiply':
          calculation - num1 * num2;
          break;
      case 'Divide':
          if(num2 === 0){
            Alert.alert('Error', 'Cannot divide by zero');
            return;
          }
          
          calculation = num1 / num2;
          break;
        default:
          calculation = '';
    }
    setResult(calculation.toString());
  };

  const handleReset = () => {
    setFirstNumber('');
    setSecondNumber('');
    setResult('');
  };

  return (
    <View style={StyleSheet.container}>
      <Text style={StyleSheet.title}>calculation App</Text>

      <View style={StyleSheet.inputContainer}>
        <Text style={dtyles.label}>First Number:</Text>
        <TextInput
          style={StyleSheet.input}
          placeholder="Enter First Number"
          keyboardType="numeric"
          value={firstNumber}
          onChangeText={setFirstNumber}
        />
      </View>

      <View style={style.inputContainer}>
        <Text style={StyleSheet.label}>Second Number:</Text>
        <TextInput
          style={StyleSheet.input}
          placeholder="Enter Second Number"
          keyboardType="numeric"
          value={secondNumber}
          onChangeText={setSecondNumber}
        />
      </View>


      <View style={StyleSheet.listContainer}>

        <TouchableOpacity style={StyleSheet.listButton} onPress={() => handleCalculate('Add')}>
          <Text style={style.buttonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={StyleSheet.listButton} onPress={() => handleCalculate('Subtract')}>
          <Text style={style.buttonText}>Subtract</Text>
        </TouchableOpacity>
        <TouchableOpacity style={StyleSheet.listButton} onPress={() => handleCalculate('Multiply')}>
          <Text style={style.buttonText}>Multiply</Text>
        </TouchableOpacity>
        <TouchableOpacity style={StyleSheet.listButton} onPress={() => handleCalculate('Divide')}>
          <Text style={style.buttonText}>Divide</Text>
        </TouchableOpacity>
      </View>

      <View style={StyleSheet.resultContainer}>
        <Text style={StyleSheet.label}>Result:</Text>
        <TextInput style={StyleSheet.resultBox} editable={false} value={result} />
      </View>

      {/* Reset button with blue text */}
      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  label: {
    fontSize: 16,
    width: '30%',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    flex: 1,
  },
  listContainer: {
    marginVertical: 20,
    width: '100%',
  },
  listButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  resultContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  resultBox: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    flex: 1,
  },
  resetButton: {

    padding: 10,
    borderRadius: 0,
    alignItems: 'center',
    width: '100%',
  },
  resetButtonText: {
    color: '#007bff',
    fontSize: 16,
  },
})