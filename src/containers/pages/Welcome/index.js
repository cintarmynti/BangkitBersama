import React from 'react'
import { StyleSheet, View } from 'react-native'
import { StackActions } from '@react-navigation/native'
import { DoubleCircle, AppLogo, H2, P, LinearButton } from '../../../components'
import { Colors } from '../../../utils'

const Welcome = ({ navigation }) => {

    return (
        <View style={styles.wrapper}>
            <DoubleCircle top={-200} left={-250} />
            <AppLogo width={100} height={100} style={{
                position: 'absolute',
                right: 30
            }} />
            <View style={styles.textWrapper}>
                <H2 title={'Selamat \nDatang'} color={Colors.background} style={{ marginBottom: 8 }} />
                <P title={'Aplikasi untuk berbagi, informasi \nakurat, dan inisiatif galang dana. \nMari menuju Indonesia bangkit!'} color={Colors.background} style={{ marginBottom: 48 }} />
                <LinearButton nextLabel={false} onPress={() => { navigation.dispatch(StackActions.replace('OnBoarding')) }} title={'Mulai'} width={147} paddingVertical={15} />
            </View>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    wrapper: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
    },
    textWrapper: {
        position: 'absolute',
        bottom: 40,
        left: 30
    }
})
