import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Colors } from '../../../utils'

const H3 = ({ title, color = Colors.primary, style }) => {
    return (
        <Text style={[styles.h3, { color: color }, style]}>{title}</Text>
    )
}

export default H3

const styles = StyleSheet.create({
    h3: {
        fontSize: 28,
        fontFamily: 'Nunito-Bold'
    }
})
