import React from 'react'
import { View, ScrollView } from 'react-native'
import { H4, CardCoverTop } from '../../../components'

const HomeScrollContentOne = ({ navigation, style }) => {
    return (
        <View style={style}>
            <H4 title="Bantu Mereka Bangkit" style={{ marginBottom: 16, paddingHorizontal: 30 }} />
            <ScrollView
                horizontal
                style={{
                    flexDirection: 'row'
                }}
                showsHorizontalScrollIndicator={false}>
                <CardCoverTop
                    onPress={() => navigation.navigate('HelpDetail')}
                    img={require('../../../assets/picture/bantu-bangkit.png')}
                    title="BANTU PAK ADI MEMENUHI KEBUTUHAN KELUARGA"
                    price="RP. 120.000.000,-"
                    date="/ 20 Hari tersisa"
                    percentage={25}
                    style={{ marginLeft: 30, marginRight: 20 }}
                />
                <CardCoverTop
                    img={require('../../../assets/picture/bantu-bangkit.png')}
                    title="BANTU PAK ADI MEMENUHI KEBUTUHAN KELUARGA"
                    price="RP. 120.000.000,-"
                    date="/ 20 Hari tersisa"
                    percentage={25}
                    style={{ marginRight: 20 }}
                />
                <CardCoverTop
                    img={require('../../../assets/picture/bantu-bangkit.png')}
                    title="BANTU PAK ADI MEMENUHI KEBUTUHAN KELUARGA"
                    price="RP. 120.000.000,-"
                    date="/ 20 Hari tersisa"
                    percentage={25}
                    style={{ marginRight: 20 }}
                />
                <CardCoverTop
                    img={require('../../../assets/picture/bantu-bangkit.png')}
                    title="BANTU PAK ADI MEMENUHI KEBUTUHAN KELUARGA"
                    price="RP. 120.000.000,-"
                    date="/ 20 Hari tersisa"
                    percentage={25}
                    style={{ marginRight: 20 }}
                />
                <CardCoverTop
                    img={require('../../../assets/picture/bantu-bangkit.png')}
                    title="BANTU PAK ADI MEMENUHI KEBUTUHAN KELUARGA"
                    price="RP. 120.000.000,-"
                    date="/ 20 Hari tersisa"
                    percentage={25}
                    style={{ marginRight: 20 }}
                />
            </ScrollView>
        </View>

    )
}

export default HomeScrollContentOne

