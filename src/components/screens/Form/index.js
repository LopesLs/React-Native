import React, {useState} from 'react';
import {View, TextInput, Text, Button} from 'react-native';
import ResultIMC from './ResultIMC/';

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
        <View>
            <View>
                <Text>Altura</Text>
                
                <TextInput placeholder='Ex. 1.75' keyboardType='numeric' onChangeText={setHeight} value={height}></TextInput>
                
                <Text>Peso</Text>
                
                <TextInput onChangeText={setWeight} placeholder='Ex. 75' keyboardType='numeric' value={weight}></TextInput>
                
                <Button onPress={() => {validationIMC()}} title={TextButton}/>
            </View>
            <ResultIMC messageResultIMC={messageIMC} resultimc={IMC}/>
        </View>
    );
};