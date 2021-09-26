import React from 'react'
import { View, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { P, PrimaryButton, H4, OutlineButton, H5, Xsmall } from '../../../components'
import Colors from '../../../utils/Colors'
import ArrowLeftIcon from '../../../assets/icon/arrow-left.svg'

import CovidIcon from '../../../assets/icon/covid.svg'
import EkonomiIcon from '../../../assets/icon/ekonomi.svg'
import JasaIcon from '../../../assets/icon/jasa.svg'

const TawarBantuan = ({ navigation }) => {


    return (
        <ScrollView style={{ backgroundColor: Colors.overlay }}>
            <View style={{ margin: 30, backgroundColor: Colors.overlay, paddingBottom: 56 }}>
                <TouchableOpacity onPress={() => navigation.navigate('MainPages')}>
                    <ArrowLeftIcon />
                </TouchableOpacity>
                <Image source={require('../../../assets/illustrations/Saly-15.png')} style={{ alignSelf: 'center', marginTop: 40 }} />
                <P title="Tawarkan Bantuanmu dan Jadilah Inisiator Kebangkitan Bangsa!" style={{ alignSelf: 'center', textAlign: 'center', marginTop: 16 }} />
                <PrimaryButton onPress={() => navigation.navigate('HelpInput')} title="Tawarkan Sekarang" style={{ paddingVertical: 15, marginTop: 24 }} />
                <H4 title="Bantuan Kamu" style={{ marginTop: 40 }} />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 16
                }}>
                    <PrimaryButton style={{ fontSize: 12, width: 84, marginHorizontal: 5 }} title="Tertunda" />
                    <OutlineButton style={{ fontSize: 10, width: 100, marginHorizontal: 4 }} title="Berlangsung" />
                    <OutlineButton style={{ fontSize: 12, width: 85, marginHorizontal: 5 }} title="Berakhir" />
                </View>

                <View style={styles.card}>
                    <CovidIcon />
                    <View style={{ marginLeft: 16, width: 200 }}>
                        <H5 title="KONSULTASI PASIEN COVID-19 GRATIS" />
                        <Xsmall title="21 Hari lagi" style={{ marginTop: 8 }} />
                    </View>
                </View>

                <View style={styles.card}>
                    <EkonomiIcon />
                    <View style={{ marginLeft: 16, width: 200 }}>
                        <H5 title="BANTUAN TUNAI UNTUK GOLONGAN MBR" />
                        <Xsmall title="21 Hari lagi" style={{ marginTop: 8 }} />
                    </View>
                </View>

                <View style={styles.card}>
                    <JasaIcon />
                    <View style={{ marginLeft: 16, width: 200 }}>
                        <H5 title="ANTAR JEMPUT PASIEN COVID PRIBADI" />
                        <Xsmall title="21 Hari lagi" style={{ marginTop: 8 }} />
                    </View>
                </View>

            </View>

        </ScrollView >

    )
}

export default TawarBantuan

const styles = StyleSheet.create({
    card: {
        marginTop: 24,
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 87,
        alignItems: 'center',
        paddingLeft: 16,
        borderRadius: 15
    }


})