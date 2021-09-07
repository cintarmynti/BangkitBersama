import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Colors } from '../../../utils'

const Xsmall = ({ title, color = Colors.primary, style }) => {
    return (
        <Text style={[styles.xsmall, { color: color }, style]}>{title}</Text>
    )
}

export default Xsmall

const styles = StyleSheet.create({
    xsmall: {
        fontSize: 8,
        fontFamily: 'Nunito-Bold'
    }
})
