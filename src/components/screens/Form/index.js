import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import ResultIMC from './ResultIMC/';
import styles from './style';

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageIMC, setMessageIMC] = useState('Preencha o peso e altura')
    const [IMC, setIMC] = useState(null)
    const [TextButton, setTextButton] = useState('Calcular')

    function imcCalculator(){
        return setIMC((weight/(height*height)).toFixed(2))
    }

    function validationIMC(){
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setHeight(null)
            setMessageIMC('Seu imc é igual: ')
            setTextButton('Calcular Novamente')
            return
        }
        
        else{
            setIMC(null)
            setTextButton("Calcular")
            setMessageIMC("Preencha o peso e altura")
        }
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                
                <TextInput style={styles.input} placeholder='Ex. 1.75' keyboardType='numeric' onChangeText={setHeight} value={height}></TextInput>
                
                <Text style={styles.formLabel}>Peso</Text>
                
                <TextInput style={styles.input} onChangeText={setWeight} placeholder='Ex. 75' keyboardType='numeric' value={weight}></TextInput>
                
                <TouchableOpacity style={styles.buttonCalculator} onPress={() => {validationIMC}}><Text style={styles.textButtonCalculator}>{TextButton}</Text></TouchableOpacity>
                
            </View>
            
            <ResultIMC messageResultIMC={messageIMC} resultimc={IMC}/>
        </View>
    );
};