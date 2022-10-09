import React, { Component, useState } from 'react';
import { Text, View, Linking, Image, TextInput, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import Button from './Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 240,
    height: 360
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 10,
  },
  button: {
    margin: 10,
  },
  textInput: {
    color: 'grey',
    textAlign: 'center',
    width: 200,
  }
});

function handleButtonPress(url) {
  WebBrowser.openBrowserAsync(url);
}

function renderButton(title, url) {
  return (
    <Button info style={styles.button} onPress={() => handleButtonPress(url)}>
      {title}
    </Button>
  )
}

function ArtInstitiuteOfChicago() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('./assets/art.png')} />
      {renderButton('More Information', 'https://www.artic.edu/')}
    </View>
  );
}

function MagnificentMile() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('./assets/mile.png')} />
      {renderButton('More Information', 'https://www.themagnificentmile.com/')}
    </View>
  );
}

function NavyPier() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('./assets/pier.png')} />
      {renderButton('More Information', 'https://navypier.org/')}
    </View>
  );
}

function WaterTower() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('./assets/water.png')} />
      {renderButton('More Information', 'https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html')}
    </View>
  );
}

function WillisTower() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('./assets/willis.png')} />
      {renderButton('More Information', 'https://www.willistower.com/')}
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Art Institiute Of Chicago" component={ArtInstitiuteOfChicago} />
        <Drawer.Screen name="Magnificent Mile" component={MagnificentMile} />
        <Drawer.Screen name="Navy Pier" component={NavyPier} />
        <Drawer.Screen name="Water Tower" component={WaterTower} />
        <Drawer.Screen name="Willis Tower" component={WillisTower} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
