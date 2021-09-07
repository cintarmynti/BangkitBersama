import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { PictureLeftTextRight, PrimaryButton } from '../../../components'
import { Colors } from '../../../utils'

const CardTwoSide = ({ style, imgTop, titleTop, textTop, imgBottom, titleBottom, textBottom, onPress, onPressChat }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.wrapper, style]}>
            <PictureLeftTextRight
                img={imgTop}
                title={titleTop}
                text={textTop}
                style={{
                    paddingBottom: 22,
                    borderBottomColor: Colors.primary,
                    borderBottomWidth: 1,
                }} />
            <PictureLeftTextRight
                img={imgBottom}
                title={titleBottom}
                text={textBottom}
            />
            <PrimaryButton onPress={onPressChat} title="Hubungi Sekarang" icon={require('../../../assets/icon/chat.png')} />
        </TouchableOpacity>
    )
}

export default CardTwoSide

const styles = StyleSheet.create({
    wrapper: {
        width: 277,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 16,
        marginRight: 20
    }
})
