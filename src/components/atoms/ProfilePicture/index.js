import React from 'react'
import { Image } from 'react-native'

const ProfilePicture = ({ img, width = 55, height = 55, style }) => {

    return (
        <Image style={[{ width: width, height: height, borderRadius: height / 2 }, style]}

            source={{ uri: img }} />
    )
}

export default ProfilePicture
