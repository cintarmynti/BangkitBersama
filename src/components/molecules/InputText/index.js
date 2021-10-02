import React from 'react'
import { View, TextInput } from 'react-native'
import Colors from '../../../utils/Colors'
import { P, Sicon } from '../../../components'

const InputText = ({ name, placeholder, secureTextEntry, style, icon }) => {
    {
        if (icon) {
            return (
                <View style={style}>
                    <P style={{ marginBottom: 10, color: Colors.darkGrey }} title={name} />
                    <TextInput secureTextEntry={secureTextEntry} style={{ backgroundColor: 'white', borderRadius: 15, height: 70, paddingLeft: 20, fontSize: 14 }} placeholder={placeholder} placeholderTextColor="#999999" >
                        <Sicon img={icon} width={15} height={15} style={{ marginRight: 8 }} />
                    </TextInput>
                </View>
            )
        } else {
            return (
                <View style={style}>
                    <P style={{ marginBottom: 10, color: Colors.darkGrey }} title={name} />
                    <TextInput secureTextEntry={secureTextEntry} style={{ backgroundColor: 'white', borderRadius: 15, height: 70, paddingLeft: 20, fontSize: 14 }} placeholder={placeholder} placeholderTextColor="#999999" ></TextInput>
                </View>
            )
        }

    }

}

export default InputText
