import React from 'react'
import { Image } from 'react-native'

const CategoryIcon = ({ img }) => {
    return (
        <Image source={img} style={{ width: 65, width: 65, resizeMode: 'contain' }} />
    )
}

export default CategoryIcon
