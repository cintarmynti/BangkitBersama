import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Colors } from '../../../utils'

const P = ({ title, color = Colors.primary }) => {
    return (
        <Text style={[styles.p, { color: color }]}>{title}</Text>
    )
}

export default P

const styles = StyleSheet.create({
    p: {
        fontSize: 16,
        fontWeight: 'normal'
    }
})
