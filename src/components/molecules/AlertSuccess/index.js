import React from 'react'
import { StyleSheet, View } from 'react-native'
import { P } from '../..'
import SuccessIcon from '../../../assets/icon/success.svg'

const AlertSuccess = ({ text }) => {
    return (
        <View style={styles.wrapper}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <SuccessIcon style={{ marginRight: 16 }} />
                <P color="#007B40" title={text} />
            </View>
        </View>
    )
}

export default AlertSuccess

const styles = StyleSheet.create({
    wrapper: {
        height: 48,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0, 123, 64, 0.1)',
        alignItems: 'center',
        paddingHorizontal: 24,
        borderRadius: 8
    }
})