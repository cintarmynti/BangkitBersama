import React, {useEffect} from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { HeaderHome } from '../../../components'
import { HelpCategory, HomeScrollContentOne, HomeScrollContentTwo } from '../../organisms'
import { Colors, Async } from '../../../utils'
import { SetHelpsForHome } from '../../../config/redux/action'
import { useDispatch } from 'react-redux'

const Home = ({ navigation }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        Async.get('token')
            .then(res => {
                dispatch(SetHelpsForHome(res))
            })
    } )

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
            <HeaderHome />
            <View style={styles.contentWrapper}>
                <HelpCategory style={{ marginBottom: 40, paddingHorizontal: 30 }} />
                <HomeScrollContentOne navigation={navigation} style={{ marginBottom: 40 }} />
                <HomeScrollContentTwo style={{ marginBottom: 80 }} />
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    wrapper: {
        overflow: 'hidden',
        backgroundColor: Colors.primary
    },
    contentWrapper: {
        overflow: 'hidden',
        backgroundColor: Colors.overlay,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 40,

    }
})
