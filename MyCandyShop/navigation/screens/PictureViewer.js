import React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";

const PictureViewer = ({ imageUrl, onClose }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: imageUrl }} resizeMode="contain" />
                <Pressable style={styles.closeButton} onPress={onClose}>
                    <Text style={styles.closeButtonText}>Back</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    imageContainer: {
        width: "80%",
        height: "80%",
        backgroundColor: "#FFF",
        borderRadius: 12,
        overflow: "hidden",
    },
    image: {
        flex: 1,
    },
    closeButton: {
        position: "absolute",
        top: 16,
        left: 16,
        backgroundColor: "#333",
        padding: 8,
        borderRadius: 8,
    },
    closeButtonText: {
        color: "#FFF",
        fontWeight: "bold",
    },
});

export default PictureViewer;
