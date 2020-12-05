import React from 'react'
import { Button, Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
    export default function Login({navigation}){

        return(
    <View style={ala.container}>
  <Image source={require('./assets/Groupe.png')}
  style={ala.image}
 >

  </Image>
  <Text style={ala.log}>Login</Text>
  <KeyboardAvoidingView
  behavior="padding"
  >
  <TouchableOpacity style={ala.touch}>
    <TextInput
    style={ala.TextInput}
    placeholder="Email"

    ></TextInput>
  </TouchableOpacity >
  <TouchableOpacity style={ala.touch}>
    <TextInput
     style={ala.TextInput}
    placeholder="Password"

    ></TextInput>
  </TouchableOpacity>
  <TouchableOpacity style={ala.but}>
    <Text
     style={ala.Text}
    onPress={()=>{
     navigation.navigate('Register');
    }}

    >Login</Text>
  </TouchableOpacity>
  </KeyboardAvoidingView>
  
 </View>
    
);

}
const ala =StyleSheet.create(
  {
    container:{
      flex:1,
      justifyContent: "center"

    },
    image:{
     width:windowWidth,
      height:windowHeight/2,
      
    },
    log:{
      fontSize:60,
    alignSelf:"center",
    marginBottom:70,
    top:40,
    color:"#55497D",

    },
    touch:{
      height:55,
      width:windowWidth-40,
      alignSelf:"center",
      borderWidth:1,
      borderRadius:35,
      marginBottom:10
    },
    TextInput:{
      fontSize:20,
      left:20,
      top:10
    },
    Text:{
color:"#fff",
fontSize:30,
alignSelf:"center"


    },
    but:{
      height:45,
      width:windowWidth/3,
      backgroundColor:"#55497D",
      alignSelf:"center",
      borderRadius:20

    }
  }
)