import React from 'react'
import { StyleSheet, View } from 'react-native'
import Colors from '../../../utils/Colors'
import HeaderLogin from '../../../components/molecules/HeaderLogin'
import LoginContent from '../../../components/molecules/LoginContent'


const Login = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }} backgroundColor={Colors.primary}>

            {/* HeaderLogin  */}
            <HeaderLogin />

            {/* LoginContent */}
            <LoginContent navigation={navigation} />

        </View>
    )
}

export default Login

const styles = StyleSheet.create({})
