import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { CategoryIcon, RoundedSquare, Small } from '../../../components'

const CategoryItem = ({ img, title }) => {
    return (
        <TouchableOpacity style={styles.wrapper}>
            <RoundedSquare content={<CategoryIcon img={img} />} />
            <Small title={title} style={{ fontWeight: '400', marginTop: 8 }} />
        </TouchableOpacity>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center'
    }
})
