import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { PrimaryButton, H3, Small } from '../../../components'
import { Colors } from '../../../utils'
import UsersIcon from '../../../assets/icon/users.svg'
import ClockIcon from '../../../assets/icon/clock.svg'
import { HelpDetailContent, HelpRequests } from '../../templates'


const renderButton = (inisiator) => {
    if (!inisiator) {
        return (
            <PrimaryButton style={{ marginBottom: 40 }} title="Ajukan Permintaan" paddingVertical={15} />
        )
    }

}

const renderDetail = (inisiator) => {
    if (!inisiator) {
        return (
            <HelpDetailContent />
        )
    } else {
        return (
            <HelpRequests />
        )
    }

}

const HelpDetail = () => {

    const [inisiator] = useState(true)

    return (
        <ScrollView style={styles.wrapper}>
            <View style={styles.cover}>
                <Image style={{ width: '100%', height: '100%' }} source={require('../../../assets/picture/bantu-bangkit.png')} />
            </View>
            <View style={styles.content}>
                <PrimaryButton style={{ width: 75, height: 35, marginBottom: 24 }} title="Ekonomi" />
                <H3 title="Bantuan Tunai Untuk Golongan MBR" style={{ marginBottom: 16 }} />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                    <UsersIcon />
                    <Small style={{ marginLeft: 16 }} title="3 Orang" />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 40 }}>
                    <ClockIcon />
                    <Small style={{ marginLeft: 16 }} title="21 Hari lagi" />
                </View>
                {renderButton(inisiator)}
                {renderDetail(inisiator)}
            </View>
        </ScrollView>
    )
}

export default HelpDetail

const styles = StyleSheet.create({
    wrapper: {
        position: 'relative',
        flex: 1,
        height: '100%',
        backgroundColor: Colors.overlay
    },
    cover: {
        width: '100%',
        height: 230,
    },
    content: {
        marginTop: -50,
        padding: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: Colors.overlay
    }
})
