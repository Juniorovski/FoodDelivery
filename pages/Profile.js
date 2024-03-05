import React from 'react'
import { View,Text } from 'react-native';
import { Box_Login, Container, FieldAlter, FieldLogout, LogoutBottom, Logout_Text, PictureProfile, RedirectedBottom, Simple_Text, Text_View } from '../style/ProfileStyle';
import { Entypo } from '@expo/vector-icons';
import{getAuth, signOut} from 'firebase/auth';
import {auth} from '../firebase/FirebaseConfig'



const Profile = ({navigation}) => {

  const Logout =()=>{
    signOut(auth).then(()=>{
       navigation.navigate('SignIn');
    }).catch((error)=>{
      console.log(error);
    })
  } 

  return (
   <Container>
    <Box_Login>
    <PictureProfile 
    source ={{uri:`https://github.com/dog.png`}}/>
    <Text_View>Junior</Text_View>
    <Simple_Text>test@text.com</Simple_Text>
    </Box_Login>
    <FieldAlter>
      <RedirectedBottom>
        <Entypo name='user' size={25} color={'#ff0000'}/>
        <Simple_Text>My Profile</Simple_Text>
      </RedirectedBottom>

      <RedirectedBottom>
        <Entypo name='folder' size={25} color={'#F83B01'}/>
        <Simple_Text>My Orders</Simple_Text>
      </RedirectedBottom>

      <RedirectedBottom>
        <Entypo name='location-pin' size={25} color={'#F83B01'}/>
        <Simple_Text>Delivery Adress</Simple_Text>
      </RedirectedBottom>

      <RedirectedBottom>
        <Entypo name='wallet' size={25} color={'#F83B01'}/>
        <Simple_Text>Payments Methods</Simple_Text>
      </RedirectedBottom>

      <RedirectedBottom>
        <Entypo name='mail' size={25} color={'#F83B01'}/>
        <Simple_Text>Contact Us</Simple_Text>
      </RedirectedBottom>

      <RedirectedBottom>
        <Entypo name='tools' size={25} color={'#F83B01'}/>
        <Simple_Text>Settings</Simple_Text>
      </RedirectedBottom>

    </FieldAlter>
    <FieldLogout>
    <LogoutBottom 
    onPress={Logout}
    >
      <Entypo name='log-out' size={25} color={'#F83B01'}/>
        <Logout_Text>
          Log out
        </Logout_Text>
      </LogoutBottom>
    </FieldLogout>
   
   </Container>
  )
}

export default Profile;