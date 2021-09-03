import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Colors } from '../../../utils'

const H2 = ({ title, color = Colors.primary }) => {
    return (
        <Text style={[styles.h2, { color: color }]}>{title}</Text>
    )
}

export default H2

const styles = StyleSheet.create({
    h2: {
        fontSize: 38,
        fontWeight: '400'
    }
})
