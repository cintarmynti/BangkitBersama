import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Colors from '../../../utils/Colors'
import HeaderLogin from '../../../components/molecules/HeaderLogin'
import LoginContent from '../../../components/molecules/LoginContent'

const Login = ({ navigation }) => {

    return (
        <ScrollView style={{ flex: 1 }} backgroundColor={Colors.primary}>

            {/* HeaderLogin  */}
            <HeaderLogin />

            {/* LoginContent */}
            <LoginContent navigation={navigation} />

        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({})
