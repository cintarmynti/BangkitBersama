import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { P, PrimaryButton, H4, OutlineButton, H5, Xsmall, BantuanSection } from '../../../components'
import Colors from '../../../utils/Colors'



const TawarBantuan = () => {
    return (
       
           <ScrollView style={{backgroundColor:Colors.background}}>
               <View style={{margin:30, backgroundColor:Colors.background}}>
                    <Image source={require('../../../assets/icon/arrow-left.png')}/>
                        <Image source={require('../../../assets/illustrations/Saly-15.png')} style={{alignSelf:'center', marginTop:40}}/>
                        <P title="Tawarkan Bantuanmu dan Jadilah Inisiator Kebangkitan Bangsa!" style={{alignSelf:'center', textAlign:'center', marginTop:16}} />
                        <PrimaryButton title="Tawarkan Sekarang" style={{paddingVertical:15, marginTop:24}}/>
                        <H4 title="Bantuan Kamu" style={{fontFamily:'Nunito-Bold', marginTop:40}}/>
                        <View style={{flexDirection:'row', marginTop:16}}>
                            <PrimaryButton style={{fontSize:12, width:84, marginHorizontal:5}} title="Tertunda"/>
                            <OutlineButton style={{fontSize:10, width:100, marginHorizontal:4}} title="Berlangsung"/>
                            <OutlineButton style={{fontSize:12, width:85, marginHorizontal:5}} title="Berakhir"/>
                        </View>
                      
                        <View style={{marginTop:24, flexDirection:'row', backgroundColor:'white', height:87, alignItems:'center', paddingLeft:16, borderRadius:15}}>
                            <Image source={require('../../../assets/icon/covid.png')}/>
                            <View style={{marginLeft:16,width:200}}>
                                <H5 title="KONSULTASI PASIEN COVID-19 GRATIS" />
                                <Xsmall title="21 Hari lagi" style={{marginTop:8}}/>
                            </View>
                        </View>

                        <View style={{marginTop:24, flexDirection:'row', backgroundColor:'white', height:87, alignItems:'center', paddingLeft:16, borderRadius:15}}>
                            <Image source={require('../../../assets/icon/ekonomi.png')}/>
                            <View style={{marginLeft:16,width:200}}>
                                <H5 title="BANTUAN TUNAI UNTUK GOLONGAN MBR" />
                                <Xsmall title="21 Hari lagi" style={{marginTop:8}}/>
                            </View>
                        </View>

                        <View style={{marginTop:24, flexDirection:'row', backgroundColor:'white', height:87, alignItems:'center', paddingLeft:16, borderRadius:15}}>
                            <Image source={require('../../../assets/icon/jasa.png')}/>
                            <View style={{marginLeft:16,width:200}}>
                                <H5 title="ANTAR JEMPUT PASIEN COVID PRIBADI" />
                                <Xsmall title="21 Hari lagi" style={{marginTop:8}}/>
                            </View>
                        </View>

               </View>
               
           </ScrollView>
      
    )
}

export default TawarBantuan
