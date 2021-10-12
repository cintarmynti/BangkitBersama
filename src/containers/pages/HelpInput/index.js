import { Picker } from '@react-native-picker/picker'
import React, { useEffect, useState } from 'react'
import { View, ScrollView, Image, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { StackActions } from '@react-navigation/native'
import { P, InputText, PrimaryButton, H4, AlertDanger } from './../../../components'
import { Colors, Async } from './../../../utils'
import ArrowLeftIcon from '../../../assets/icon/arrow-left.svg'
import CheckIcon from '../../../assets/icon/check-2.svg'
import UploadPhotoIcon from '../../../assets/icon/upload-photo.svg'
import ComputerIllustration from '../../../assets/illustrations/computer.svg'
import CalenderIcon from '../../../assets/icon/calender.svg'
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDispatch, useSelector } from 'react-redux'
import { HandleHelpInput } from '../../../config/redux/action'
import { launchImageLibrary } from 'react-native-image-picker';

const HelpInput = ({ navigation }) => {
    const [token, setToken] = useState('');
    const [photo, setPhoto] = useState(null)
    const HelpInputReducer = useSelector(state => state.HelpInput)
    const dispatch = useDispatch()

    useEffect(() => {
        Async.get('token')
            .then(res => {
                setToken(res)
            })
    }, [])

    const changeInputValue = (input, value) => {
        dispatch({ type: 'SET_HELP_INPUT_FORM', input, value })
    }

    const choosePhoto = () => {
        launchImageLibrary({ noData: true }, (response) => {
            if (response.didCancel || response.error) {
                setPhoto(null);
                dispatch({ type: 'SET_HELP_INPUT_FORM', input: 'photo', value: null })
            } else {
                setPhoto(response);
                dispatch({
                    type: 'SET_HELP_INPUT_FORM', input: 'photo', value: {
                        uri: response.assets[0].uri,
                        name: response.assets[0].fileName,
                        type: response.assets[0].type,
                    }
                })

            }
        });

    }
    const renderStep1Text = () => {
        switch (HelpInputReducer.step) {
            case 1:
                return (<P style={{ color: 'white', textAlign: 'center', textAlign: 'center' }} title="1" />)
            case 2:
                return (<CheckIcon />)
        }
    }

    const renderStep2Text = () => {
        if (HelpInputReducer.step == 2) {
            return (<P title="Proses" />)
        }
    }

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getFullYear() + "-" + (tempDate.getMonth() + 1) + "-" + tempDate.getDate();
        changeInputValue('end_date', fDate)
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const submitHelpInput = () => {
        dispatch({ type: 'SET_ALERT_HELP_INPUT', value: false })
        for (let item in HelpInputReducer.form) {
            if (!HelpInputReducer.form[item]) {
                dispatch({ type: 'SET_ALERT_TEXT_HELP_INPUT', value: 'Semua kolom wajib diisi' })
                dispatch({ type: 'SET_ALERT_HELP_INPUT', value: true })
                return;
            }
        }
        dispatch(HandleHelpInput(HelpInputReducer.form, token, navigation))
    }

    const renderInputPhoto = () => {

        if (!photo) {
            return < View style={{ marginTop: 24 }}>
                <P title="Foto" style={{ color: Colors.darkGrey }} />
                <TouchableOpacity onPress={() => choosePhoto()} style={styles.inputPhoto}>
                    <UploadPhotoIcon style={{ alignSelf: 'center' }} />
                </TouchableOpacity>
            </View >
        } else {
            return < View style={{ marginTop: 24 }}>
                <P title="Foto" style={{ color: Colors.darkGrey }} />
                <TouchableOpacity onPress={() => choosePhoto()} style={styles.inputPhotoExists}>
                    <Image source={{ uri: photo.assets[0].uri }} style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain'
                    }} />
                </TouchableOpacity>
            </View >
        }

    }


    const renderContent = (navigation) => {
        switch (HelpInputReducer.step) {
            case 1:
                return (
                    < View style={{ marginTop: 48 }
                    }>
                        <AlertDanger text={HelpInputReducer.alertText} set={HelpInputReducer.setAlert} onPress={() => { dispatch({ type: 'SET_ALERT_HELP_INPUT', value: false }) }} />


                        < View style={{ marginTop: 10 }}>
                            <P title="Kategori" style={{ color: Colors.darkGrey }} />
                            <View style={{ backgroundColor: 'white', marginTop: 10, borderRadius: 15 }}>
                                <Picker
                                    style={{ height: 70, color: Colors.primary }}
                                    selectedValue={HelpInputReducer.form.help_category_id}
                                    onValueChange={value => changeInputValue('help_category_id', value)}
                                >
                                    <Picker.Item label="Kategori yang tepat untuk bantuan ini" enabled={false} />
                                    <Picker.Item label="Covid-19" value={1} />
                                    <Picker.Item label="Ekonomi" value={2} />
                                    <Picker.Item label="Pangan" value={3} />
                                    <Picker.Item label="Jasa" value={4} />
                                </Picker>
                            </View>

                        </View >

                        {/* judul input text */}
                        < View style={{ marginTop: 24 }}>
                            <InputText value={HelpInputReducer.form.name} onChangeText={value => changeInputValue('name', value)} placeholder="Judul Bantuan" name="Judul" />
                        </View >

                        {/* Foto input file */}
                        {renderInputPhoto()}

                        {/* input deskripsi */}
                        < View style={{ marginTop: 24 }}>
                            <P title="Deskripsi" style={{ color: Colors.darkGrey }} />
                            <TextInput value={HelpInputReducer.form.description} onChangeText={value => changeInputValue('description', value)} multiline={true} numberOfLines={4} placeholder="Ceritakan tentang bantuan ini" style={styles.InputDesc} />
                        </View >

                        {/* jumlah penerima  */}
                        < View style={{ marginTop: 24 }}>
                            <InputText keyboardType='numeric' value={HelpInputReducer.form.quota} onChangeText={value => changeInputValue('quota', value)} name="Jumlah Penerima" placeholder="Berapa banyak penerima.." />
                        </View >

                        <View style={{ marginTop: 24 }}>
                            <P />
                            <TouchableOpacity onPress={showDatepicker}>
                                <P title="Tanggal" style={{ color: Colors.darkGrey }} />
                                <View style={{ backgroundColor: 'white', borderRadius: 15, height: 70, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', paddingTop: 25, paddingHorizontal: 20 }}>
                                    <Text>{HelpInputReducer.form.end_date}</Text>
                                    <CalenderIcon strokeWidth={15} />
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


                        <PrimaryButton onPress={() => submitHelpInput()} title="Tawarkan" style={{ marginTop: 40, marginBottom: 32, height: 59 }} />
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
                            {renderStep1Text()}
                        </View>
                        <P title="Form" />
                    </View>
                    <View style={{ width: 32, height: 1, backgroundColor: Colors.primary, top: 17, marginHorizontal: 8 }}></View>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ width: 35, height: 35, borderRadius: 35, backgroundColor: (HelpInputReducer.step == 2) ? Colors.primary : 'white', marginBottom: 8 }}>
                            <P style={{ color: (HelpInputReducer.step == 2) ? 'white' : Colors.primary, textAlign: 'center', textAlign: 'center', marginTop: 5 }} title="2" />
                        </View>
                        {renderStep2Text()}
                    </View>
                </View>

                {renderContent(navigation)}

            </View >
        </ScrollView >

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
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: Colors.grey
    },
    InputDesc: {
        color: Colors.primary,
        height: 151,
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 15,
        paddingHorizontal: 20
    },
    inputPhotoExists: {
        height: 151,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 15,
        justifyContent: 'center',
    }

})
