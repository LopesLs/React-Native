import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

export default function ResultIMC(props){
    return(
        <View style={styles.resultIMC}>
            <Text style={styles.information}>{props.messageResultIMC}</Text>
            <Text style={styles.numberIMC}>{props.Resultimc}</Text>
        </View>
    );
};