import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconLeftTextRight } from '../../../components'

const ProfileMenuList = () => {
    return (
        <View>
            <TouchableOpacity style={{ marginBottom: 24 }}>
                <IconLeftTextRight
                    img={require('../../../assets/icon/message.png')}
                    title="Pesan" />
            </TouchableOpacity>

            <TouchableOpacity style={{ marginBottom: 24 }}>
                <IconLeftTextRight
                    img={require('../../../assets/icon/setting.png')}
                    title="Setelan Aplikasi" />
            </TouchableOpacity>

            <TouchableOpacity style={{ marginBottom: 24 }}>
                <IconLeftTextRight
                    img={require('../../../assets/icon/about.png')}
                    title="Tentang" />
            </TouchableOpacity>

            <TouchableOpacity style={{ marginBottom: 24 }}>
                <IconLeftTextRight
                    img={require('../../../assets/icon/rate.png')}
                    title="Beri Rating" />
            </TouchableOpacity>
        </View>
    )
}

export default ProfileMenuList

