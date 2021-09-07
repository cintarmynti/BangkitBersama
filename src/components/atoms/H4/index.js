import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Colors } from '../../../utils'

const H4 = ({ title, color = Colors.primary, style }) => {
    return (
        <Text style={[styles.h4, { color: color }, style]}>{title}</Text>
    )
}

export default H4

const styles = StyleSheet.create({
    h4: {
        fontSize: 21,
        fontFamily: 'Nunito-Regular'
    }
})
