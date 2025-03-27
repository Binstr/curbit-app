import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Earnings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Earnings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold' },
});