import React from "react";
import { StyleSheet, Text, View, Image, Pressable, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from "../../CartReducer";

const Cart = ({ navigation }) => {
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();

    const renderCartItems = () => {
        return cart.map((item) => (
            <View key={item.id} style={styles.cartItem}>
                <Image style={styles.cartItemImage} source={{ uri: item.imageUrl }} resizeMode="cover" />
                <Text style={styles.cartItemName}>{item.name}</Text>
                <View style={styles.quantityControl}>
                    <Pressable onPress={() => dispatch(decrementQuantity(item))}><Text style={styles.quantityText}>-</Text></Pressable>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <Pressable onPress={() => dispatch(incrementQuantity(item))}><Text style={styles.quantityText}>+</Text></Pressable>
                </View>
            </View>
        ));
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>My Candy Store</Text>
            <Text style={styles.cartHeading}>Cart Items</Text>
            {renderCartItems()}
        </ScrollView>
    );
}

export default Cart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F0F0",
        paddingVertical: 20,
        paddingHorizontal: 16,
        paddingBottom: 20,
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
    cartHeading: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
        color: "#333",
    },
    cartItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFF",
        borderRadius: 12,
        marginBottom: 12,
        padding: 12,
        elevation: 2,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    cartItemImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 12,
    },
    cartItemName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        flex: 1,
    },
    quantityControl: {
        flexDirection: "row",
        alignItems: "center",
    },
    quantityText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 16,
        color: "#333",
    },
})