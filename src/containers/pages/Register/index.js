import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StackActions } from '@react-navigation/native'
import { InputText, PrimaryButton } from '../../../components'
import { H1, H2, H3, H4, H5, P, Small } from '../../../components/atoms'
import Colors from '../../../utils/Colors'


const Register = ({ navigation }) => {
    return (
        <ScrollView style={styles.wrapper}>
            <H3 title="Daftar" style={{ marginTop: 40, color: Colors.monoBlack }} />
            <View >
                <InputText style={{ marginTop: 40 }} placeholder="Nama Lengkap" name="Nama Lengkap"></InputText>
                <InputText style={{ marginTop: 20 }} placeholder="Email" name="Email"></InputText>
                <InputText style={{ marginTop: 28 }} placeholder="Password" name="Password" secureTextEntry={true}></InputText>
                <InputText style={{ marginTop: 24 }} placeholder="Konfirmasi Password" name="Konfirmasi Password" secureTextEntry={true}></InputText>
                <InputText style={{ marginTop: 24 }} placeholder="Kota Tinggal" name="Kota Tinggal"></InputText>
            </View>
            <View style={{ paddingVertical: 40 }}>
                <PrimaryButton
                    onPress={() => {
                        AsyncStorage.setItem('isLogged', 'true')
                        navigation.dispatch(StackActions.replace('MainPages'))
                    }
                    }
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
