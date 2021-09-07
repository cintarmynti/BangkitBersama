import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from '../../../utils'
import { P, Sicon } from '../../../components'

const PrimaryButton = ({ title, style, icon, paddingVertical = 8, onPress }) => {
    {
        if (icon) {
            return (
                <TouchableOpacity onPress={onPress} style={[styles.wrapper, { paddingVertical: paddingVertical, }, style]}>
                    <Sicon img={icon} width={15} height={15} style={{ marginRight: 8 }} />
                    <P title={title} color="#FFFFFF" />
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity onPress={onPress} style={[styles.wrapper, { paddingVertical: paddingVertical, }, style]}>
                    <P title={title} color="#FFFFFF" />
                </TouchableOpacity>
            )
        }

    }
}

export default PrimaryButton

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    }
})
