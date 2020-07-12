import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { blanco } from '../constants/color'

const HeaderTitle = (props) => {
    return (
        <Text style={styles.title}>{props.Title}</Text>
    )
}
const styles = StyleSheet.create({
    title: {
        color: blanco,
        marginRight: 30,
        fontSize: 25,
        fontWeight:'bold'
    }
})
export default HeaderTitle