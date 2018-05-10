import React from 'react';
import { View, Image, Text, ScrollView, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import logo from '../images/screen.png';
import menuIcon from '../images/kebabmenu.png';
import home from '../images/home.png';
import camera from '../images/camera.png';
import user from '../images/user.png';

const MainView = ({children}) => (
  <View style={styles.container}>
    <View style={styles.topLine}>
      <Image source={logo} style={styles.logo} />
      <Image source={menuIcon} style={styles.menuIcon} />
    </View>
    <View style={{ flex: 18 }}>
      {children}
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderTopWidth: 1,}}>
      <TouchableOpacity style={{padding: 5}}>
        <Image source={home} style={styles.bottomIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={{padding: 5}}>
        <Image source={camera} style={styles.bottomIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={{padding: 5}}>
        <Image source={user} style={styles.bottomIcon} />
      </TouchableOpacity>

    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 20,
  },
  logo: {
    width: 200,
    height: 50,
  },
  menuIcon: {
    width: 50,
    height: 50,
  },
  topLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  bottomLine: {
    borderTopWidth: 5,
    flex: 1,
  },
  bottomIcon: {
    width: 40,
    height: 40,
  },
});

export default MainView;
