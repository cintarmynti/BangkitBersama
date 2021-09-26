import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { IconLeftTextRight } from '../../../components'
import MessageIcon from '../../../assets/icon/message.svg'
import SettingIcon from '../../../assets/icon/setting.svg'
import AboutIcon from '../../../assets/icon/about.svg'
import RateIcon from '../../../assets/icon/rate.svg'

const ProfileMenuList = () => {
    return (
        <View>
            <TouchableOpacity style={{ marginBottom: 24 }}>
                <IconLeftTextRight
                    icon={<MessageIcon />}
                    title="Pesan" />
            </TouchableOpacity>

            <TouchableOpacity style={{ marginBottom: 24 }}>
                <IconLeftTextRight
                    icon={<SettingIcon />}
                    title="Setelan Aplikasi" />
            </TouchableOpacity>

            <TouchableOpacity style={{ marginBottom: 24 }}>
                <IconLeftTextRight
                    icon={<AboutIcon />}
                    title="Tentang" />
            </TouchableOpacity>

            <TouchableOpacity style={{ marginBottom: 24 }}>
                <IconLeftTextRight
                    icon={<RateIcon />}
                    title="Beri Rating" />
            </TouchableOpacity>
        </View>
    )
}

export default ProfileMenuList

