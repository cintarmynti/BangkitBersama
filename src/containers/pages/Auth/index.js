import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Colors, Async } from '../../../utils'
import { OnBoardIllustarion, LinearButton, OutlineButton } from '../../../components'

const Auth = ({ navigation }) => {

    useEffect(() => {
        Async.remove('user')
        Async.remove('token')
    })

    return (
        <View style={styles.wrapper}>
            <OnBoardIllustarion img={require('../../../assets/illustrations/onboard-5.png')} />
            <View style={styles.buttonWrapper}>
                <LinearButton
                    onPress={() => navigation.navigate('Login')}
                    style={{ marginBottom: 10 }}
                    nextLabel={false}
                    title="Masuk" width={351}
                    color={Colors.primary} paddingVertical={15} />
                <OutlineButton
                    onPress={() => navigation.navigate('Register')}
                    color={Colors.background}
                    borderColor={Colors.background}
                    title="Daftar" paddingVertical={15}
                />
            </View>
        </View>
    )
}

export default Auth

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        position: 'relative',
        paddingTop: 40,
        alignItems: 'center',
        backgroundColor: Colors.primary
    },
    buttonWrapper: {
        position: 'absolute',
        bottom: 40
    }
})
