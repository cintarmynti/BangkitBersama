import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StackActions } from '@react-navigation/native'
import PrimaryButton from '../PrimaryButton'
import InputText from '../InputText'
import { Colors } from '../../../utils'

const LoginContent = ({ navigation }) => {
    return (
        <View style={{ position: 'relative', flex: 1, borderTopRightRadius: 30, borderTopLeftRadius: 30, paddingHorizontal: 30, paddingTop: 40 }} backgroundColor={Colors.overlay}>
            <Text style={{ fontSize: 28, fontWeight: 'normal', fontFamily: 'Nunito-Bold' }} color={Colors.monoBlack}>Masuk</Text>
            <InputText style={{ paddingTop: 24 }} placeholder="Email" name="Email" />
            <InputText style={{ paddingTop: 24 }} secureTextEntry={true} placeholder="Password" name="Password" />

            <PrimaryButton
                onPress={() => {
                    AsyncStorage.setItem('isLogged', 'true')
                    navigation.dispatch(StackActions.replace('MainPages'))
                }} title="Masuk" style={{ marginTop: 140, height: 59, marginBottom: 24 }} ></PrimaryButton>
            <View style={{ flexDirection: 'row', alignSelf: 'center', paddingTop: 5 }}>
                <Text style={{ marginRight: 5 }}>Belum punya akun?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={{ fontFamily: 'Nunito-Bold' }}>Daftar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginContent
