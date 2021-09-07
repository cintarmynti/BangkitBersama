import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from '../../../utils'
import { P, Sicon } from '../..'
import LinearGradient from 'react-native-linear-gradient';

const LinearButton = ({ width, title, style, icon, paddingVertical = 8, onPress, color = '#252525' }) => {
    {
        if (icon) {
            return (
                <TouchableOpacity style={[{ width: width }, { paddingVertical: paddingVertical, }]} onPress={onPress}>
                    <LinearGradient style={[styles.wrapper, style]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[Colors.background, Colors.smoke]}>
                        <Sicon img={icon} width={15} height={15} style={{ marginRight: 8 }} />
                        <P title={title} color={color} />
                    </LinearGradient>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity style={[{ width: width }, { paddingVertical: paddingVertical, }]} onPress={onPress} >
                    <LinearGradient style={[styles.wrapper, { paddingVertical: paddingVertical, }, style]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[Colors.background, Colors.smoke]}>
                        <P title={title} color={color} />
                    </LinearGradient>
                </TouchableOpacity>
            )
        }

    }
}

export default LinearButton

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    }
})
