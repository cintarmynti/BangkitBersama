import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { Colors } from '../../../utils'
import { OnBoardIllustarion, H2, P } from '../../../components'

const OnBoard = ({ item, style }) => {
    return (
        <View style={[styles.wrapper, style]}>
            <OnBoardIllustarion img={item.image} />
            <View style={{ marginTop: 23, alignItems: 'center' }}>
                <H2 title={item.title} color={Colors.background} style={{ textAlign: 'center', marginBottom: 12 }} />
                <P title={item.text} color={Colors.background} style={{ textAlign: 'center' }} />
            </View>
        </View>
    )
}

export default OnBoard

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingTop: 40,
        width: Dimensions.get('window').width,
        alignItems: 'center',
    }
})
