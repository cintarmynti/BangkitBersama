import React from 'react'
import { Image } from 'react-native'

const TabIcon = ({ img, width = 24, height = 24, tintColor }) => {
    return (
        <Image style={{
            width: width,
            height: height,
            resizeMode: 'contain',
            tintColor: tintColor
        }} source={img} />
    )
}

export default TabIcon
