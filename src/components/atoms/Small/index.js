import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Colors } from '../../../utils'

const Small = ({ title, color = Colors.primary, style }) => {
    return (
        <Text style={[styles.small, { color: color }, style]}>{title}</Text>
    )
}

export default Small

const styles = StyleSheet.create({
    small: {
        fontSize: 12,
        fontFamily: 'Nunito-Bold'
    }
})
