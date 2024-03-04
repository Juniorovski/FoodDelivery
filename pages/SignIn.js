import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import app from '../firebase/FirebaseConfig';
import { Bottom, Box_Login, Container, TextButton, Text_Input, Text_View,TextInput, FieldText, Text_makeLogin, RedirectedBottom, Text_Redirect, Simple_Text, Alt_Box_Login, Alternative_Login, Alt_Redirect, FieldInput } from '../style/SignInStyle';
import { Entypo, Feather } from '@expo/vector-icons';


const auth = getAuth(app);
const SigIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
  const loginUser = async()=>{
    try {

      if (!email) {
        console.error('O campo de email está vazio.');
        return; 
      }
       if(!password){
        console.error('Senha invalida! Tente novamente');
        return;
       }

     await signInWithEmailAndPassword(auth,email,password)
      .then((userCredential)=>{
           navigation.navigate('Router')
        const user= userCredential.user;
      })
      .catch((error)=>{
          console.log(error);
      })
      }catch(error){
            console.error("Falhar ao fazer login!");
      }
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
      <Alternative_Login>
        <Entypo name='google-drive' color={'blue'} size={30}/>
        <Alt_Redirect>Continue with Google</Alt_Redirect>
      </Alternative_Login>
     </Alt_Box_Login>
   </Container>
  )
}

export default SigIn;
