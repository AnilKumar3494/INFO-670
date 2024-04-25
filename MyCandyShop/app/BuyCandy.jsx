import React, { useState, useLayoutEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const BuyCandy = () => {
  const navigation = useNavigation();

  const candies = [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1638194645412-1d0b4c53ffed?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Chocolate Bar",
    },
    {
      id: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R3VtbXklMjBCZWFyc3xlbnwwfHwwfHx8MA%3D%3D",
      name: "Gummy Bears",
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TG9sbGlwb3B8ZW58MHx8MHx8fDA%3D",
      name: "Lollipop",
    },
    {
      id: 4,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1677706394411-d3f06c3c2458?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FyYW1lbCUyMENoZXd8ZW58MHx8MHx8fDA%3D",
      name: "Caramel Chew",
    },
  ];

  const [cartItems, setCartItems] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = (candy) => {
    const candyExists = cartItems.some((item) => item.id === candy.id);

    if (candyExists) {
      alert("This candy is already in your cart.");
    } else {
      const updatedCartItems = [...cartItems, candy];
      setCartItems(updatedCartItems);
      setShowMessage(true); // Show message when item is added
      setTimeout(() => setShowMessage(false), 2000); // Hide message after 2 seconds
    }
  };

  const goToCartScreen = () => {
    navigation.navigate("CartScreen", { cartItems });
  };

  // Use useLayoutEffect to customize the header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable style={styles.headerButton} onPress={goToCartScreen}>
          <Text style={styles.headerButtonText}>Go To Cart</Text>
        </Pressable>
      ),
    });
  }, [navigation, cartItems]); // Update header button when cartItems change

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Select Your Favorite Candy!</Text>
      {candies.map((candy) => (
        <View key={candy.id} style={styles.candyContainer}>
          <Image style={styles.candyImage} source={{ uri: candy.imageUrl }} />
          <View style={styles.candyDetails}>
            <Text style={styles.candyName}>{candy.name}</Text>
            <Pressable
              style={styles.addToCartButton}
              onPress={() => handleAddToCart(candy)}
            >
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </Pressable>
          </View>
        </View>
      ))}

      {/* Modal for showing item added message */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showMessage}
        onRequestClose={() => setShowMessage(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Item added to cart!</Text>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  candyContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  candyImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  candyDetails: {
    flex: 1,
  },
  candyName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  addToCartButton: {
    backgroundColor: "#ff6347",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  addToCartText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  headerButton: {
    marginRight: 10,
    padding: 8,
  },
  headerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BuyCandy;
