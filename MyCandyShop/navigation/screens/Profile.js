import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}
            >Profile Screen</Text>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})