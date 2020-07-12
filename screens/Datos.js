import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { naranja, blanco, azulclaro, azul } from '../constants/color'
import { TextInput } from 'react-native-gesture-handler'
import DateTimePicker from '@react-native-community/datetimepicker';

const Genero = ({ navigation }) => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [dateString, setDateString] = useState('');
    const [show, setShow] = useState(false);
    const [nombre, setNombre] = useState('')

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        setDateString(currentDate.toDateString())
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>INGRESA TUS DATOS</Text>
            </View>
            <View style={styles.datos}>
                <View style={styles.datosrow}>
                    <Text style={styles.datostitle}>Nombre:</Text>
                    <TextInput style={styles.datosinput} onChangeText={text => (setNombre(text))} />
                </View>
                <View style={styles.datosrow}>
                    <Text style={styles.datostitle}>Email:</Text>
                    <TextInput style={styles.datosinput} onChangeText={text => (setNombre(text))} />
                </View>
                <View style={styles.datosrow}>
                    <Text style={styles.datostitle}>Fecha de Nacimiento:</Text>
                    <TextInput style={styles.datosinput} value={dateString} onTouchEnd={() => { setShow(true) }} />
                    {show && (<DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={'date'}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                    )}
                </View>
            </View>
            <View style={styles.buttonsrow}>
                <TouchableOpacity activeOpacity={0.8}
                    onPress={() => navigation.goBack()}>
                    <View style={[styles.button, styles.buttonback]}>
                        <Text style={styles.text}>VOLVER</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}
                    onPress={() => navigation.navigate('Horoscopo', {nombre, date})}>
                    <View style={styles.button}>
                        <Text style={styles.text}>CONTINUAR</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Genero

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: naranja,
        width: 160,
        height: 30,
        borderRadius: 50,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        elevation: 10
    },
    buttonback: {
        backgroundColor: azul
    },
    buttonsrow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%'
    },
    text: {
        color: blanco,
        fontSize: 20
    },
    datosrow: {
        flexDirection: 'row',
        marginBottom: 40,
        width: '95%',
        justifyContent: 'flex-start'
    },
    datostitle: {
        color: azulclaro,
        fontSize: 20,
    },
    datosinput: {
        flex:1,
        color: azulclaro,
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    titleContainer: {
        marginBottom: 80
    },
    titleText: {
        color: azulclaro,
        fontSize: 25,
        fontWeight: 'bold'
    }
});
