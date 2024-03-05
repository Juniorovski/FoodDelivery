import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from '../pages/Cart';
import Favorite from '../pages/Favorite';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import { Entypo} from '@expo/vector-icons';



const Tab = createBottomTabNavigator();
const AppRouter = () => {
    return (
        
            <Tab.Navigator
               screenOptionsOptions={{
                style: {
                    borderTopColor: 'transparent' ,
                    borderRadius:50
                },
                    activeTintColor:"#F83B01",
                    tabStyle: {
                        paddingBottom: 2,
                        paddingTop: 4,
                        backgroundColor: '#0B0C17', 
                        
                    },
                    labelStyle:{
                        fontSize:12
                    }
                }}

            >
                <Tab.Screen name='Home' component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Entypo name='home' color={color} size={size}
                            />
                        ),
                        headerShown:false
                    }} />

                <Tab.Screen name='Favorite' component={Favorite}
                options={{
                    tabBarIcon:({color, size})=>(
                        
                        <Entypo name='heart' color={ color} size={size}/>
                    ),
                    headerShown:false
                }} />

                <Tab.Screen name='Cart' component={Cart} 
                options={{
                    tabBarIcon:({color, size})=>(
                        <Entypo name='shopping-cart' color={color} size={size}/>
                    ),
                    headerShown:false
                }}/>

                <Tab.Screen name='Profile' component={Profile} 
                options={{
                    tabBarIcon:({color, size})=>(
                       <Entypo name='user' color={color} size={size}/> 
                    ),
                    headerShown:false
                }}/>
               
            </Tab.Navigator>
        
    )
}

export default AppRouter;
