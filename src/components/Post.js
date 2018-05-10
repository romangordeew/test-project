import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import swiper1 from '../images/swiper1.jpg'
import swiper2 from '../images/swiper2.jpg'
import swiper3 from '../images/swiper3.jpeg'
import like from '../images/like.png';
import dislike from '../images/dislike.png';
import message from '../images/message.png';

const Post = () => (
  <View style={{ flex: 1 }}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 5 }}>
      <View>
        <Text style={{ fontWeight: 'bold' }}>Paul Hargrave</Text>
        <Text>Gardner, MA</Text>
      </View>
      <View>
        <Text style={{ fontWeight: 'bold' }}>SHARE</Text>
      </View>
    </View>
    <Swiper containerStyle={{ height: 300 }}>
      <View style={styles.slide1}>
        <Image source={swiper1} />
      </View>
      <View style={styles.slide2}>
        <Image source={swiper2} />
      </View>
      <View style={styles.slide3}>
        <Image source={swiper3} resizeMode="stretch" />
      </View>
    </Swiper>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5, }}>
      <View style={{ flexDirection: 'row', }}>
        <TouchableOpacity>
          <Image source={message} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={like} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={dislike} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={like} style={styles.icon} />
          <Text>31</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={dislike} style={styles.icon}/>
          <Text>13</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={{ marginLeft: 5 }}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontWeight: 'bold' }}>Aaron Draplin</Text>
        <Text style={{ marginLeft: 5 }}>lol</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontWeight: 'bold' }}>Liam Moran</Text>
        <Text style={{ marginLeft: 5 }}>someone forget something at the jobsite?</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontWeight: 'bold' }}>Clint Venaria</Text>
        <Text style={{ marginLeft: 5 }}>love this</Text>
      </View>
    </View>
    <View style={{ marginLeft: 5, marginVertical: 10 }}>
      <Text style={{ textDecorationLine: 'underline' }}>See All Comments</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {
  },
  icon: {
    width: 30,
    height: 30,
    margin: 5,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

export default Post;