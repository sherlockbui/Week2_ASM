
import React, {Component} from 'react';
import {
  StyleSheet, View, Text, Image,TouchableOpacity,FlatList
} from 'react-native';
import avatarImage from './assets/avatar.jpg';
import Constants from 'expo-constants';
import { Feather,Ionicons, AntDesign } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';
const imgData = [
    { id: 1, imgSource: require('./assets/1.jpg') },
    { id: 2, imgSource: require('./assets/2.jpg') },
    { id: 3, imgSource: require('./assets/3.jpg') },
    { id: 4, imgSource: require('./assets/4.jpg') },
    { id: 5, imgSource: require('./assets/5.jpg') },
    { id: 6, imgSource: require('./assets/6.jpg') }
];
class App extends Component{
  static navigationOptions = {
    headerLeft:<Ionicons name ='ios-arrow-back' size={22} style={{marginLeft: 20}}/>,
    headerRight:<AntDesign name= 'appstore-o' size={22} style={{marginRight:20}} />
  };
  render(){
  return (
      <View style ={styles.container}>
        <View style = {styles.headerGroup}>
          <View style = {styles.imageWrapper}>
            <Image source ={avatarImage} style={styles.avatarImg}/>
          </View>
          <View style = {styles.userInfo}>
            <Text style = {styles.nameText}>Bui Manh Hieu</Text>
            <Text style ={styles.jobText}>Ăn chơi bốn mùa</Text>
            <View style = {styles.buttonWrapper}>
              <TouchableOpacity style = {styles.followButton}>
                <Text style = {styles.followText}>Follow</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.sendMessageButton}>
                <Feather name= 'send' size={24} color='#fff'></Feather>
              </TouchableOpacity>  
            </View>
            
          </View>
        </View>
        <View style = {styles.countLikeGroup}>
          <View style = {styles.countGroup}>
            <Text style ={styles.countText}>210</Text>
            <Text style = {styles.countLabel}>Photos</Text>
          </View>

          <View style = {styles.countGroup}>
            <Text style ={styles.countText}>15k</Text>
            <Text style = {styles.countLabel}>Photos</Text>
          </View>

          <View style = {styles.countGroup}>
            <Text style ={styles.countText}>605</Text>
            <Text style = {styles.countLabel}>Following</Text>
          </View>
          </View>       
        <View style = {styles.imageGroup}>
          <FlatList data= {imgData} 
          numColumns={2}
          renderItem={({item}) => <Image style={styles.imageContent} source={item.imgSource}/>}
          keyExtractor = {(item)=>`${item.id}`}
          contentContainerStyle={{alignItems:'center'}} 
          
          ></FlatList>
        </View>
      </View>
  );
};
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
  headerGroup:{
    flexDirection:'row',
    flex: 0.2,
  
  },
  countLikeGroup:{
    flex: 0.15,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center'
  },
  imageGroup:{
    flex: 0.65,

  },
  imageWrapper:{
    justifyContent: 'center',
    flex: 0.4,
    alignItems: 'center',
  },
  avatarImg:{
    width:140,
    height:140,
    borderRadius:70,
  },
  userInfo:{
    flex:0.6,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  followButton:{
    backgroundColor: FOLLOW_COLOR,
    width:120,
    height: 40,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 30,
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

elevation: 5,
  },
  followText:{
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
  sendMessageButton:{
    backgroundColor:SEND_MESSAGE_COLOR,
    width: 50,
    height: 40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 18,
    marginLeft:5,
  },
  buttonWrapper:{
    flexDirection: 'row',
    marginTop: 20,
  },
  nameText:{
    fontSize:26,
    fontWeight: 'bold',
    color: POLO_BLUE_COLOR,
  },
  jobText:{
    fontSize:16,
    fontWeight: 'bold',
    color: 'gray' 
  },
  countGroup:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',

  },
  countText:{
    fontSize:25,
    fontWeight: 'bold',
    color: POLO_BLUE_COLOR
  },
  countLabel:{
    fontSize: 16,
    fontWeight:'400',
    color:'gray',
    
  },
  imageContent:{
    width: 180,
    height:180,
    margin: 10,
    borderRadius: 20,
  }
});
const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
  },
});

export default createAppContainer(AppNavigator);
