import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { H4 } from '../../../components'
import { HelpDetailContent, HelpRequests } from '../../organisms'
import { Colors } from '../../../utils'

const renderContent = (view) => {
    switch (view) {
        case 'detail':
            return (<HelpDetailContent />)
        case 'permintaan':
            return (<HelpRequests />)
        default:
            return (<HelpDetailContent />)
    }
}

const DetailHelpTabView = () => {

    const [view, setView] = useState('detail')

    return (
        <View>
            <View style={styles.tabButtonWrapper}>
                <TouchableOpacity style={{ width: '60%' }} onPress={() => setView('detail')}>
                    <H4
                        style={{ paddingBottom: 10, textAlign: 'center' }}
                        color={(view != 'detail') ? Colors.grey : Colors.primary}
                        title="Detail" />
                    <View style={(view == 'detail') ? styles.tabActive : ''}></View>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '60%' }} onPress={() => setView('permintaan')}>
                    <H4
                        style={{ paddingBottom: 10, textAlign: 'center' }}
                        color={(view != 'permintaan') ? Colors.grey : Colors.primary}
                        title="Permintaan" />
                    <View style={(view == 'permintaan') ? styles.tabActive : ''}></View>
                </TouchableOpacity>
            </View>
            {renderContent(view)}
        </View>
    )
}

export default DetailHelpTabView

const styles = StyleSheet.create({
    tabButtonWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 35,
        marginBottom: 50
    },
    tabActive: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.primary
    }
})
