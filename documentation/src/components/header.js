import React from 'react';
import { View, Text, StyleSheet } from 'react-native-web';

export default function Header() {
  return (
    <View style={styles.root}>
      <Text style={{ fontWeight: 500, fontSize: 24 }}>
        Vision UI Documentation
      </Text>
    </View>
  );
}

let styles = StyleSheet.create({
  root: {
    borderBottomWidth: 1,
    borderColor: '#ececec',
    padding: 20,
  },
});
