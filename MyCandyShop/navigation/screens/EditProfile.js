import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, KeyboardAvoidingView, ScrollView } from 'react-native';


const EditProfile = ({ navigation }) => {
    const [profileImage, setProfileImage] = useState('');
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSave = () => {
        if (!name || !email || !phone) {
            Alert.alert('Error', 'Name, Email, and Phone are required fields.');
            return;
        }
        // Save the profile data
        navigation.goBack();
    }

    return (
        <ScrollView style={styles.container} behavior="padding" >


            <Text style={styles.label}>Name:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter Name"
                accessibilityLabel="Name"
            />
            <Text style={styles.label}>Bio:</Text>
            <TextInput
                style={styles.input}
                value={bio}
                onChangeText={setBio}
                placeholder="Enter Bio"
                accessibilityLabel="Bio"
            />
            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter Email"
                keyboardType="email-address"
                textContentType="emailAddress"
                accessibilityLabel="Email"
            />
            <Text style={styles.label}>Phone:</Text>
            <TextInput
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
                placeholder="Enter Phone Number"
                keyboardType="phone-pad"
                textContentType="telephoneNumber"
                accessibilityLabel="Phone"
            />
            <Button title="Save" onPress={handleSave} accessibilityLabel="Save Profile" />
        </ScrollView>
    );
}

export default EditProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 16,
        marginVertical: 10,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        fontSize: 16,
    },
});
