import React from 'react'
import { View, ScrollView } from 'react-native'
import { H4, CardTwoSide } from '../../../components'

const HomeScrollContentOne = ({ navigation, style }) => {
    return (
        <View style={style}>
            <H4 title="Orang-Orang Berhati Baik" style={{ marginBottom: 16, paddingHorizontal: 30 }} />
            <ScrollView
                horizontal
                style={{
                    flexDirection: 'row'
                }}
                showsHorizontalScrollIndicator={false}>
                <CardTwoSide
                    onPress={() => navigation.navigate('HelpDetail')}
                    onPressChat={() => navigation.navigate('ChatRoom')}
                    imgTop={require('../../../assets/icon/covid.png')}
                    titleTop="KONSULTASI PASIEN COVID-19 GRATIS"
                    textTop="Setiap hari. Pukul 10.00 - 13.00 WIB"
                    imgBottom={require('../../../assets/picture/tirta.png')}
                    titleBottom="Dr. tirta"
                    textBottom="Tenaga Kesehatan"
                    style={{ marginLeft: 30 }} />
                <CardTwoSide
                    imgTop={require('../../../assets/icon/covid.png')}
                    titleTop="KONSULTASI PASIEN COVID-19 GRATIS"
                    textTop="Setiap hari. Pukul 10.00 - 13.00 WIB"
                    imgBottom={require('../../../assets/picture/tirta.png')}
                    titleBottom="Dr. tirta"
                    textBottom="Tenaga Kesehatan"
                />
                <CardTwoSide
                    imgTop={require('../../../assets/icon/covid.png')}
                    titleTop="KONSULTASI PASIEN COVID-19 GRATIS"
                    textTop="Setiap hari. Pukul 10.00 - 13.00 WIB"
                    imgBottom={require('../../../assets/picture/tirta.png')}
                    titleBottom="Dr. tirta"
                    textBottom="Tenaga Kesehatan"
                />
                <CardTwoSide
                    imgTop={require('../../../assets/icon/covid.png')}
                    titleTop="KONSULTASI PASIEN COVID-19 GRATIS"
                    textTop="Setiap hari. Pukul 10.00 - 13.00 WIB"
                    imgBottom={require('../../../assets/picture/tirta.png')}
                    titleBottom="Dr. tirta"
                    textBottom="Tenaga Kesehatan"
                />
                <CardTwoSide
                    imgTop={require('../../../assets/icon/covid.png')}
                    titleTop="KONSULTASI PASIEN COVID-19 GRATIS"
                    textTop="Setiap hari. Pukul 10.00 - 13.00 WIB"
                    imgBottom={require('../../../assets/picture/tirta.png')}
                    titleBottom="Dr. tirta"
                    textBottom="Tenaga Kesehatan"
                />
            </ScrollView>
        </View>

    )
}

export default HomeScrollContentOne

