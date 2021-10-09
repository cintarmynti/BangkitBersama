import React, { useState } from 'react'
import { StackActions } from '@react-navigation/native'
import { StyleSheet, View, Dimensions } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Colors, Slides, Async } from '../../../utils'
import { CircleLinearButton, LinearButton } from '../../../components'
import { OnBoard } from '../../templates';

const renderContent = ({ item, index }) => {
    return (
        <OnBoard item={item} />
    );
}

const pagination = ({ activeSlide }) => {
    return (
        <Pagination
            dotsLength={Slides.length}
            activeDotIndex={activeSlide}
            containerStyle={{
                position: 'absolute',
                bottom: 158
            }}
            dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 100,
                marginHorizontal: 3,
                backgroundColor: Colors.secondary
            }}
            inactiveDotStyle={{
                width: 5,
                height: 5,
            }}
            inactiveDotOpacity={1}
            inactiveDotScale={1}
        />
    );
}

const setButton = ({ navigation, activeSlide, setActiveSlide }) => {
    if (activeSlide != (Slides.length - 1)) {
        return <CircleLinearButton onPress={() => {
            if (activeSlide <= (Slides.length - 1)) {
                setActiveSlide(activeSlide + 1)
            }
        }} icon={require('../../../assets/icon/left-broken-arrow.png')} />

    } else {
        return <LinearButton onPress={() => {
            Async.set('isFirtsLaunch', 'true')
            navigation.dispatch(StackActions.replace('Auth'))
        }} style={{ marginBottom: 40 }} nextLabel={false} width={206} paddingVertical={15} title="Selanjutnya" />
    }
}

const OnBoarding = ({ navigation }) => {

    const [activeSlide, setActiveSlide] = useState(0)
    return (
        <View style={styles.wrapper}>
            <Carousel
                data={Slides}
                firstItem={activeSlide}
                renderItem={renderContent}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width}
                onSnapToItem={(index) => setActiveSlide(index)}
            />
            {pagination({ activeSlide })}
            {setButton({ navigation, activeSlide, setActiveSlide })}
        </View>
    );
}

export default OnBoarding

const styles = StyleSheet.create({
    wrapper: {
        position: 'relative',
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.primary

    }
})