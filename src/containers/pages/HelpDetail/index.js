import React from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import Colors from '../../../utils/Colors'
import {H1, H2, H3, H4, H5, P} from '../../../components/atoms'
import {RelawanSection, PrimaryButton, OutlineButton} from '../../../components/molecules'

const HelpDetail = () => {
    return (

           <View style={{flexGrow:1 }} backgroundColor={Colors.overlay}>
               <ScrollView backgroundColor={Colors.overlay}>
                    {/* Header  */}
                    <View style={{backgroundColor:'red', width:'100%', height:214}}>
                        <Image source={require('../../../assets/picture/bantu-bangkit.png') } style={{width:'100%', height:'100%', resizeMode:'cover'}}/>
                    </View>

                    {/* content  */}
                <View style={styles.contentDetail} backgroundColor={Colors.overlay}>
                    {/* Button dan share  */}
                    <View style={{flexDirection:'row', marginTop:30, justifyContent: 'space-between', alignItems:'center'}}>
                            <PrimaryButton style={styles.button} title="Ekonomi"/>
                            <Image source={require('../../../assets/icon/share.png')} style={{width:30, height:30}}/>
                    </View>
                    {/* H1 */}
                    <View>
                       <H4 title="Bantu Pak Adi Memenuhi Kebutuhan Keluarga" style={{marginTop:24}}/>
                    </View>

                    {/* H2  */}
                    <View style={{marginTop:16}}>
                        <P title="Berakhir : 21 Oktober 2003" /> 
                        <P title="Penerima : 3 Orang" />     
                    </View> 

                    {/* Button sama H4  */}
                    <View>
                        <PrimaryButton title="Donasi" style={{height:49, marginTop:40}}/>
                        <H4 title="Inisiator" style={{marginTop:40}}/>
                    </View>

                    {/* Relawan Section  */}
                    <RelawanSection/>

                    <View>
                        <H4 title="Deskripsi" style={{marginTop:40}}/>
                        <View style={{ padding:16}}>
                            <P title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean viverra massa sed faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean viverra massa sed faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean viverra massa sed faucibus..." style={{color:Colors.darkGrey}}/>
                            <P title="Selengkapnya"/>
                        </View>
                    </View>

                    <View>
                    <H4 title="Donatur(78)" style={{marginTop:40}}/>
                    <RelawanSection/>
                    <RelawanSection/>
                    </View>
                    <View>
                        <OutlineButton title="Semua"  icon={require('../../../assets/icon/chevron-down.png')} style={{marginTop:24}}/>
                    </View>
                </View>
               </ScrollView>
               
           </View>
    )
}

export default HelpDetail

const styles = StyleSheet.create({
    contentDetail:{
        position:'relative',
        marginTop:-36,
        backgroundColor:'pink',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        paddingHorizontal:30
    },
    button:{
        width:150,
        height:40,
        fontSize:11,
        borderRadius:10,

    },
    title:{
        fontSize:24,
        color: Colors.primary,
        fontFamily: 'Nunito-Bold',
        marginTop:24
    },
 
})
