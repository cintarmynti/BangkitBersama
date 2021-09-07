import React from 'react'
import { Image } from 'react-native'

const Sicon = ({ img, width = 10, height = 10, style }) => {
    return (
        <Image source={img} style={[{ width: width, height: height, resizeMode: 'contain' }, style]} />
    )
}

export default Sicon

