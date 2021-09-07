import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ProfilePicture, H3, SecondaryButton } from '../../../components'
import { Colors } from '../../../utils'

const HeaderProfile = () => {
    return (
        <View style={styles.wrapper}>
            <ProfilePicture widht={100} height={100} img={require('../../../assets/logo/bangkitbersama.png')} />
            <View style={styles.rightWrapper}>
                <H3 title="Arya Rizky" color={Colors.background} style={{ marginBottom: 8 }} />
                <SecondaryButton title="Edit Profile" />
            </View>
        </View>
    )
}

export default HeaderProfile

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 30,
        paddingVertical: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightWrapper: {
        marginLeft: 40
    }
})
