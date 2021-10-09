import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { ProfilePicture, H3, SecondaryButton } from '../../../components'
import { Colors, Async } from '../../../utils'
import { useNavigation } from '@react-navigation/native';


const HeaderProfile = () => {
    const navigation = useNavigation();
    const [user, setUser] = useState({})

    useEffect(() => {
        Async.get('user')
            .then(res => {
                setUser(res)
            })
    })

    return (
        <View style={styles.wrapper}>
            <ProfilePicture widht={100} height={100} img={user.photo} />
            <View style={styles.rightWrapper}>
                <H3 title={user.username} color={Colors.background} style={{ marginBottom: 8 }} />
                <SecondaryButton onPress={() => navigation.navigate('EditProfile')} title="Edit Profile" />
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
