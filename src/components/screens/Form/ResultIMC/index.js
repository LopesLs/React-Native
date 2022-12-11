import React from 'react';
import {View, Text} from 'react-native';

export default function ResultIMC(props){
    return(
        <View>
            <Text>{props.messageResultIMC}</Text>
            <Text>{props.Resultimc}</Text>
        </View>
    );
};