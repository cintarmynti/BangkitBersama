import React from 'react'
import { Image } from 'react-native'

const ProfilePicture = ({ img, widht = 55, height = 55 }) => {
    return (
        <Image style={{ width: widht, height: height }}
            source={img} />
    )
}

export default ProfilePicture
