import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Icon } from '../components/UI'

import { 
  Home,
  Profile,
  Settings
} from '../screens';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return(
    <Stack.Navigator 
      screenOptions={
        { 
          headerTransparent: true, 
          headerTitle: '', 
          gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }
      }
    >
      <Stack.Screen name="HomePage" component={Home} />
    </Stack.Navigator>
  )
}

const Routes = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: '2%',
          right: '6%',
          left: '6%',
          height: 45,
          borderRadius: 23,
          alignSelf: 'center',
          backgroundColor: '#1b3064',
        }
      }}
    >
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name='user' size={22} color={ focused ? 'primary' : 'background'  } />
          )
        }}
      />
      <Tab.Screen 
        name="Home" 
        component={StackNavigator} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name='home' size={22} color={ focused ? 'primary' : 'background'  } />
          )
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={Settings} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name='settings' size={22} color={ focused ? 'primary' : 'background'  } />
          )
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default Routes;
