import React, { useState } from 'react';
import { View, Button,Text, StyleSheet } from 'react-native';

export default function ColorChangerApp() {
  const [bgColor, setBgColor] = useState("Red"); // default background color

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
          <Text style={styles.title}>Color Changer App</Text>
      <Button title="Pink" onPress={() => setBgColor('pink')} />
      <View style={{ height: 10 }} />  
      <Button title="Light Blue" onPress={() => setBgColor('lightblue')} />
      <View style={{ height: 10 }} /> 
      <Button title="Light Green" onPress={() => setBgColor('lightgreen')} />
       <View style={{ height: 10 }} />
      <Button title="Yellow" onPress={() => setBgColor('yellow')} />
      <View style={{ height: 10 }} />
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // vertical center
    alignItems: 'center',      // horizontal center
    padding: 20,
  },
  title: { fontSize: 24, marginBottom: 20 },
});