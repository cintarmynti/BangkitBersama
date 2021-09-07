import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Colors } from '../../../utils'
import { Small, Xsmall, ProfilePicture } from '../..'

const PictureLeftTextRight = ({ style, title, text, img }) => {
    return (
        <View style={[styles.wrapper, style]}>
            <ProfilePicture img={img} style={{ marginRight: 16 }} />
            <View style={{ width: 155 }}>
                <Small title={title} style={{ marginBottom: 8 }} />
                <Xsmall title={text} color={Colors.grey} />
            </View>
        </View>
    )
}

export default PictureLeftTextRight

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16
    }
})
