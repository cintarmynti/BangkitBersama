import React from 'react'
import { ScrollView } from 'react-native'
import Colors from '../../../utils/Colors'
import { HeaderLogin, LoginContent } from '../../../components'

const Login = ({ navigation }) => {

    return (
        <ScrollView backgroundColor={Colors.primary}>

            {/* HeaderLogin  */}
            <HeaderLogin />

            {/* LoginContent */}
            <LoginContent navigation={navigation} />

        </ScrollView>
    )
}

export default Login

