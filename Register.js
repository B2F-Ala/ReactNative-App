import React from 'react'
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
    export default function Register({navigation}){

        return(
            
    <View style={ala.container}>
    
    <TouchableOpacity style={ala.imagep}>
        <Image source={require('./assets/flech.png')} style={ala.imagep} onPress={() => navigation.navigate('Ala')}/>
      </TouchableOpacity>

 
      <TouchableOpacity style={ala.imagep}>
  <Image source={require('./assets/Groupe.png')}
  style={ala.image} onPress={() => navigation.navigate('Ala')}/>
 


  </TouchableOpacity>
  <Text style={ala.log}>Register</Text>
  <KeyboardAvoidingView
behavior="padding">
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
  <TouchableOpacity style={ala.but}  onPress={()=>{
      navigation.navigate('Ala');
     }}
>
    <Text
     style={ala.Text}
    
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
      justifyContent:'flex-end',

    },
    imagep:{
      position:"absolute",top:20,margin:1,
      left:1,
      right:1,
      flex:1,
   



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