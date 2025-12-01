
// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 16 }}>
        Choose a destination
      </Text>

      <Button
        title="Go to Paris"
        onPress={() =>
          navigation.navigate('Details', { place: 'Paris', rating: 5 })
        }
      />

      <Button
        title="Go to London"
        onPress={() =>
          navigation.navigate('Details', { place: 'London', rating: 4 })
        }
      />
    </View>
  );
}

export default HomeScreen;
