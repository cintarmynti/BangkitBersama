import React from 'react'
import { Image } from 'react-native'

const AppLogo = ({ width = 150, height = 150, style }) => {
    return (
        <Image style={[{
            width: width,
            height: height
        }, style]} source={require('../../../assets/logo/bangkitbersama.png')} />
    )
}

export default AppLogo
