import React from 'react'
import { StyleSheet, View } from 'react-native'

const RoundedSquare = ({ content }) => {
    return (
        <View style={styles.wrapper}>
            {content}
        </View>
    )
}

export default RoundedSquare

const styles = StyleSheet.create({
    wrapper: {
        width: 65,
        height: 65,
        backgroundColor: 'white',
        borderRadius: 10
    }
})
