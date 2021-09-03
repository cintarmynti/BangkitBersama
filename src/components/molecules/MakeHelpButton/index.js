import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Colors } from '../../../utils'

const MakeHelpButton = ({ active, content, top, bottom, left, right }) => {
    return (
        <View style={[styles.makeHelpButton, {
            top: top,
            bottom: bottom,
            left: left,
            right: right
        }, active ? styles.active : {}]}>
            {content}
        </View>
    )
}

export default MakeHelpButton

const styles = StyleSheet.create({
    makeHelpButton: {
        width: 72,
        height: 72,
        backgroundColor: Colors.primary,
        borderRadius: 72 / 2,
        borderWidth: 3,
        borderColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    active: {
        shadowColor: Colors.primary,
        elevation: 10
    }
})
