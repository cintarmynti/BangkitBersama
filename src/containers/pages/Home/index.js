import React from 'react'
import { StyleSheet, View } from 'react-native'
import { HeaderHome } from '../../../components'
import { HelpCategory } from '../../organisms'
import { Colors } from '../../../utils'

const Home = () => {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.primary, }}>
            <HeaderHome />
            <View style={{
                flex: 1,
                backgroundColor: Colors.overlay,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                paddingHorizontal: 30,
                paddingVertical: 40,

            }}>
                <HelpCategory />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
