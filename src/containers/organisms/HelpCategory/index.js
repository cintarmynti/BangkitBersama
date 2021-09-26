import React from 'react'
import { StyleSheet, View } from 'react-native'
import { CategoryItem } from '../../../components'
import CovidIcon from '../../../assets/icon/covid.svg'
import EkonomiIcon from '../../../assets/icon/ekonomi.svg'
import PanganIcon from '../../../assets/icon/pangan.svg'
import JasaIcon from '../../../assets/icon/jasa.svg'

const HelpCategory = ({ style }) => {
    return (
        <View style={[styles.wrapper, style]}>
            <CategoryItem title="Covid 19" icon={<CovidIcon />} />
            <CategoryItem title="Ekonomi" icon={<EkonomiIcon />} />
            <CategoryItem title="Pangan" icon={<PanganIcon />} />
            <CategoryItem title="Jasa" icon={<JasaIcon />} />
        </View>
    )
}

export default HelpCategory

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
