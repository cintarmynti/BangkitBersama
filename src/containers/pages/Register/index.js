import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import InputText from '../../../components/molecules/InputText'
import PrimaryButton from '../../../components/molecules/PrimaryButton'

const Register = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Daftar</Text>
            <View >
                <InputText style={{marginTop:15}} placeholder="Nama Lengkap" name="Nama Lengkap"></InputText>
                <InputText style={{marginTop:15}} placeholder="Email" name="Email"></InputText>
                <InputText style={{marginTop:15}} placeholder="Password" name="Password" secureTextEntry={true}></InputText>
                <InputText style={{marginTop:15}} placeholder="Konfirmasi Password" name="Konfirmasi Password" secureTextEntry={true}></InputText>
                <InputText style={{marginTop:15}} placeholder="Kota Tinggal" name="Kota Tinggal"></InputText>
            </View>
            <PrimaryButton title="Daftar" style={{marginTop:30, height:59}} ></PrimaryButton>
            <View style={{flexDirection:'row', alignSelf:'center', paddingTop:5}}>
                <Text>Sudah Punya akun?</Text><Text style={{fontFamily:'Nunito-Bold'}}>Masuk</Text>
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 20,
    },
    title:{
        marginTop:20,
        fontSize:28,
        fontFamily:'Nunito-Bold'
    }
})
