import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Colors } from '../../../utils'

const H1 = ({ title, color = Colors.primary }) => {
    return (
        <Text style={[styles.h1, { color: color }]}>{title}</Text>
    )
}

export default H1

const styles = StyleSheet.create({
    h1: {
        fontSize: 50,
        fontWeight: 'normal'
    }
})
