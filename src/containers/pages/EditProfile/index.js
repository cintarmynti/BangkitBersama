import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import {H3, ProfilePicture, P} from '../../../components'
import InputText from '../../../components/molecules/InputText'
import Colors from '../../../utils/Colors'
import { Picker } from '@react-native-picker/picker'



const EditProfile = () => {
    const [pilihan, setPilihan] = useState();
    const klipPilihan = (label) => {
        alert("kamu pilih hari "+ label);
        setPilihan(label);
    }
    return (
        <View style={{flex:1, backgroundColor:'white'}}>

            <View style={{height: 70, width:'100 %', backgroundColor:Colors.background, flexDirection:'row', justifyContent:'space-between', padding:10}}>
                    <Image source={require('../../../assets/icon/arrow-left.png')} />
                    <H3 title="Edit Profile"/>
                    <Image source={require('../../../assets/icon/check.png')} />
            </View>

            <ScrollView  style={{flex:1, backgroundColor:'white', backgroundColor:Colors.background}}>
                <View style={{paddingHorizontal:30}}>
                    <View>
                        <ProfilePicture img={require('../../../assets/logo/bangkitbersama.png')} style={{width:100, height:100, alignSelf: 'center', marginTop:48}} />
                        <P title="Ubah Foto Profile" style={{textAlign:'center', marginTop:16}} />
                    </View>

                     <View style={{marginTop:40}}>
                        <P title="Kategori" style={{color:Colors.darkGrey}} />
                        <Picker
                            style={{backgroundColor:'white', marginTop:10, height:70 }}
                            selectedValue={pilihan}
                            onValueChange={(label, index) => klipPilihan(label)}
                        >
                            <Picker.Item label="Pilih Profesi" enabled={false}/>
                            <Picker.Item label="Tenaga Kesehatan" value="Tenaga Kesehatan"/>
                            <Picker.Item label="Tenaga Masyarakat" value="Tenaga Masyarakat"/>
                        </Picker>
                    </View>
                    
                    <View>
                        <InputText name="Nama" style={{marginTop:24}} />
                        <InputText name="Kota Tinggal" style={{marginTop:24}} />
                    </View>

                    <View style={{marginTop:24, marginBottom:64}}>
                        <P title="Foto" style={{color:Colors.darkGrey}} />
                        <View style={styles.inputPhoto}>
                            <Image style={{alignSelf:'center'}} source={require('../../../assets/icon/pdf.png')} />
                        </View>
                    </View>
                    
                </View>
            </ScrollView>
        </View>
    )
}

export default EditProfile


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
    }
   
})