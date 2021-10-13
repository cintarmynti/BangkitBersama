import React, { useState, useEffect } from 'react'
import { Image, ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native'
import { PrimaryButton, H3, Small,ProfilePicture } from '../../../components'
import { DetailHelpTabView } from '../../templates'
import { Colors, Async, CountDiffDate } from '../../../utils'
import ChatIcon from '../../../assets/icon/chat-2.svg'
import UsersIcon from '../../../assets/icon/users.svg'
import ClockIcon from '../../../assets/icon/clock.svg'
import { HelpDetailContent } from '../../organisms'
import ArrowLeftIcon from '../../../assets/icon/arrow-left-white.svg'
import { useDispatch, useSelector } from 'react-redux'
import { SetHelpDetail } from '../../../config/redux/action'




const HelpDetail = ({ route, navigation }) => {

    const [inisiator, setInisiator] = useState(false)

    const dispatch = useDispatch();
    const HelpDetailReducer = useSelector(state => state.HelpDetail)

    useEffect( () => {
        Async.get('token')
                .then(res => {
                    dispatch(SetHelpDetail(route.params.help_id, res))
                })
            Async.get('user')
                .then(res => {
                   if(HelpDetailReducer.help.user_id == res.id){
                       setInisiator(true)
                   }
                })
    }, [])

    const renderButton = (inisiator) => {
    if (!inisiator) {
        return (
            <PrimaryButton style={{ marginBottom: 40 }} title="Ajukan Permintaan" paddingVertical={15} />
        )
    }

}
const renderChatButton = (inisiator) => {
    if (!inisiator) {
        return (
            <TouchableOpacity>
                <ChatIcon width={30} height={30} />
            </TouchableOpacity>
        )
    }

}

const renderDetail = (inisiator) => {
    if (!inisiator) {
        return (
            <HelpDetailContent  />
        )
    } else {
        return (
            <DetailHelpTabView />
        )
    }

}

    return (
        <ScrollView style={styles.wrapper}>
            <TouchableOpacity style={{ position: 'absolute', top: 30, left: 30, zIndex: 50 }} onPress={() => navigation.navigate('TawarBantuan')}>
                <ArrowLeftIcon />
            </TouchableOpacity>
            <View style={styles.cover}>
                <View style={styles.overlay}></View>
                <Image style={{width: '100%', height: '100%', resizeMode: 'cover'}} source={{ uri: HelpDetailReducer.help.photo }} />
            </View>
            <View style={styles.content}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <PrimaryButton style={{ width: 75, height: 35, marginBottom: 24 }} title={HelpDetailReducer.help.category.name} />
                    {renderChatButton(inisiator)}
                </View>
                <H3 title={HelpDetailReducer.help.name} style={{ marginBottom: 16 }} />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                    <UsersIcon />
                    <Small style={{ marginLeft: 16 }} title={HelpDetailReducer.help.quota + " Orang"} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 40 }}>
                    <ClockIcon />
                    <Small style={{ marginLeft: 16 }} title={CountDiffDate(HelpDetailReducer.help.end_date)+" Hari lagi"} />
                </View>
                {renderButton(inisiator)}
                {renderDetail(inisiator)}
            </View>
        </ScrollView >
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
        position: 'relative',
        width: '100%',
        height: 230,
        position: 'relative'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        opacity: 0.2,
        zIndex: 40
    },
    content: {
        marginTop: -50,
        padding: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: Colors.overlay,
        zIndex: 50
    }
})
