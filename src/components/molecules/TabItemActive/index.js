import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Colors } from '../../../utils'
import { TabIcon, P } from '../../../components'

const TabItemActive = ({ img, title, textLeft }) => {
    if (textLeft) {
        return (
            <View style={styles.wrapper}>
                <P title={title} style={{ marginRight: 8, fontWeight: 'bold' }} />
                <TabIcon img={img} tintColor={Colors.primary} />
            </View>
        )
    } else {
        return (
            <View style={styles.wrapper}>
                <TabIcon img={img} tintColor={Colors.primary} />
                <P title={title} style={{ marginLeft: 8, fontWeight: 'bold' }} />
            </View>
        )
    }

}

export default TabItemActive

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        paddingHorizontal: 24,
        backgroundColor: Colors.background,
        alignSelf: 'flex-end',
        alignItems: 'center',
        height: 48,
        borderRadius: 48 / 2
    }
})
