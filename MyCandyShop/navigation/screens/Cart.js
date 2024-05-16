import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, incrementQuantity, removeFromCart } from "../../CartReducer";

const Cart = () => {
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        calculateTotalPrice();
    }, [cart]);

    const calculateTotalPrice = () => {
        let total = 0;
        cart.forEach((item) => {
            const itemPrice = parseFloat(item.price);
            if (!isNaN(itemPrice)) {
                total += itemPrice * item.quantity;
            }
        });
        setTotalPrice(total.toFixed(2));
    };

    const renderCartItems = () => {
        return cart.map((item) => {
            const itemPrice = parseFloat(item.price);
            return (
                <View key={item.id} style={styles.cartItem}>
                    <Image style={styles.cartItemImage} source={{ uri: item.imageUrl }} resizeMode="cover" />
                    <View style={styles.itemDetails}>
                        <Text style={styles.cartItemName}>{item.name}</Text>
                        <Text style={styles.cartItemPrice}>${item.price}</Text>
                    </View>
                    <View style={styles.quantityControl}>
                        <Pressable onPress={() => dispatch(decrementQuantity(item))}><Text style={styles.quantityText}>-</Text></Pressable>
                        <Text style={styles.quantityText}>{item.quantity}</Text>
                        <Pressable onPress={() => dispatch(incrementQuantity(item))}><Text style={styles.quantityText}>+</Text></Pressable>
                    </View>
                </View>
            );
        });
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>My Candy Store</Text>
            <Text style={styles.cartHeading}>Cart Items</Text>
            {renderCartItems()}
            <Text style={styles.totalPrice}>Total: ${totalPrice}</Text>
        </ScrollView>
    );
}

export default Cart;

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
    cartHeading: {
        fontSize: 24,
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
    itemDetails: {
        flex: 1,
    },
    cartItemName: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 4,
    },
    cartItemPrice: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    quantityControl: {
        flexDirection: "row",
        alignItems: "center",
    },
    quantityText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 8,
        color: "#333",
    },
    totalPrice: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "right",
        marginTop: 20,
        color: "#333",
    },
});
