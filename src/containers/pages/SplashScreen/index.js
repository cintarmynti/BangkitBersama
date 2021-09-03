import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../../utils'
import { AppLogo, H2, DoubleCircle } from '../../../components'


const SplashScreen = () => {
    return (
        <View style={styles.wrapper}>
            <DoubleCircle top={-300} left={-250} />
            <DoubleCircle bottom={-280} right={-250} transform={[{ rotate: "180deg" }]} />
            <AppLogo />
            <H2 title="BangkitBersama" color="white" style={{ marginTop: 25 }} />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
    }
})
