import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { naranja, blanco, azulclaro } from '../constants/color'
const Genero = ({ navigation }) => {
    const [genero, setGenero] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>INGRESA TU GÉNERO</Text>
            </View>
            <View style={styles.generos}>
                <TouchableOpacity onPress={()=>{setGenero('gen-1')}}>
                    <Image style={genero === 'gen-1' ? styles.logopressed : styles.logo} resizeMode={"contain"} source={require('../assets/gen-1.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setGenero('gen-2')}}>
                    <Image style={genero === 'gen-2' ? styles.logopressed : styles.logo} resizeMode={"contain"} source={require('../assets/gen-2.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setGenero('gen-3')}}>
                    <Image style={genero === 'gen-3' ? styles.logopressed : styles.logo} resizeMode={"contain"} source={require('../assets/gen-3.png')} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.8}
                onPress={() => navigation.navigate('Datos')}>
                <View style={styles.button}>
                    <Text style={styles.text}>CONTINUAR</Text>
                </View>
            </TouchableOpacity>
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
    logo: {
        width: 140,
        height: 140,
        opacity:0.5
    },
    logopressed: {
        width: 140,
        height: 140,
        opacity:1
    },
    button: {
        backgroundColor: naranja,
        width: 180,
        height: 30,
        borderRadius: 50,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        elevation: 10
    },
    text: {
        color: blanco,
        fontSize: 20
    },
    generos: {
        flexDirection: 'row',
        justifyContent:'space-evenly',
        marginBottom:80
    },
    titleContainer: {
        marginBottom:100
    },
    titleText: {
        color: azulclaro,
        fontSize:25,
        fontWeight:'bold'

    }
});
