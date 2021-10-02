import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { ProfilePicture, P, Small } from '../../../components'
import { StackActions } from '@react-navigation/native'
import ChatIcon from '../../../assets/icon/chat-2.svg'
import CheckIcon from '../../../assets/icon/check.svg'
import { Colors } from '../../../utils'
import { useNavigation } from '@react-navigation/native';

const HelpRequests = () => {
    const navigation = useNavigation(); 
    return (
        <View>
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
                    <ProfilePicture img={require('../../../assets/picture/tirta.png')} />
                    <View style={{ marginLeft: 16 }}>
                        <Small title="Arya Rizky" style={{ marginBottom: 8 }} />
                        <Small title="2 jam lalu" color={Colors.grey} />
                    </View>
                    <View style={{
                        position: 'absolute',
                        flexDirection: 'row',
                        right: 16
                    }}>
                        <CheckIcon />
                        <TouchableOpacity onPress={() => navigation.navigate('ChatRoom')}>
                            <ChatIcon style={{ marginLeft: 24 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <P color={Colors.darkGrey} title="Saya butuh uang buat makan" />
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
                    <ProfilePicture img={require('../../../assets/picture/tirta.png')} />
                    <View style={{ marginLeft: 16 }}>
                        <Small title="Arya Rizky" style={{ marginBottom: 8 }} />
                        <Small title="2 jam lalu" color={Colors.grey} />
                    </View>
                    <View style={{
                        position: 'absolute',
                        flexDirection: 'row',
                        right: 16
                    }}>
                        <CheckIcon />
                       <TouchableOpacity>
                            <ChatIcon style={{ marginLeft: 24 }} />
                        </TouchableOpacity> 
                    </View>
                </View>
                <P color={Colors.darkGrey} title="Saya butuh uang buat makan" />
            </View>

        </View>

    )
}

export default HelpRequests

const styles = StyleSheet.create({})
