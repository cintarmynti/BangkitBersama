import React from 'react'
import { Image } from 'react-native'
import { Colors } from '../../../utils'

const DoubleCircle = ({ color = Colors.secondary, top, bottom, left, right, transform }) => {
    return (
        <Image style={[{
            tintColor: color,
            position: 'absolute',
            top: top,
            bottom: bottom,
            left: left,
            right: right,
        },
        {
            transform: transform
        }
        ]} source={require('../../../assets/shape/double-circle.png')} />
    )
}

export default DoubleCircle

