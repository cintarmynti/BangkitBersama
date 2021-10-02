import { Picker } from '@react-native-picker/picker'
<<<<<<< HEAD
import React, { useState } from 'react'
import { View, ScrollView, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { StackActions } from '@react-navigation/native'
import { P, InputText, PrimaryButton, H4 } from './../../../components'
import { Colors } from './../../../utils'
import ArrowLeftIcon from '../../../assets/icon/arrow-left.svg'
import CheckIcon from '../../../assets/icon/check-2.svg'
import ComputerIllustration from '../../../assets/illustrations/computer.svg'
=======
import React, {useState} from 'react'
import { View, Text, ScrollView, Image, TextInput, Button, Platform, StyleSheet, TouchableOpacity } from 'react-native'
import {P, InputText, PrimaryButton} from './../../../components'
import {Colors} from './../../../utils'
import CalenderIcon from '../../../assets/icon/calender.svg'
import DateTimePicker from '@react-native-community/datetimepicker';
>>>>>>> 07c723bf0e8cb62a2d6c4a9f521088e4eb9aafe0

const HelpInput = ({ navigation }) => {
    const [pilihan, setPilihan] = useState();
    const [step, setStep] = useState(1);

    const klipPilihan = (label) => {
        alert("kamu pilih hari " + label);
        setPilihan(label);
    }
<<<<<<< HEAD
    const renderStep1Text = (step) => {
        switch (step) {
            case 1:
                return (<P style={{ color: 'white', textAlign: 'center', textAlign: 'center', marginTop: 5 }} title="1" />)
            case 2:
                return (<CheckIcon />)
        }
    }

    const renderStep2Text = (step) => {
        if (step == 2) {
            return (<P title="Proses" />)
        }
    }

    const renderContent = (step, pilihan, navigation) => {
        switch (step) {
            case 1:
                return (
                    < View style={{ marginTop: 48 }
                    }>
                        < View >
                            <P title="Kategori" style={{ color: Colors.darkGrey }} />
                            <Picker
                                style={{ backgroundColor: 'white', marginTop: 10, height: 70 }}
                                selectedValue={pilihan}
                                onValueChange={(label, index) => klipPilihan(label)}
                            >
                                <Picker.Item label="Kategori bantuan" enabled={false} />
                                <Picker.Item label="Selasa" value="Selasa" />
                                <Picker.Item label="Rabu" value="Rabu" />
                                <Picker.Item label="Kamis" value="Kamis" />

                            </Picker>
                        </View >

                        {/* judul input text */}
                        < View style={{ marginTop: 24 }}>
                            <InputText placeholder="Judul Bantuan" name="Judul" />
                        </View >

                        {/* Foto input file */}
                        < View style={{ marginTop: 24 }}>
                            <P title="Foto" style={{ color: Colors.darkGrey }} />
                            <View style={styles.inputPhoto}>
                                <Image style={{ alignSelf: 'center' }} source={require('../../../assets/icon/img.png')} />
                            </View>
                        </View >

                        {/* input deskripsi */}
                        < View style={{ marginTop: 24 }}>
                            <P title="Deskripsi" style={{ color: Colors.darkGrey }} />
                            <TextInput multiline={true} numberOfLines={4} placeholder="Ceritakan tentang bantuan ini" style={styles.InputDesc} />
                        </View >

                        {/* jumlah penerima  */}
                        < View style={{ marginTop: 24 }}>
                            <InputText name="Jumlah Penerima" placeholder="Berapa banyak penerima.." />
                        </View >

                        {/* tanggal  */}
                        < View style={{ marginTop: 24 }}>
                            <InputText name="Tanggal" placeholder="Masukkan tanggal" />
                        </View >

                        <PrimaryButton onPress={() => setStep(2)} title="Tawarkan" style={{ marginTop: 40, marginBottom: 32, height: 59 }} />
                    </View >)

            case 2:
                return (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginVertical: 48
                    }}>
                        <ComputerIllustration />
                        <H4 style={{ textAlign: 'center' }} title={"Tawaran anda berhasil diajukan dan sedang dalam proses verifikasi. Silahkan cek status tawaran bantuan anda secara berkala"} />
                        <PrimaryButton onPress={() => navigation.dispatch(StackActions.replace('TawarBantuan')
                        )} title="Status Bantuan" style={{ width: '100%', marginTop: 40, marginBottom: 32, height: 59 }} />
=======

    const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empety');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate()+ '/' + (tempDate.getMonth() + '/' + tempDate.getFullYear());
    setText(fDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
    return (
    <ScrollView style={{backgroundColor:Colors.overlay}}>
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
>>>>>>> 07c723bf0e8cb62a2d6c4a9f521088e4eb9aafe0
                    </View>
                )
        }

    }
    return (
        <ScrollView style={{ backgroundColor: Colors.overlay }}>
            <View style={{ padding: 30 }}>
                {/* arrow  */}
                <TouchableOpacity onPress={() => navigation.navigate('MainPages')}>
                    <ArrowLeftIcon />
                </TouchableOpacity>

                {/* button nav  */}
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ width: 35, height: 35, borderRadius: 35, backgroundColor: Colors.primary, marginBottom: 8, alignItems: 'center', justifyContent: 'center' }}>
                            {renderStep1Text(step)}
                        </View>
                        <P title="Form" />
                    </View>
                    <View style={{ width: 32, height: 1, backgroundColor: Colors.primary, top: 17, marginHorizontal: 8 }}></View>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ width: 35, height: 35, borderRadius: 35, backgroundColor: (step == 2) ? Colors.primary : 'white', marginBottom: 8 }}>
                            <P style={{ color: (step == 2) ? 'white' : Colors.primary, textAlign: 'center', textAlign: 'center', marginTop: 5 }} title="2" />
                        </View>
                        {renderStep2Text(step)}
                    </View>
                </View>

                {renderContent(step, pilihan, navigation)}

<<<<<<< HEAD
=======
                <View style={{marginTop:24}}>
                    <P/>
                    <TouchableOpacity onPress={showDatepicker}>
                    <P title="Tanggal" style={{color:Colors.darkGrey}} />
                        <View style={{backgroundColor: 'white', borderRadius: 15, height: 70, marginTop:10, flexDirection:'row', justifyContent:'space-between', paddingTop:25, paddingHorizontal:20}}>
                            <Text>{text}</Text>
                           <CalenderIcon strokeWidth={15}  />
                        </View>
                    </TouchableOpacity>
                   
                </View>
              
                {show && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display='default'
                    onChange={onChange}
                    />
                )}
                
                
                <PrimaryButton title="Tawarkan" style={{marginTop:40, marginBottom:32, height:59}} />
>>>>>>> 07c723bf0e8cb62a2d6c4a9f521088e4eb9aafe0
            </View>
        </ScrollView>

    )
}

export default HelpInput


const styles = StyleSheet.create({
    inputPhoto: {
        height: 151,
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 15,
        justifyContent: 'center',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: Colors.grey
    },
    InputDesc: {
        height: 151,
        backgroundColor: 'white',
        marginTop: 10, borderRadius: 15,
        paddingHorizontal: 20
    }

})
