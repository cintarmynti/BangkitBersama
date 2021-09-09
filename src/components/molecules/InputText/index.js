import React from 'react'
import { View, Text, TextInput } from 'react-native'

const InputText = ({ name, placeholder, secureTextEntry, style }) => {
    return (

        <View>
            <View style={style}>
                <Text style={{ fontFamily: 'Nunito-ExtraBold', fontSize: 16, paddingBottom: 10 }}>{name}</Text>
                <TextInput secureTextEntry={secureTextEntry} style={{ backgroundColor: 'white', borderRadius: 15, height: 70, paddingLeft: 20, fontSize: 14 }} placeholder={placeholder} placeholderTextColor="#999999" ></TextInput>
            </View>
        </View>

    )
}

export default InputText
