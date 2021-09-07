import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Colors } from '../../../utils'
import { HeaderProfile, H3, OutlineButton } from '../../../components'
import { ProfileMenuList } from '../../organisms'

const Profile = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
            <HeaderProfile />
            <View style={styles.contentWrapper}>
                <H3 title="Pengaturan" style={{ marginBottom: 32 }} />
                <ProfileMenuList />
                <H3 title="Akun" style={{ marginBottom: 32 }} />
                <OutlineButton title="Keluar" paddingVertical={20} />
            </View>
        </ScrollView>
    )
}

export default Profile

const styles = StyleSheet.create({
    wrapper: {
        overflow: 'hidden',
        backgroundColor: Colors.primary
    },
    contentWrapper: {
        height: '80%',
        overflow: 'hidden',
        backgroundColor: Colors.overlay,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 40,
        paddingHorizontal: 30
    }
})
