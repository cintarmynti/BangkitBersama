import React from 'react'
import { StyleSheet, View } from 'react-native'
import { CategoryItem } from '../../../components'

const HelpCategory = () => {
    return (
        <View style={styles.wrapper}>
            <CategoryItem title="Covid 19" img={require('../../../assets/icon/covid.png')} />
            <CategoryItem title="Ekonomi" img={require('../../../assets/icon/ekonomi.png')} />
            <CategoryItem title="Pangan" img={require('../../../assets/icon/pangan.png')} />
            <CategoryItem title="Jasa" img={require('../../../assets/icon/jasa.png')} />
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
