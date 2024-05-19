import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, ScrollView, TouchableOpacity, Modal } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../CartReducer";

const candies = [
    {
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1638194645412-1d0b4c53ffed?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Chocolate Bar",
        price: 4.99
    },
    {
        id: 2,
        imageUrl: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R3VtbXklMjBCZWFyc3xlbnwwfHwwfHx8MA%3D%3D",
        name: "Gummy Bears",
        price: 3.99
    },
    {
        id: 3,
        imageUrl: "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TG9sbGlwb3B8ZW58MHx8MHx8fDA%3D",
        name: "Lollipop",
        price: 2.99
    },
    {
        id: 4,
        imageUrl: "https://plus.unsplash.com/premium_photo-1677706394411-d3f06c3c2458?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FyYW1lbCUyMENoZXd8ZW58MHx8MHx8fDA%3D",
        name: "Caramel Chew",
        price: 4.99
    },
    {
        id: 5,
        imageUrl: "https://images.unsplash.com/photo-1581798269145-7512508289b9?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SmVsbHklMjBCZWFuc3xlbnwwfHwwfHx8MA%3D%3D",
        name: "Jelly Beans",
        price: 2.99
    },
    {
        id: 6,
        imageUrl: "https://plus.unsplash.com/premium_photo-1669790759947-a699d123bd0c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UGVwcGVybWludCUyMFN0aWNrfGVufDB8fDB8fHww",
        name: "Peppermint Stick",
        price: 1.5
    },
    {
        id: 7,
        imageUrl: "https://res.cloudinary.com/nassau-candy/image/upload/c_fit,w_300,h_300,f_auto/1946.jpg",
        name: "Toffee Crunch",
        price: 6.99
    },
    {
        id: 8,
        imageUrl: "https://images.unsplash.com/photo-1629984627353-a8580d9a1a92?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Um9jayUyMENhbmR5fGVufDB8fDB8fHww",
        name: "Rock Candy",
        price: 1.99
    },
    {
        id: 9,
        imageUrl: "https://images.unsplash.com/photo-1611586360741-930bc2c731bc?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWFyc2htYWxsb3clMjBUd2lzdHxlbnwwfHwwfHx8MA%3D%3D",
        name: "Marshmallow Twist",
        price: 3.99
    },
    {
        id: 10,
        imageUrl: "https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/5025_SourPatchKids_p-zuo5bhlq-zoom.jpg",
        name: "Sour Patch Kids",
        price: 1.99
    },
];

const CandyItem = ({ item, inCart, onCartAction, onImagePress }) => (
    <View style={styles.itemContainer}>
        <Pressable onPress={() => onImagePress(item.imageUrl)}>
            <Image style={styles.image} source={{ uri: item.imageUrl }} resizeMode="cover" />
        </Pressable>
        <View style={styles.itemDetails}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
            <Pressable style={styles.addToCartButton} onPress={() => onCartAction(item)}>
                <Text style={styles.addToCartButtonText}>{inCart ? "REMOVE FROM CART" : "ADD TO CART"}</Text>
            </Pressable>
        </View>
    </View>
);

const ImageModal = ({ imageUrl, onClose }) => (
    <Modal visible={!!imageUrl} transparent={true} onRequestClose={onClose}>
        <View style={styles.modalContainer}>
            <Image style={styles.fullscreenImage} source={{ uri: imageUrl }} resizeMode="contain" />
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
        </View>
    </Modal>
);

const NewHomeScreen = () => {
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    const [fullImageUrl, setFullImageUrl] = useState(null);

    const handleCartAction = (item) => {
        const isInCart = cart.some((value) => value.id === item.id);
        if (isInCart) {
            dispatch(removeFromCart(item));
        } else {
            dispatch(addToCart(item));
        }
    };

    const renderCandyItems = () => {
        return candies.map((item) => (
            <CandyItem
                key={item.id}
                item={item}
                inCart={cart.some((value) => value.id === item.id)}
                onCartAction={handleCartAction}
                onImagePress={setFullImageUrl}
            />
        ));
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>My Candy Store</Text>
            <Text style={styles.subHeader}>Choose Your Favorite Candy!</Text>
            {renderCandyItems()}
            <ImageModal imageUrl={fullImageUrl} onClose={() => setFullImageUrl(null)} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F0F0",
        paddingVertical: 20,
        paddingHorizontal: 16,
    },
    header: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
        color: "#333",
    },
    subHeader: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#666",
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFF",
        borderRadius: 12,
        marginBottom: 16,
        padding: 12,
        elevation: 2,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 12,
    },
    itemDetails: {
        flex: 1,
    },
    itemName: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 4,
    },
    itemPrice: {
        fontSize: 16,
        color: "#666",
        marginBottom: 8,
    },
    addToCartButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "#007BFF",
        borderRadius: 8,
        alignItems: "center",
    },
    addToCartButtonText: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 14,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        justifyContent: "center",
        alignItems: "center",
    },
    fullscreenImage: {
        width: "90%",
        height: "90%",
    },
    closeButton: {
        position: "absolute",
        top: 20,
        right: 20,
        backgroundColor: "#FFF",
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        fontSize: 16,
        color: "#333",
    },
});

export default NewHomeScreen;
