import React from 'react'
import { Image } from 'react-native'

const ProfilePicture = ({ img, widht = 55, height = 55, style }) => {
    return (
        <Image style={[{ width: widht, height: height, borderRadius: height / 2 }, style]}
            source={img} />
    )
}

export default ProfilePicture
