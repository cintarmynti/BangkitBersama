import { View, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { H4, ProfilePicture, P, InputText, Small, AlertDanger, AlertWarning, AlertSuccess } from '../../../components'
import { Colors, Async } from '../../../utils'
import { Picker } from '@react-native-picker/picker'
import ArrowLeftIcon from '../../../assets/icon/arrow-left.svg'
import CheckIcon from '../../../assets/icon/check-3.svg'
import UploadDocumentIcon from '../../../assets/icon/upload-document.svg'
import FileIcon from '../../../assets/icon/file.svg'
import { useDispatch, useSelector } from 'react-redux'
import { SetEditProfile, HandleEditProfile } from '../../../config/redux/action'
import { launchImageLibrary } from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';

const EditProfile = ({ navigation }) => {

    const [user, setUser] = useState({})
    const [photo, setPhoto] = useState(null)
    const [document, setDocument] = useState(null)
    const [token, setToken] = useState('')

    const dispatch = useDispatch();
    const EditProfileReducer = useSelector(state => state.EditProfile);

    const choosePhoto = () => {
        launchImageLibrary({ noData: true }, (response) => {
            if (response.didCancel || response.error) {
                setPhoto(null);
                dispatch({
                    type: 'SET_PHOTO_EDIT_PROFILE', value: null
                })
            } else {
                setPhoto(response);
                dispatch({
                    type: 'SET_PHOTO_EDIT_PROFILE', value: {
                        uri: response.assets[0].uri,
                        name: response.assets[0].fileName,
                        type: response.assets[0].type,
                    }
                })
            }
        });

    }

    const chooseDocument = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.images, DocumentPicker.types.pdf],
            });

            setDocument(res);
            dispatch({
                type: 'SET_DOCUMENT_EDIT_PROFILE', value: {
                    uri: res[0].uri,
                    name: res[0].name,
                    type: res[0].type,
                }
            });
        } catch (err) {
            setDocument(null);
            dispatch({
                type: 'SET_DOCUMENT_EDIT_PROFILE', value: null
            })
        }
    }

    const changeInputValue = (input, value) => {
        dispatch({ type: 'SET_EDIT_PROFILE', input, value })
    }

    useEffect(() => {
        Async.get('user')
            .then(res => {
                dispatch(SetEditProfile(res))
                setUser(res)
            })
        Async.get('token')
            .then(res => {
                setToken(res)
            })
    }, [])

    const renderVerifiedContent = (status) => {
        switch (status) {
            case 1:
                return renderUploadDocument()
            case 2:
                return (<View style={{ marginVertical: 10 }}>
                    <AlertWarning text="Anda sedang dalam proses verifikasi" />
                    <Small style={{ marginTop: 8 }} color={Colors.grey} title="Proses verifikasi bisa memakan waktu 1-2 hari kerja" />
                </View>)
            case 3:
                return (<View style={{ marginVertical: 10 }}>
                    <AlertSuccess text="Anda telah terverifikasi" />
                    <Small style={{ marginTop: 8 }} color={Colors.grey} title="Kini anda bisa membuat atau mencari bantuan" />
                </View>)
        }
    }

    const renderUploadDocument = () => {
        if (!document) {
            return (
                <>
                    <TouchableOpacity onPress={() => chooseDocument()} style={styles.inputPhoto}>
                        <UploadDocumentIcon style={{ alignSelf: 'center' }} />

                    </TouchableOpacity >
                    <Small style={{ marginTop: 8 }} color={Colors.grey} title="Verifikasi identitas digunakan sebagai syarat untuk menawarkan ataupun menerima bantuan" />
                </>

            )
        } else {
            return (
                <>
                    <TouchableOpacity onPress={() => chooseDocument()} style={styles.inputPhotoExists}>
                        <FileIcon style={{ marginRight: 10 }} />
                        <Small title={document[0].name} />


                    </TouchableOpacity >
                    <Small style={{ marginTop: 8 }} color={Colors.grey} title="Verifikasi identitas digunakan sebagai syarat untuk menawarkan ataupun menerima bantuan" /></>

            )
        }
    }

    const submitEditProfile = () => {
        dispatch({ type: 'SET_ALERT_EDIT_PROFILE', value: false })
        for (let item in EditProfileReducer.form) {
            if (!EditProfileReducer.form[item]) {
                dispatch({ type: 'SET_ALERT_TEXT_EDIT_PROFILE', value: 'Semua kolom wajib diisi' })
                dispatch({ type: 'SET_ALERT_EDIT_PROFILE', value: true })
                return;
            }
        }
        dispatch(HandleEditProfile(EditProfileReducer, token, navigation))
    }


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <View style={{ width: '100%', backgroundColor: Colors.overlay, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 30 }}>
                <TouchableOpacity onPress={() => navigation.navigate('MainPages')}>
                    <ArrowLeftIcon />
                </TouchableOpacity>
                <H4 title="Edit Profil" />
                <TouchableOpacity onPress={() => submitEditProfile()}>
                    <CheckIcon />
                </TouchableOpacity>
            </View>

            <ScrollView style={{ flex: 1, backgroundColor: 'white', backgroundColor: Colors.overlay }}>
                <View style={{ paddingHorizontal: 30 }}>
                    <View style={{ marginBottom: 10 }}>
                        <ProfilePicture img={photo ? photo.assets[0].uri : user.photo} width={100} height={100} style={{ alignSelf: 'center', marginTop: 48 }} />
                        <TouchableOpacity onPress={() => choosePhoto()}>
                            <P title="Ubah Foto Profil" style={{ textAlign: 'center', marginTop: 16 }} />
                        </TouchableOpacity>
                    </View>

                    <AlertDanger text={EditProfileReducer.alertText} set={EditProfileReducer.setAlert} onPress={() => { dispatch({ type: 'SET_ALERT_EDIT_PROFILE', value: false }) }} />

                    <View style={{ marginTop: 24 }}>
                        <InputText value={EditProfileReducer.form.name} onChangeText={value => changeInputValue('name', value)} name="Nama" />
                        <Small style={{ marginTop: 8 }} color={Colors.grey} title="Nama akan ditampilkan pada halaman bantuan anda" />
                    </View>


                    <View style={{ marginTop: 24 }}>
                        <InputText value={EditProfileReducer.form.username} onChangeText={value => changeInputValue('username', value)} name="Nama Pengguna" />
                        <Small style={{ marginTop: 8 }} color={Colors.grey} title="Nama akan ditampilkan pada halaman anda" />
                    </View>

                    <View style={{ marginTop: 24 }}>
                        <P title="Profesi" style={{ color: Colors.darkGrey }} />
                        <View style={{ position: 'relative', backgroundColor: 'white', height: 70, borderRadius: 15, marginTop: 10 }}>
                            <Picker
                                style={{ color: Colors.primary, marginTop: 10, }}
                                selectedValue={EditProfileReducer.form.profession}
                                onValueChange={value => changeInputValue('profession', value)}
                            >
                                <Picker.Item label="Pilih Profesi" enabled={false} />
                                <Picker.Item label="Relawan Masyarakat" value="Relawan Masyarakat" />
                                <Picker.Item label="Lembaga Nasional" value="Lembaga Nasional" />
                            </Picker>

                        </View>
                        <Small style={{ marginTop: 8 }} color={Colors.grey} title="Profesi akan ditampilkan pada halaman bantuan anda" />
                    </View>


                    <View style={{ marginTop: 24 }}>
                        <InputText value={EditProfileReducer.form.address} onChangeText={value => changeInputValue('address', value)} name="Kota Tinggal" />
                    </View>

                    <View style={{ marginTop: 24, marginBottom: 64 }}>
                        <P title="Verifikasi Identitas (KTP/SIM/PASPOR)" style={{ color: Colors.darkGrey }} />
                        {renderVerifiedContent(user.user_status_id)}

                    </View>


                </View>
            </ScrollView>
        </View>
    )
}

export default EditProfile


const styles = StyleSheet.create({
    inputPhoto: {
        height: 151,
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 15,
        justifyContent: 'center',
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: Colors.primary,
    },
    inputPhotoExists: {
        height: 50,
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 15,
        borderWidth: 2,
        paddingHorizontal: 10,
        borderStyle: 'dashed',
        borderColor: Colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
    }

})