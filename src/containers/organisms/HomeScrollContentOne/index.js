import React from 'react'
import { View, ScrollView } from 'react-native'
import { H4, CardTwoSide } from '../../../components'
import { useSelector } from 'react-redux'

const HomeScrollContentOne = ({ navigation, style }) => {

    const HelpForHomeReducer = useSelector(state => state.HelpForHome)

    return (
        <View style={style}>
            <H4 title="Orang-Orang Berhati Baik" style={{ marginBottom: 16, paddingHorizontal: 30 }} />
            <ScrollView
                horizontal
                style={{
                    flexDirection: 'row'
                }}
                showsHorizontalScrollIndicator={false}>
                {HelpForHomeReducer.helps.map(item => {
                    return (<CardTwoSide
                    onPress={() => navigation.navigate('HelpDetail', { help_id: item.id })}
                    onPressChat={() => navigation.navigate('ChatRoom')}
                    imgTop={item.photo}
                    sumUsers={item.quota}
                    sumDate={item.end_date}
                    titleCategory={item.category.name}
                    titleTop={item.name.toUpperCase()}
                    textTop="Setiap hari. Pukul 10.00 - 13.00 WIB"
                    imgBottom={item.user.photo}
                    titleBottom={item.user.name}
                    textBottom={item.user.profession}
                    style={{ marginLeft: 30 }} />
                    )
                })}
                
            </ScrollView>
        </View>

    )
}

export default HomeScrollContentOne

