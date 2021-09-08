import React from 'react'
import { View, Text } from 'react-native'
import PrimaryButton from '../PrimaryButton'
import InputText from '../InputText'
import Colors from '../../../utils/Colors'

const LoginContent = () => {
    return (
        <View style={{flex:1, borderTopRightRadius:30, borderTopLeftRadius:30, paddingHorizontal:30,paddingTop:40}} backgroundColor={Colors.overlay}>
            <Text style={{fontSize:28, fontWeight:'normal', fontFamily:'Nunito-Bold'}} color={Colors.monoBlack}>Masuk</Text>
                <InputText style={{paddingTop:24}} placeholder="Email" name="Email"/>
                <InputText style={{paddingTop:24}} secureTextEntry={true} placeholder="Password" name="Password"/>
            <PrimaryButton title="Masuk" style={{marginTop:140, height:59}} ></PrimaryButton>
            <View style={{flexDirection:'row', alignSelf:'center', paddingTop:5}}>
                <Text>Belum punya akun?</Text><Text style={{fontFamily:'Nunito-Bold'}}>Daftar</Text>
            </View>

    </View>
    )
}

export default LoginContent
