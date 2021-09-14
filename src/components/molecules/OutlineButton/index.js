import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from '../../../utils'
import { P, Sicon } from '../../../components'

const OutlineButton = ({ title, style, icon, paddingVertical = 8, onPress, borderColor = Colors.primary, color = Colors.primary }) => {
    {
        if (icon) {
            return (
                <TouchableOpacity onPress={onPress} style={[styles.wrapper, { paddingVertical: paddingVertical, borderColor: borderColor }, style]}>
                    <Sicon img={icon} width={15} height={15} style={{ marginRight: 8 }} />
                    <P style title={title} color={color} />
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity onPress={onPress} style={[styles.wrapper, { paddingVertical: paddingVertical, borderColor: borderColor }, style]}>
                    <P style title={title} color={color} />
                </TouchableOpacity>
            )
        }

    }
}

export default OutlineButton

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    }
})
