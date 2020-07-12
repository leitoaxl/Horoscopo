import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { naranja, blanco, azulclaro, azul } from '../constants/color'
import images from '../constants/images'

const Horoscopo = ({ navigation, route }) => {
    const [isloading, setIsloading] = useState(true)
    const [img, setImg] = useState(images.acuario)
    const [text, setText] = useState('')
    const [days, setDays] = useState(0)

    const getData = async () => {
        const data = await fetch('https://api.adderou.cl/tyaas/')
        const response = await data.json()
        const day = route.params.date.getDate()
        const month = route.params.date.getMonth() + 1
        const sign = getZodiac(month, day)
        setImg(images[sign])
        setText(`${response.horoscopo[sign]['amor']} ${response.horoscopo[sign]['dinero']} ${response.horoscopo[sign]['salud']}`)
        setDays(getBirthdays(month, day))
        setIsloading(false)
    }

    useEffect(() => {
        getData()
    })

    return (
        (!isloading ?
            <View style={styles.container}>
                <View style={styles.imgcontainer}>
                    <Image style={styles.img} resizeMode={"contain"} source={img} />
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.saludo}>Hola {route.params.nombre}</Text>
                    <Text style={styles.text}>Tu horóscopo para hoy dice que:</Text>
                    <Text style={styles.text}>{text}</Text>
                </View>
                <View style={styles.cumplecontainer}>
                    <Text>Faltan {days} dias para tu cumpleaños</Text>
                </View>
                <View style={styles.buttoncontainer}>
                    <TouchableOpacity activeOpacity={0.8}
                        onPress={() => navigation.popToTop()}>
                        <View style={styles.button}>
                            <Text style={styles.textbutton}>Continuar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            :
            <View style={styles.container}>
                <Text>Cargando...</Text>
            </View>)
    )
}

export default Horoscopo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgcontainer: {
        marginTop: 10,
        flex: 1,
    },
    img: {
        width: 300
    },
    textcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        marginBottom: 25,
    },
    text: {
        textAlign: 'center'
    },
    saludo: {
        marginBottom: 25,
    },
    cumplecontainer: {
        flex: 1,
    },
    buttoncontainer: {
        flex: 1,
    },
    button: {
        backgroundColor: naranja,
        width: 140,
        height: 30,
        borderRadius: 50,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10
    },
    textbutton: {
        color: blanco,
        fontSize: 20
    },
});

function getZodiac(month, day) {
    var datecode = (month) * 100 + day;
    if (datecode <= 120) {
        return "capricornio";
    } else if (datecode <= 219) {
        return "acuario";
    } else if (datecode <= 320) {
        return "piscis";
    } else if (datecode <= 420) {
        return "aries";
    } else if (datecode <= 520) {
        return "tauro";
    } else if (datecode <= 621) {
        return "geminis";
    } else if (datecode <= 722) {
        return "cancer";
    } else if (datecode <= 822) {
        return "leo";
    } else if (datecode <= 921) {
        return "virgo";
    } else if (datecode <= 1022) {
        return "libra";
    } else if (datecode <= 1121) {
        return "escorpion";
    } else if (datecode <= 1221) {
        return "sagitario";
    } else {
        return "capricornio";
    }
}
function getBirthdays(month, day) {
    const tday = new Date(), y = tday.getFullYear(), next = new Date(y, month - 1, day);
    tday.setHours(0, 0, 0, 0);
    if (tday > next) next.setFullYear(y + 1);
    return Math.round((next - tday) / 8.64e7);
}
