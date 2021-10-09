import { View, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { H4, ProfilePicture, P, InputText, Small } from '../../../components'
import { Colors, Async } from '../../../utils'
import { Picker } from '@react-native-picker/picker'
import ArrowLeftIcon from '../../../assets/icon/arrow-left.svg'



const EditProfile = ({ navigation }) => {
    const [pilihan, setPilihan] = useState();
    const klipPilihan = (label) => {
        setPilihan(label);
    }
    const [user, setUser] = useState({})

    useEffect(() => {
        Async.get('user')
            .then(res => {
                setUser(res)
            })
    })


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <View style={{ width: '100%', backgroundColor: Colors.overlay, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 30 }}>
                <TouchableOpacity onPress={() => navigation.navigate('MainPages')}>
                    <ArrowLeftIcon />
                </TouchableOpacity>
                <H4 title="Edit Profil" />
                <Image source={require('../../../assets/icon/check.png')} />
            </View>

            <ScrollView style={{ flex: 1, backgroundColor: 'white', backgroundColor: Colors.overlay }}>
                <View style={{ paddingHorizontal: 30 }}>
                    <View>
                        <ProfilePicture img={user.photo} style={{ width: 100, height: 100, alignSelf: 'center', marginTop: 48 }} />
                        <P title="Ubah Foto Profil" style={{ textAlign: 'center', marginTop: 16 }} />
                    </View>

                    <View style={{ marginTop: 40 }}>
                        <InputText value={user.name} name="Nama" />
                        <Small style={{ marginTop: 8 }} color={Colors.grey} title="Nama akan ditampilkan pada halaman bantuan anda" />
                    </View>

                    <View style={{ marginTop: 24 }}>
                        <InputText value={user.username} name="Nama Pengguna" />
                        <Small style={{ marginTop: 8 }} color={Colors.grey} title="Nama akan ditampilkan pada halaman anda" />
                    </View>

                    <View style={{ marginTop: 24 }}>
                        <P title="Profesi" style={{ color: Colors.darkGrey }} />
                        <Picker
                            style={{ backgroundColor: 'white', color: Colors.primary, marginTop: 10, height: 70, borderRadius: 15 }}
                            selectedValue={pilihan}
                            onValueChange={(label, index) => klipPilihan(label)}
                        >
                            <Picker.Item label="Pilih Profesi" enabled={false} />
                            <Picker.Item label="Relawan Masyarakat" value="Relawan Masyarakat" />
                            <Picker.Item label="Lembaga Nasional" value="Lembaga Nasional" />
                        </Picker>
                        <Small style={{ marginTop: 8 }} color={Colors.grey} title="Profesi akan ditampilkan pada halaman bantuan anda" />
                    </View>


                    <View style={{ marginTop: 24 }}>
                        <InputText value={user.address} name="Kota Tinggal" />
                    </View>

                    <View style={{ marginTop: 24, marginBottom: 64 }}>
                        <P title="Verifikasi Identitas (KTP/SIM/PASPOR)" style={{ color: Colors.darkGrey }} />
                        <View style={styles.inputPhoto}>
                            <Image style={{ alignSelf: 'center' }} source={require('../../../assets/icon/pdf.png')} />
                        </View>
                        <Small style={{ marginTop: 8 }} color={Colors.grey} title="Verifikasi identitas digunakan sebagai syarat untuk menawarkan ataupun menerima bantuan" />
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
    }

})