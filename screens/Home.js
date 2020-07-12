import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { naranja, blanco } from '../constants/color'
const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} resizeMode={"contain"} source={require('../assets/dama.png')} />
            <TouchableOpacity activeOpacity={0.8}
                onPress={() => navigation.navigate('Genero')}>
                <View style={styles.button}>
                    <Text style={styles.text}>INGRESAR</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: 350,
    },
    button: {
        backgroundColor: naranja,
        width: 180,
        height: 30,
        borderRadius: 50,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        elevation: 10
    },
    text: {
        color: blanco,
        fontSize: 20
    }
});
