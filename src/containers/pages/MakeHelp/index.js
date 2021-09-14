import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { Colors } from '../../../utils'
import { H4, FeatureCard } from '../../../components'

const MakeHelp = ({ navigation}) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
            <View style={{ alignItems: 'center' }}>
                <H4
                    title={"Sekecil Apapun Bantuan Kamu, Akan Membantu Mereka Untuk Bangkit"}
                    style={{ textAlign: 'center', marginBottom: 53 }} />
                <FeatureCard
                    navigation={navigation}
                    img={require('../../../assets/illustrations/feature-1.png')}
                    title={"TAWARKAN BANTUAN \nDAN JASA"}
                    text={"Gabung jadi relawan untuk membantu masyarakat \nkita bangkit"}
                    style={{
                        marginBottom: 32
                    }}
                />
                <FeatureCard
                    img={require('../../../assets/illustrations/feature-2.png')}
                    title={"MULAI KAMPANYE \nGALANG DANA"}
                    text={"Bantu mereka untuk bangkit dengan menjadi inisiator \nkampanye galang dana"}
                    style={{
                        marginBottom: 32
                    }}
                />
                <FeatureCard
                    img={require('../../../assets/illustrations/feature-3.png')}
                    title={"PUNYA INFO AKURAT?"}
                    text={"Upload info kamu disini"}
                />
            </View>
        </ScrollView>
    )
}

export default MakeHelp

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingTop: 40,
        paddingVertical: 30,
        backgroundColor: Colors.overlay
    }
})
