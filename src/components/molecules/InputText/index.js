import React from 'react'
import { View, Text, TextInput } from 'react-native'
import Colors from '../../../utils/Colors'
import {H1, H2, H3, H4, H5, P} from '../../../components/atoms'

const InputText = ({ name, placeholder, secureTextEntry, style }) => {
    return (

        <View>
            <View style={style}>
                <P style={{marginBottom:10, color:Colors.darkGrey}} title={name}/>
                <TextInput secureTextEntry={secureTextEntry} style={{ backgroundColor: 'white', borderRadius: 15, height: 70, paddingLeft: 20, fontSize: 14 }} placeholder={placeholder} placeholderTextColor="#999999" ></TextInput>
            </View>
        </View>

    )
}

export default InputText
