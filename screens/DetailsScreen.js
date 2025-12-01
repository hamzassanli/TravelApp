// screens/DetailsScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

function DetailsScreen({ route, navigation }) {
  const { place, rating } = route.params;

  let ratingMessage = 'Nice place to visit.';
  if (rating === 5) {
    ratingMessage = 'Top rated destination! 🌟';
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 8 }}>
        Welcome to {place}
      </Text>
      <Text style={{ fontSize: 18 }}>Rating: {rating} / 5</Text>
      <Text style={{ fontSize: 16, marginBottom: 16 }}>{ratingMessage}</Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default DetailsScreen;
