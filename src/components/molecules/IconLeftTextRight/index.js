import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Sicon, H4 } from '../../../components'

const IconLeftTextRight = ({ img, title, gap = 32, style }) => {
    return (
        <View style={[styles.wrapper, style]}>
            <Sicon width={25} height={25} img={img} />
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
