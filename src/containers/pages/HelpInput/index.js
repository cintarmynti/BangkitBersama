import { Picker } from '@react-native-picker/picker'
import React, {useState} from 'react'
import { View, Text, ScrollView, Image, TextInput, Modal, StyleSheet } from 'react-native'
import {P, InputText, PrimaryButton} from './../../../components'
import {Colors} from './../../../utils'

const HelpInput = () => {
    const [pilihan, setPilihan] = useState();
    const klipPilihan = (label) => {
        alert("kamu pilih hari "+ label);
        setPilihan(label);
    }
    return (
    <ScrollView style={{backgroundColor:Colors.background}}>
        <View style={{padding:30}}>
            {/* arrow  */}
            <Image source={require('./../../../assets/icon/arrow-left.png')}/>

            {/* button nav  */}
            <View style={{flexDirection:'row', alignSelf:'center'}}>
                <View>
                    <View style={{width:35, height:35, borderRadius:35, backgroundColor:Colors.primary}}>
                        <P style={{color:'white', textAlign:'center', justifySelf:'center', marginTop:5}} title="1"/>
                    </View>
                    <P title="form"/>
                </View>
                
                <View style={{width:32, height:3, backgroundColor:Colors.primary, top:17, marginHorizontal:8}}></View>
                <View>
                    <View style={{width:35, height:35, borderRadius:35, backgroundColor:'white'}}>
                        <P style={{color:Colors.primary, textAlign:'center', justifySelf:'center', marginTop:5}} title="2"/>
                    </View>
                    <P title="Proses" />
                </View> 
            </View>
           

            {/* form  */}
            <View style={{marginTop:48}}>
                {/* Selectbox  */}
                <View>
                    <P title="Kategori" style={{color:Colors.darkGrey}} />
                    <Picker
                        style={{backgroundColor:'white', marginTop:10, height:70 }}
                        selectedValue={pilihan}
                        onValueChange={(label, index) => klipPilihan(label)}
                    >
                        <Picker.Item label="Kategori bantuan" enabled={false}/>
                        <Picker.Item label="Selasa" value="Selasa"/>
                        <Picker.Item label="Rabu" value="Rabu"/>
                        <Picker.Item label="Kamis" value="Kamis"/>

                    </Picker>
                </View>

                {/* judul input text */}
                <View style={{marginTop:24}}> 
                    <InputText placeholder="Judul Bantuan" name="Judul" />
                </View>
                
                {/* Foto input file */}
                <View style={{marginTop:24}}>
                    <P title="Foto" style={{color:Colors.darkGrey}} />
                    <View style={styles.inputPhoto}>
                        <Image style={{alignSelf:'center'}} source={require('../../../assets/icon/img.png')} />
                    </View>
                </View>

                {/* input deskripsi */}
                <View style={{marginTop:24}}>
                    <P title="Deskripsi" style={{color:Colors.darkGrey}} />
                    <TextInput placeholder="Ceritakan tentang bantuan ini" style={styles.InputDesc}/>
                </View>
                
                {/* jumlah penerima  */}
                <View style={{marginTop:24}}> 
                    <InputText name="Jumlah Penerima" placeholder="Berapa banyak penerima.." />
                </View>

                {/* tanggal  */}
                <View style={{marginTop:24}}>
                    <InputText name="Tanggal" placeholder="Masukkan tanggal" /> 
                </View>
                
                <PrimaryButton title="Tawarkan" style={{marginTop:40, marginBottom:32, height:59}} />
            </View>
        </View>
    </ScrollView>
        
    )
}

export default HelpInput


const styles = StyleSheet.create({
    inputPhoto: {
        height:151, 
        backgroundColor:'white', 
        marginTop:10, 
        borderRadius:15, 
        justifyContent:'center',
        borderWidth:1, 
        borderStyle:'dashed', 
        borderColor:Colors.grey
    },
    InputDesc:{
        height:151, 
        backgroundColor:'white', 
        marginTop:10, borderRadius:15, 
        paddingHorizontal:20
    }
   
})
