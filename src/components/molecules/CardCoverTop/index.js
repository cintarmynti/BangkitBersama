import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { P, Xsmall } from '../../../components'
import { Colors } from '../../../utils'

const CardCoverTop = ({ onPress, img, title, price, date, percentage, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.wrapper, style]}>
            <View style={styles.coverWrapper}>
                <Image style={styles.imgCover} source={img} />
            </View>

            <View style={styles.contentWrapper}>
                <View>
                    <P title={title} style={{ fontWeight: '500', marginBottom: 8 }} />
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <Xsmall title={price} style={{ marginRight: 8 }} />
                        <Xsmall title={date} color={Colors.grey} />
                    </View>
                </View>
                <View>
                    <Xsmall title={percentage + "%"} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CardCoverTop

const styles = StyleSheet.create({
    wrapper: {
        width: 277,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        paddingBottom: 8
    },
    coverWrapper: {
        width: '100%',
        height: 130,
        marginBottom: 8
    },
    imgCover: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        resizeMode: 'cover'
    },
    contentWrapper:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 8,
        paddingRight: 16
    }
})
