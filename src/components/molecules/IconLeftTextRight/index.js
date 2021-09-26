import React from 'react'
import { StyleSheet, View } from 'react-native'
import { H4 } from '../../../components'

const IconLeftTextRight = ({ icon, title, gap = 32, style }) => {
    return (
        <View style={[styles.wrapper, style]}>
            {icon}
            <H4 title={title} style={{ marginLeft: gap }} />
        </View>
    )
}

export default IconLeftTextRight

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
