import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { RoundedSquare, Small } from '../../../components'

const CategoryItem = ({ icon, title }) => {
    return (
        <TouchableOpacity style={styles.wrapper}>
            <RoundedSquare content={icon} />
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
