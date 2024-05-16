import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cart = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}
            >Cart Screen</Text>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({})