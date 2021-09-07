import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Colors } from '../../../utils'

const P = ({ title, color = Colors.primary, style }) => {
    return (
        <Text style={[styles.p, { color: color }, style]}>{title}</Text>
    )
}

export default P

const styles = StyleSheet.create({
    p: {
        fontSize: 16,
        fontFamily: 'Nunito-Bold'
    }
})
