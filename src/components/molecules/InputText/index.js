import React from 'react'
import { View, TextInput } from 'react-native'
import { Colors } from '../../../utils'
import { P, Sicon } from '../../../components'

const InputText = ({ keyboardType = 'default', name, placeholder, secureTextEntry, style, icon, value, onChangeText }) => {
    {
        if (icon) {
            return (
                <View style={style}>
                    <P style={{ marginBottom: 10, color: Colors.darkGrey }} title={name} />
                    <TextInput keyboardType={keyboardType} secureTextEntry={secureTextEntry} style={{ backgroundColor: 'white', borderRadius: 15, height: 70, paddingLeft: 20, fontSize: 14, color: Colors.primary }} placeholder={placeholder} onChangeText={onChangeText} value={value} placeholderTextColor="#999999" >
                        <Sicon img={icon} width={15} height={15} style={{ marginRight: 8 }} />
                    </TextInput>
                </View>
            )
        } else {
            return (
                <View style={style}>
                    <P style={{ marginBottom: 10, color: Colors.darkGrey }} title={name} />
                    <TextInput keyboardType={keyboardType} secureTextEntry={secureTextEntry} style={{ backgroundColor: 'white', borderRadius: 15, height: 70, paddingLeft: 20, fontSize: 14, color: Colors.primary }} placeholder={placeholder} onChangeText={onChangeText} value={value} placeholderTextColor="#999999" ></TextInput>
                </View>
            )
        }

    }

}

export default InputText
