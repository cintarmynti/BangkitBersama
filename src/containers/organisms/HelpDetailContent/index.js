import React from 'react'
import { StyleSheet, View } from 'react-native'
import { H4, ProfilePicture, Small, P } from '../../../components'
import { Colors } from '../../../utils'
import VerifiedIcon from '../../../assets/icon/verified.svg'
import UserIcon from '../../../assets/icon/user.svg'
import { useSelector } from 'react-redux'

const HelpDetailContent = () => {

    const HelpDetailReducer = useSelector(state => state.HelpDetail)

    return (
        <View>
            <H4 style={{ marginBottom: 16 }} title="Inisiator" />
            <View style={{
                position: 'relative',
                borderRadius: 10,
                backgroundColor: 'white',
                padding: 16,
                marginBottom: 40
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <ProfilePicture img={HelpDetailReducer.help.user.photo} />
                        <View style={{ marginLeft: 16 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Small title={HelpDetailReducer.help.user.name} style={{ marginBottom: 8, marginRight: 9 }} />
                                <VerifiedIcon />
                            </View>
                            <Small title={HelpDetailReducer.help.user.profession} color={Colors.grey} />
                        </View>
                    </View>
                    <UserIcon />

                </View>
            </View>
            <H4 style={{ marginBottom: 16 }} title="Deskripsi" />
            <View>
                <View style={{
                    position: 'relative',
                    borderRadius: 10,
                    backgroundColor: 'white',
                    padding: 16,
                    marginBottom: 40
                }}>
                    <P color={Colors.darkGrey} title={HelpDetailReducer.help.description} />
                </View>
            </View>
            <H4 style={{ marginBottom: 16 }} title="Mereka Yang Bangkit" />
            <View style={{
                position: 'relative',
                borderRadius: 10,
                backgroundColor: 'white',
                padding: 16,
                marginBottom: 16
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 20
                }}>
                    <ProfilePicture img={''} />
                    <View style={{ marginLeft: 16 }}>
                        <Small title="Arya Rizky" style={{ marginBottom: 8 }} />
                        <Small title="2 jam lalu" color={Colors.grey} />
                    </View>
                </View>
                <P color={Colors.darkGrey} title="Terimakasih" />
            </View>
            <View style={{
                position: 'relative',
                borderRadius: 10,
                backgroundColor: 'white',
                padding: 16,
                marginBottom: 16
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 20
                }}>
                    <ProfilePicture img={''} />
                    <View style={{ marginLeft: 16 }}>
                        <Small title="Arya Rizky" style={{ marginBottom: 8 }} />
                        <Small title="2 jam lalu" color={Colors.grey} />
                    </View>
                </View>
                <P color={Colors.darkGrey} title="Terimakasih" />
            </View>
        </View>
    )
}

export default HelpDetailContent

const styles = StyleSheet.create({})
