import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react'
import app from '../firebase/FirebaseConfig';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Bottom, Box_Login, Container, TextButton, Text_Input, Text_View,TextInput, FieldText, Text_makeLogin, RedirectedBottom, Text_Redirect, Simple_Text, Alt_Box_Login, Alternative_Login, Alt_Redirect, FieldInput } from '../style/SignInStyle';
import { Entypo, Feather } from '@expo/vector-icons';
import { Alert } from 'react-native';
const auth = getAuth(app);


const SignUp = ({navigation}) => {
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    const saveUser = ({navigation}) =>{
        try {
            if(!email){
                alert('campo vazio!');
            }
            
            createUserWithEmailAndPassword(auth,email,password)
            .then((userCredential)=>{
             navigation.navigate('router');
                const user = userCredential.user;
            })
            
           } catch (error) {
            console.log(error);
            Alert.alert('error',error)
           }
    }
    
  return (
    <Container>
    <Box_Login>
      <Text_View>Sign Up</Text_View>

      <TextInput>Name</TextInput>
      <FieldInput>
      <Text_Input
        editable={true}
        onChangeText={setName}
        value={name}
        placeholder='ex:jhonRipper'
        type="text"
        />
        <Entypo name='user' color={'#c1c1c1'} size={25}/>
      </FieldInput>
      
      <TextInput>Email</TextInput>
      <FieldInput>
      <Text_Input
        editable={true}
        onChangeText={setEmail}
        value={email}
        placeholder='ex:jhonRipper@gmail.com'
        type="email"
        />
         <Entypo name='user' color={'#c1c1c1'} size={25}/>
      </FieldInput>
        
        <TextInput>Password</TextInput>
        <FieldInput>
        <Text_Input
         editable={true}
         onChangeText={setPassword}
         value={password}
         placeholder='ex:jhon123'
        secureTextEntry={true}
        />
        <Entypo name='eye' size={25} />
        </FieldInput>
        
        <Bottom
        onPress = {saveUser}
        >
          <TextButton>Sign Up</TextButton>
        </Bottom>
        <FieldText>
          <Text_makeLogin>Already have an account?</Text_makeLogin>
          <RedirectedBottom 
          onPress={()=> navigation.navigate('SignIn')}
          >
            <Text_Redirect>Login</Text_Redirect>
          </RedirectedBottom>
        </FieldText>
    </Box_Login>
     <FieldText>
      <Simple_Text>________________ Sign in with ________________</Simple_Text>
     </FieldText>

     <Alt_Box_Login>
      <Alternative_Login>
        <Entypo name='facebook-with-circle' color={'blue'} size={30}/>
        <Alt_Redirect>Continue with facebook</Alt_Redirect>
      </Alternative_Login>
      <Alternative_Login>
        <Entypo name='google-drive' color={'blue'} size={30}/>
        <Alt_Redirect>Continue with Google</Alt_Redirect>
      </Alternative_Login>
     </Alt_Box_Login>
   </Container>
  )
}

export default SignUp;
