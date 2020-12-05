import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
    export default function Ala(){

        return(
            
    <View style ={{flex:1}}>
       <Image 
 
 source={require('./assets/al.png')}
 style= {{top:20,right:90}}>

 </Image>
  
  <Image 
  style={{position:"absolute", alignSelf:"center",top:400}}
  source={require('./assets/wel.png')}
  
 ></Image>
 </View>
 )
        }