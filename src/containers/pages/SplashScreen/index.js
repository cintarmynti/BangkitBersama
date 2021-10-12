import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { StackActions } from '@react-navigation/native'
import { Colors, Async } from '../../../utils'
import { AppLogo, H2, DoubleCircle } from '../../../components'

const SplashScreen = ({ navigation }) => {
    const [nextPage, setNextPage] = useState('')

    useEffect(() => {
        Async.get('isFirtsLaunch')
            .then(res => {
                if (!res) {
                    setNextPage('Welcome')
                } else {
                    Async.get('isLogged')
                        .then(res => {
                            if (res) {
                                setNextPage('MainPages')
                            } else {
                                setNextPage('Auth')
                            }
                        })
                }
            })

        setTimeout(() => {
            navigation.dispatch(StackActions.replace(nextPage))
        }, 1000)
    })

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
