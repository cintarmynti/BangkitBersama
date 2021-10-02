import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
import { InputText, PrimaryButton, H3, Small, AlertDanger } from '../../../components'
import { Colors, ValidateEmail } from '../../../utils'
import { useDispatch, useSelector } from 'react-redux'
import { SetFormRegister, HandleRegister } from '../../../config/redux/action'

const Register = ({ navigation }) => {

    const RegisterReducer = useSelector(state => state.Register)
    const dispatch = useDispatch()

    const changeInputValue = (value, input) => {
        dispatch(SetFormRegister(value, input))
    }

    const submitRegister = () => {
        dispatch({ type: 'SET_ALERT_REGISTER', value: false })
        for (let item in RegisterReducer.form) {
            if (!RegisterReducer.form[item]) {
                dispatch({ type: 'SET_ALERT_TEXT_REGISTER', value: 'Semua kolom wajib diisi' })
                dispatch({ type: 'SET_ALERT_REGISTER', value: true })
                return;
            }
        }
        if (!ValidateEmail(RegisterReducer.form.email)) {
            dispatch({ type: 'SET_ALERT_TEXT_REGISTER', value: 'Email tidak valid' })
            dispatch({ type: 'SET_ALERT_REGISTER', value: true })

            return;
        }

        if (RegisterReducer.form.password != RegisterReducer.form.c_password) {
            dispatch({ type: 'SET_ALERT_TEXT_REGISTER', value: 'Password tidak cocok' })
            dispatch({ type: 'SET_ALERT_REGISTER', value: true })

            return;
        }

        dispatch(HandleRegister(RegisterReducer.form, navigation))
    }

    return (
        <ScrollView style={styles.wrapper}>
            <H3 title="Daftar" style={{ marginTop: 40, marginBottom: 10, color: Colors.monoBlack }} />
            <AlertDanger text={RegisterReducer.alertText} set={RegisterReducer.setAlert} onPress={() => { dispatch({ type: 'SET_ALERT_REGISTER', value: false }) }} />
            <View >
                <InputText value={RegisterReducer.form.name} onChangeText={value => changeInputValue(value, 'name')} style={{ marginTop: 40 }} placeholder="Nama Lengkap" name="Nama Lengkap"></InputText>
                <InputText value={RegisterReducer.form.username} onChangeText={value => changeInputValue(value, 'username')} style={{ marginTop: 28 }} placeholder="Nama Pengguna" name="Nama Pengguna"></InputText>
                <InputText value={RegisterReducer.form.email} onChangeText={value => changeInputValue(value, 'email')} style={{ marginTop: 20 }} placeholder="Email" name="Email"></InputText>
                <InputText value={RegisterReducer.form.password} onChangeText={value => changeInputValue(value, 'password')} style={{ marginTop: 28 }} placeholder="Password" name="Password" secureTextEntry={true}></InputText>
                <InputText value={RegisterReducer.form.c_password} onChangeText={value => changeInputValue(value, 'c_password')} style={{ marginTop: 24 }} placeholder="Konfirmasi Password" name="Konfirmasi Password" secureTextEntry={true}></InputText>
                <InputText value={RegisterReducer.form.address} onChangeText={value => changeInputValue(value, 'address')} style={{ marginTop: 24 }} placeholder="Kota Tinggal" name="Kota Tinggal"></InputText>
            </View>
            <View style={{ paddingVertical: 40 }}>
                <PrimaryButton
                    onPress={() => submitRegister()}
                    title="Daftar" style={{ marginTop: 30, height: 59 }} />
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 24 }}>
                    <Small title='Sudah punya akun?' style={{ marginRight: 5, color: Colors.monoBlack }} />
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Small style={{ fontFamily: 'Nunito-Bold', fontWeight: 'bold', color: Colors.monoBlack }} title="Masuk" />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Register

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 20,
    }
})
