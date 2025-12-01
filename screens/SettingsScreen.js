"App Version 1.0"
// screens/SettingsScreen.js
import React from 'react';
import { View, Text } from 'react-native';

function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontSize: 18 }}>App Version 1.0</Text>
    </View>
  );
}

export default SettingsScreen;
