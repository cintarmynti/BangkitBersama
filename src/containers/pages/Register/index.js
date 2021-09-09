import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StackActions } from '@react-navigation/native'
import { InputText, PrimaryButton } from '../../../components'

const Register = ({ navigation }) => {
    return (
        <ScrollView style={styles.wrapper}>
            <Text style={styles.title}>Daftar</Text>
            <View >
                <InputText style={{ marginTop: 15 }} placeholder="Nama Lengkap" name="Nama Lengkap"></InputText>
                <InputText style={{ marginTop: 15 }} placeholder="Email" name="Email"></InputText>
                <InputText style={{ marginTop: 15 }} placeholder="Password" name="Password" secureTextEntry={true}></InputText>
                <InputText style={{ marginTop: 15 }} placeholder="Konfirmasi Password" name="Konfirmasi Password" secureTextEntry={true}></InputText>
                <InputText style={{ marginTop: 15 }} placeholder="Kota Tinggal" name="Kota Tinggal"></InputText>
            </View>
            <View style={{ paddingVertical: 40 }}>
                <PrimaryButton
                    onPress={() => {
                        AsyncStorage.setItem('isLogged', 'true')
                        navigation.dispatch(StackActions.replace('MainPages'))
                    }
                    }
                    title="Daftar" style={{ marginTop: 30, height: 59 }} ></PrimaryButton>
                <View style={{ flexDirection: 'row', alignSelf: 'center', paddingTop: 5, marginTop: 24 }}>
                    <Text style={{ marginRight: 5 }}>Sudah Punya akun?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{ fontFamily: 'Nunito-Bold' }}>Masuk</Text>
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
    },
    title: {
        marginTop: 20,
        fontSize: 28,
        fontFamily: 'Nunito-Bold'
    }
})
