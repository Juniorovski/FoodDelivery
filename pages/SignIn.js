import { GoogleAuthProvider, signInWithEmailAndPassword} from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Bottom, Box_Login, Container, TextButton, Text_Input, Text_View,TextInput, FieldText, Text_makeLogin, RedirectedBottom, Text_Redirect, Simple_Text, Alt_Box_Login, Alternative_Login, Alt_Redirect, FieldInput } from '../style/SignInStyle';
import { Entypo, Feather } from '@expo/vector-icons';
import { auth } from '../firebase/FirebaseConfig';


const SigIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
  const loginUser = async()=>{
    try {

      if ( !email || !password) {
        console.error('Preencha todos os campos!');
        return;
      }
      
     await signInWithEmailAndPassword(auth,email,password)
      .then((userCredential)=>{
           navigation.navigate('Router')
        const user = userCredential.user;
      })
      .catch((error)=>{
          console.log(error);
      })
      }catch(error){
            console.error("Falhar ao fazer login!");
      }
  }

  const login_Google=()=>{
    const provider = new GoogleAuthProvider();
    console.log(provider)
  }
  return (
   <Container>
    <Box_Login>
      <Text_View>Login</Text_View>
      
      <TextInput>Email</TextInput>
      <FieldInput>
      <Text_Input
        editable={true}
        placeholder='ex:jhonRipper@gmail.com'
        keyboardType='email-address'
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={setEmail}
        value={email}
        />
        <Entypo name='user' color={'#c1c1c1'} size={25}/>
      </FieldInput>
        
        <TextInput>Password</TextInput>
        <FieldInput>
        <Text_Input
         editable={true}
         placeholder='ex:jhon123'
         onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        />
        <Entypo name='eye' color={'#c1c1c1'} size={25}/>
        </FieldInput>
      
        <Bottom
        onPress={loginUser}>
          <TextButton>Login</TextButton>
        </Bottom>
  
        <FieldText>
          <Text_makeLogin>Don´t have an account?</Text_makeLogin>
          <RedirectedBottom
          onPress={()=>
            navigation.navigate('SignUp')}
          >
            <Text_Redirect>Sign Up</Text_Redirect>
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
      <Alternative_Login
       onPress={login_Google}
      >
        <Entypo name='google-drive' color={'blue'} size={30}/>
        <Alt_Redirect>Continue with Google</Alt_Redirect>
      </Alternative_Login>
     </Alt_Box_Login>
   </Container>
  )
}

export default SigIn;
