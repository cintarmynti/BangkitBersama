import React from 'react'
import { Image } from 'react-native'
import { Colors } from '../../../utils'

const DoubleCircle = ({ color = Colors.primary, top = 0, bottom = 0, left = 0, right = 0 }) => {
    return (
        <Image style={{
            tintColor: color,
            position: 'absolute',
            top: top,
            bottom: bottom,
            left: left,
            right: right,
        }} source={require('../../../assets/shape/double-circle.png')} />
    )
}

export default DoubleCircle

