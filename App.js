import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";

const restaurants = [
  {
    id: "1",
    name: "Burger Hub",
    rating: "4.5",
    time: "25-30 min",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    menu: [
      { id: "m1", name: "Cheese Burger", price: 99 },
      { id: "m2", name: "Veg Burger", price: 79 },
      { id: "m3", name: "French Fries", price: 59 },
    ],
  },
  {
    id: "2",
    name: "Pizza Point",
    rating: "4.7",
    time: "30-40 min",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    menu: [
      { id: "m4", name: "Margherita Pizza", price: 149 },
      { id: "m5", name: "Farmhouse Pizza", price: 199 },
      { id: "m6", name: "Cold Drink", price: 49 },
    ],
  },
  {
    id: "3",
    name: "Roll Express",
    rating: "4.3",
    time: "20-25 min",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    menu: [
      { id: "m7", name: "Paneer Roll", price: 89 },
      { id: "m8", name: "Veg Roll", price: 69 },
      { id: "m9", name: "Momos", price: 70 },
    ],
  },
];

export default function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (selectedRestaurant) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />

        <TouchableOpacity onPress={() => setSelectedRestaurant(null)}>
          <Text style={styles.back}>← Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>{selectedRestaurant.name}</Text>
        <Text style={styles.subtitle}>
          ⭐ {selectedRestaurant.rating} • {selectedRestaurant.time}
        </Text>

        <Text style={styles.sectionTitle}>Menu</Text>

        <FlatList
          data={selectedRestaurant.menu}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.menuCard}>
              <View>
                <Text style={styles.foodName}>{item.name}</Text>
                <Text style={styles.price}>₹{item.price}</Text>
              </View>

              <TouchableOpacity
                style={styles.addButton}
                onPress={() => addToCart(item)}
              >
                <Text style={styles.addButtonText}>ADD</Text>
              </TouchableOpacity>
            </View>
          )}
        />

        <View style={styles.cartBar}>
          <Text style={styles.cartText}>
            Cart: {cart.length} items • ₹{total}
          </Text>

          <TouchableOpacity style={styles.orderButton}>
            <Text style={styles.orderButtonText}>Order Now</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.appName}>Fast Food : Delivery</Text>
      <Text style={styles.tagline}>Fast food at your doorstep 🚀</Text>

      <Text style={styles.sectionTitle}>Restaurants Near You</Text>

      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.restaurantCard}
            onPress={() => setSelectedRestaurant(item)}
          >
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.cardContent}>
              <Text style={styles.restaurantName}>{item.name}</Text>
              <Text style={styles.details}>
                ⭐ {item.rating} • {item.time}
              </Text>
              <Text style={styles.offer}>50% OFF up to ₹100</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff7ed",
  },
  appName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ea580c",
    marginTop: 20,
  },
  tagline: {
    fontSize: 15,
    color: "#555",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 14,
    color: "#111827",
  },
  restaurantCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 160,
  },
  cardContent: {
    padding: 14,
  },
  restaurantName: {
    fontSize: 21,
    fontWeight: "bold",
  },
  details: {
    color: "#555",
    marginTop: 4,
  },
  offer: {
    color: "#16a34a",
    marginTop: 8,
    fontWeight: "bold",
  },
  back: {
    fontSize: 18,
    color: "#ea580c",
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
  },
  subtitle: {
    color: "#555",
    marginTop: 4,
  },
  menuCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
  },
  foodName: {
    fontSize: 18,
    fontWeight: "600",
  },
  price: {
    color: "#555",
    marginTop: 5,
  },
  addButton: {
    backgroundColor: "#ea580c",
    paddingHorizontal: 18,
    paddingVertical: 9,
    borderRadius: 10,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  cartBar: {
    backgroundColor: "#111827",
    padding: 14,
    borderRadius: 16,
    marginTop: 10,
  },
  cartText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  orderButton: {
    backgroundColor: "#ea580c",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  orderButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
