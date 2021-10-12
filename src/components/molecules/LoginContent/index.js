import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PrimaryButton from '../PrimaryButton'
import InputText from '../InputText'
import { Small, AlertDanger } from '../../../components'
import { Colors } from '../../../utils'
import { useDispatch, useSelector } from 'react-redux'
import { SetFormLogin, HandleLogin } from '../../../config/redux/action'

const LoginContent = ({ navigation }) => {
    const LoginReducer = useSelector(state => state.Login)
    const dispatch = useDispatch()

    const changeInputValue = (value, input) => {
        dispatch(SetFormLogin(value, input))
    }

    const submitLogin = () => {
        dispatch({ type: 'SET_ALERT_LOGIN', value: false })
        for (let item in LoginReducer.form) {
            if (!LoginReducer.form[item]) {
                dispatch({ type: 'SET_ALERT_TEXT_LOGIN', value: 'Semua kolom wajib diisi' })
                dispatch({ type: 'SET_ALERT_LOGIN', value: true })
                return;
            }
        }

        dispatch(HandleLogin(LoginReducer.form, navigation))
    }

    return (
        <View style={{ position: 'relative', flex: 1, borderTopRightRadius: 30, borderTopLeftRadius: 30, paddingHorizontal: 30, paddingTop: 40, paddingBottom: '40%' }} backgroundColor={Colors.overlay}>
            <Text style={{ marginBottom: 10, fontSize: 28, fontWeight: 'normal', fontFamily: 'Nunito-Bold' }} color={Colors.monoBlack}>Masuk</Text>
            <AlertDanger text={LoginReducer.alertText} set={LoginReducer.setAlert} onPress={() => { dispatch({ type: 'SET_ALERT_LOGIN', value: false }) }} />
            <InputText value={LoginReducer.form.email} onChangeText={value => changeInputValue(value, 'email')} style={{ paddingTop: 24 }} placeholder="Email" name="Email" />
            <InputText value={LoginReducer.form.password} onChangeText={value => changeInputValue(value, 'password')} style={{ paddingTop: 24 }} secureTextEntry={true} placeholder="Password" name="Password" />

            <PrimaryButton
                onPress={() => {
                    submitLogin()
                }} title="Masuk" style={{ marginTop: 112, height: 59, marginBottom: 24, windth: 351 }} ></PrimaryButton>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                <Small style={{ marginRight: 5, color: Colors.darkGrey }} title="Belum punya akun?" />
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Small style={{ fontFamily: 'Nunito-Bold', fontWeight: 'bold', color: Colors.darkGrey }} title="Daftar" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginContent
