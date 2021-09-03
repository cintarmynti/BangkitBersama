import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Colors } from '../../../utils'

const H5 = ({ title, color = Colors.primary }) => {
    return (
        <Text style={[styles.h5, { color: color }]}>{title}</Text>
    )
}

export default H5

const styles = StyleSheet.create({
    h5: {
        fontSize: 12,
        fontWeight: '400'
    }
})
