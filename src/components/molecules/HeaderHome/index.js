import React from 'react'
import { StyleSheet, View } from 'react-native'
import { H3, P, ProfilePicture } from '../../../components'
import { Colors } from '../../../utils'

const HeaderHome = () => {
    return (
        <View style={styles.wrapper}>
            <View>
                <H3 title="Halo, Aryak" color={Colors.background} />
                <P title="Mari bangkit bersama hari ini!" color={Colors.background} />
            </View>
            <ProfilePicture img={require('../../../assets/logo/bangkitbersama.png')} />
        </View>
    )
}

export default HeaderHome

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 30,
        paddingVertical: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})
