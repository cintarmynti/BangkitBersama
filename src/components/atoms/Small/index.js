import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Colors } from '../../../utils'

const Small = ({ title, color = Colors.primary }) => {
    return (
        <Text style={[styles.small, { color: color }]}>{title}</Text>
    )
}

export default Small

const styles = StyleSheet.create({
    small: {
        fontSize: 12,
        fontWeight: 'normal'
    }
})
