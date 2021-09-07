import React from 'react'
import { Image } from 'react-native'

const OnBoardIllustarion = ({ img }) => {
    return (
        <Image source={img} style={{ width: 351, height: 351, resizeMode: 'contain' }} />
    )
}

export default OnBoardIllustarion


