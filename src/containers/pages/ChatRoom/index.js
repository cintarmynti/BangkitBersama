import React from 'react'
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native'
import {ProfilePicture, H4, P} from '../../../components'
import Colors from '../../../utils/Colors'

const ChatRoom = () => {
    return (
        <View style={{flex:1}}>
            <View style={{backgroundColor:'white', borderBottomRightRadius:30, borderBottomLeftRadius:30, height:89, justifyContent:'center'}}>
                <View style={{flexDirection:'row', alignItems:'center', paddingHorizontal:30}}>
                    <Image source={require('../../../assets/icon/arrow-left.png')} />
                    <ProfilePicture img={require('../../../assets/picture/tirta.png')}  style={{marginLeft:24}} />
                    <H4 title="Arya Rizky" style={{fontFamily:'Nunito-Bold'}} style={{marginLeft:24}} />
                    <Image source={require('../../../assets/icon/verified.png')} style={{marginLeft:24}}  />
                </View>
            </View>
            <ScrollView style={{backgroundColor:Colors.background, flex:1 }}>
                <View style={styles.whiteBuble}>
                    <P title="hi, ada yang bisa saya bantu?" style={{padding:10}} />
                </View>
                <View style={styles.greenBuble}>
                    <Text style={styles.textBubleGreen}>Saya perlu uang buat spp anak saya pak</Text>
                </View>
                <View style={styles.whiteBuble}>
                    <P title="Baik pak / bu akan segera saya setujui" style={{padding:10}} />
                </View>
                <View style={styles.greenBuble}>
                    <Text style={styles.textBubleGreen}>Terima kasih banyak pak</Text>
                </View>
                <View style={styles.whiteBuble}>
                    <P title="Ok send rekening fast" style={{padding:10}} />
                </View>
            </ScrollView>
            <View style={{backgroundColor: Colors.background, height:89, paddingHorizontal:30, flexDirection:'row'}}>
                <TextInput placeholder="Masukkan Pesan"  placeholderTextColor="gray"  style={{flex:1, backgroundColor:'white', borderRadius:10, height:54, marginRight: 20, padding:16}} />
                <View style={{height:54, width: 54, backgroundColor:'rgba(41, 104, 112, 0.3);', borderRadius:10, justifyContent:'center'}}>
                    <Image source={require('../../../assets/icon/send.png')} style={{width:26, height:26, alignSelf:'center'}} />
                </View>
            </View> 
        </View>
    )
}

export default ChatRoom

const styles = StyleSheet.create({
    whiteBuble:{
        width:235,
        backgroundColor:'white',
        marginTop:32,
        marginHorizontal:30,
        borderTopRightRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    },
    greenBuble:{
        width:205,
        backgroundColor:Colors.primary,
        alignSelf:'flex-end',
        marginHorizontal:30,
        marginTop:32,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    },
    textBubleGreen: {
        padding:10,
        fontFamily: 'Nunito-Bold',
        fontSize:16,
        color:'white',
       
    }
})