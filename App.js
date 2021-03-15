import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';

import Deck from './src/components/Deck';

const DATA = [
  { id: 1, text: 'Card #1', uri: 'https://live.staticflickr.com/3317/4586027323_ea12e37845_b.jpg' },
  { id: 2, text: 'Card #2', uri: 'https://live.staticflickr.com/2779/4217254443_bc383f4b15_b.jpg' },
  { id: 3, text: 'Card #3', uri: 'https://live.staticflickr.com/6203/6122128710_f07c81e7d8_b.jpg' },
  { id: 4, text: 'Card #4', uri: 'https://live.staticflickr.com/8346/8213934035_ae465c60b5_b.jpg' },
  { id: 5, text: 'Card #5', uri: 'https://live.staticflickr.com/7566/16009831076_faee6a0bb7_b.jpg' },
  { id: 6, text: 'Card #6', uri: 'https://live.staticflickr.com/8116/8606654389_e56c706e2c_b.jpg' },
  { id: 7, text: 'Card #7', uri: 'https://live.staticflickr.com/5347/10008643205_dc1f69ba29_b.jpg' },
  { id: 8, text: 'Card #8', uri: 'https://live.staticflickr.com/7564/15594200484_39dba41129_b.jpg' },
];

export default function App() {

  const renderCard = (item) => {
    return (
      <Card key={ item.id }>
        <Card.Image source={{ uri: item.uri }} >
        </Card.Image>
        <Card.Title>{ item. text}</Card.Title>
        <Card.Divider />
        <Text style={{ marginBottom: 10 }}>I can customize the card further.</Text>
        <Button 
          icon={{ name: 'code' }}
          backgroundColor="#03A9F4"
          title="View Now!"
        />
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <Deck 
        data={ DATA } 
        renderCard={renderCard} 
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
