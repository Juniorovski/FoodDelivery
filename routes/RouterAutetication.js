import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import SigIn from '../pages/SignIn';
import Favorite from '../pages/Favorite';
import Cart from '../pages/Cart';
import Profile from '../pages/Profile';
import { getAuth } from 'firebase/auth';
import app from '../firebase/FirebaseConfig';
import AppRouter from './AppRouter';
import Details from '../pages/Details';

const Stack = createStackNavigator();
const auth = getAuth(app);

const RouterAutetication = () => {

    const [isSignedIn , setIsSignedIn] = useState(false);

    
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(user => {
        setIsSignedIn(!!user);
    });
    return unsubscribe;
  },[]);

    return (
        
    
        <Stack.Navigator>
            
            {isSignedIn ? (
        
                <Stack.Screen name='Router' component={AppRouter} options={{headerShown:false}}/>
                 
            )
                : (
                    <>
                       <Stack.Screen name='SignIn' component={SigIn} options={{headerShown:false}} />
                       <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}} />
                    </>

                )}

                <Stack.Screen name='details' component={Details} options={{headerShown:false}}/>
        </Stack.Navigator>

    );
}

export default RouterAutetication