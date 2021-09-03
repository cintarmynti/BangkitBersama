import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Colors } from '../../../utils'

const H4 = ({ title, color = Colors.primary }) => {
    return (
        <Text style={[styles.h4, { color: color }]}>{title}</Text>
    )
}

export default H4

const styles = StyleSheet.create({
    h4: {
        fontSize: 21,
        fontWeight: 'normal'
    }
})
