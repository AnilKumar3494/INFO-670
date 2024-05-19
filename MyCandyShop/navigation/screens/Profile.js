import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
    const navigation = useNavigation();

    const goToEditProfile = () => {
        navigation.navigate("EditProfile");
    };

    const goToNewHomeScreen = () => {
        navigation.navigate("Home");
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.profileImage}
                source={{ uri: 'https://example.com/profile-picture.jpg' }}
            />
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.bio}>Member since 2024.</Text>
            <View style={styles.contactContainer}>
                <Text style={styles.contactText}>Email: johndoe@example.com</Text>
                <Text style={styles.contactText}>Phone: +1234567890</Text>
            </View>
            <TouchableOpacity
                style={styles.editButton}
                onPress={goToEditProfile}
                accessibilityLabel="Edit Profile"
            >
                <Text style={styles.editButtonText}>Edit Profile</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    name: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    bio: {
        fontSize: 16,
        color: 'gray',
        marginVertical: 10,
        textAlign: 'center',
    },
    contactContainer: {
        marginVertical: 20,
    },
    contactText: {
        fontSize: 16,
    },
    editButton: {
        marginTop: 30,
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
    },
    editButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});
