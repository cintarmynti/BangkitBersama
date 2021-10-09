import React from 'react'
import { StyleSheet, View } from 'react-native'
import { P } from '../..'
import WarningIcon from '../../../assets/icon/bell.svg'

const AlertWarning = ({ text }) => {
    return (
        <View style={styles.wrapper}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <WarningIcon style={{ marginRight: 16 }} />
                <P color="#D84910" title={text} />
            </View>
        </View>
    )
}

export default AlertWarning

const styles = StyleSheet.create({
    wrapper: {
        height: 48,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(216, 73, 16, 0.1)',
        alignItems: 'center',
        paddingHorizontal: 24,
        borderRadius: 8
    }
})