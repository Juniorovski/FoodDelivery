import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RouterAutetication from './routes/RouterAutetication';


export default function App() {

  return (
    <>
    <NavigationContainer>
    <RouterAutetication/>
   </NavigationContainer> 
    </>
  );
}


