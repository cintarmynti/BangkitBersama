import React from 'react'
import { View, Text, Image } from 'react-native'
import Colors from '../../../utils/Colors'


const RelawanSection = ({icon}) => {
    return (
        <View style={{marginTop:16, padding:16, flexDirection:'row', justifyContent:'space-between', height:87}}>
            <View style={{backgroundColor:'red', width:60, height: 60, borderRadius:30}}>
            <Image source={require('../../../assets/picture/tirta.png')} style={{width:'100%', height:'100%', resizeMode:'cover', borderRadius:30}}/>
            </View>
            <View style={{ alignSelf:'center'}}>
                <Text style={{fontSize:12, fontFamily:'Nunito-ExtraBold', color:Colors.primary}}>Arya Rizky</Text>
                <Text style={{fontSize:12, fontFamily:'Nunito-ExtraBold', color:'gray', marginTop:8}}>Relawan Masyarakat</Text>
            </View>
            <View style={{ alignSelf:'center'}}>
                {/* iki nek pen nampilno icon user e nyalakno aku gaero carane ngekeki props lek tag  */}
                {/* <Image source={require('../../../assets/icon/User.png')} style={{width:24, height:24}}/> */}
            </View>
        </View>
    )
}

export default RelawanSection
