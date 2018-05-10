import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import MainView from './src/components/MainView';
import swiper1 from './src/images/swiper1.jpg'
import swiper2 from './src/images/swiper2.jpg'
import swiper3 from './src/images/swiper3.jpeg'
import like from './src/images/like.png';
import dislike from './src/images/dislike.png';
import message from './src/images/message.png';
import Post from './src/components/Post';

const n = 30;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainView>
          <ScrollView>
            {[...Array(n)].map((e, i) => <Post key={i} />)}
            {/*<View style={{ flex: 1 }}>*/}
              {/*<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 5 }}>*/}
                {/*<View>*/}
                  {/*<Text style={{ fontWeight: 'bold' }}>Paul Hargrave</Text>*/}
                  {/*<Text>Gardner, MA</Text>*/}
                {/*</View>*/}
                {/*<View>*/}
                  {/*<Text style={{ fontWeight: 'bold' }}>SHARE</Text>*/}
                {/*</View>*/}
              {/*</View>*/}
              {/*<Swiper containerStyle={{ height: 300 }}>*/}
                {/*<View style={styles.slide1}>*/}
                  {/*<Image source={swiper1} />*/}
                {/*</View>*/}
                {/*<View style={styles.slide2}>*/}
                  {/*<Image source={swiper2} />*/}
                {/*</View>*/}
                {/*<View style={styles.slide3}>*/}
                  {/*<Image source={swiper3} resizeMode="stretch" />*/}
                {/*</View>*/}
              {/*</Swiper>*/}
              {/*<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5, }}>*/}
                {/*<View style={{ flexDirection: 'row', }}>*/}
                  {/*<Image source={message} style={styles.icon} />*/}
                  {/*<Image source={like} style={styles.icon} />*/}
                  {/*<Image source={dislike} style={styles.icon} />*/}
                {/*</View>*/}
                {/*<View style={{ flexDirection: 'row' }}>*/}
                  {/*<View style={{ flexDirection: 'row', alignItems: 'center' }}>*/}
                    {/*<Image source={like} style={styles.icon} />*/}
                    {/*<Text>31</Text>*/}
                  {/*</View>*/}
                  {/*<View style={{ flexDirection: 'row', alignItems: 'center' }}>*/}
                    {/*<Image source={dislike} style={styles.icon}/>*/}
                    {/*<Text>13</Text>*/}
                  {/*</View>*/}
                {/*</View>*/}
              {/*</View>*/}
              {/*<View style={{ marginLeft: 5 }}>*/}
                {/*<View style={{ flexDirection: 'row' }}>*/}
                  {/*<Text style={{ fontWeight: 'bold' }}>Aaron Draplin</Text>*/}
                  {/*<Text style={{ marginLeft: 5 }}>lol</Text>*/}
                {/*</View>*/}
                {/*<View style={{ flexDirection: 'row' }}>*/}
                  {/*<Text style={{ fontWeight: 'bold' }}>Liam Moran</Text>*/}
                  {/*<Text style={{ marginLeft: 5 }}>someone forget something at the jobsite?</Text>*/}
                {/*</View>*/}
                {/*<View style={{ flexDirection: 'row' }}>*/}
                  {/*<Text style={{ fontWeight: 'bold' }}>Clint Venaria</Text>*/}
                  {/*<Text style={{ marginLeft: 5 }}>love this</Text>*/}
                {/*</View>*/}
              {/*</View>*/}
              {/*<View style={{ marginLeft: 5, marginVertical: 10 }}>*/}
                {/*<Text style={{ textDecorationLine: 'underline' }}>See All Comments</Text>*/}
              {/*</View>*/}
            {/*</View>*/}
          </ScrollView>
        </MainView>
      </View>
    );
  }
}

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
