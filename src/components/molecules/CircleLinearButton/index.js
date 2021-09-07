import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from '../../../utils'
import { Sicon } from '../../../components'
import LinearGradient from 'react-native-linear-gradient';

const CircleLinearButton = ({ width = 60, height = 60, icon, style, paddingVertical = 8, onPress }) => {
    return (
        <TouchableOpacity style={[{ width: width, height: height, borderRadius: height / 2 }, { paddingVertical: paddingVertical, marginBottom: 40 }]} onPress={onPress}>
            <LinearGradient style={[{ width: width, height: height, borderRadius: height / 2 }, styles.wrapper, style]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[Colors.background, Colors.smoke]}>
                <Sicon img={icon} width={15} height={27} style={{ resizeMode: 'cover' }} />
            </LinearGradient>
        </TouchableOpacity>
    )

}

export default CircleLinearButton

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
