import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { P } from '../../../components'
import DangerIcon from '../../../assets/icon/alert-danger.svg'
import CrossIcon from '../../../assets/icon/cross.svg'

const AlertDanger = ({ text, set, onPress }) => {
    if (set) {
        return (
            <View style={styles.wrapper}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <DangerIcon style={{ marginRight: 16 }} />
                    <P color="#F03D3E" title={text} />
                </View>
                <TouchableOpacity onPress={onPress}>
                    <CrossIcon />
                </TouchableOpacity>
            </View>
        )
    } else {
        return (<></>)
    }
}

export default AlertDanger

const styles = StyleSheet.create({
    wrapper: {
        height: 48,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(240, 61, 62, 0.1)',
        alignItems: 'center',
        paddingHorizontal: 24,
        borderRadius: 8
    }
})