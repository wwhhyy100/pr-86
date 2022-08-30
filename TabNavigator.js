import * as React from 'react';
import {StyleSheet,Platform,StatusBar} from 'react-native'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Pictures from '../screens/Pictures';
import Feed from '../screens/Feed';
import {RFValue} from 'react-native-responsive-fontsize'

const Tab = createMaterialBottomTabNavigator();

    const BottomTabNavigator = ()=> {
   return (
    <Tab.Navigator 
    labeled = {false}
    barStyle = {styles.bottomTabStyle}
    screenOptions = {({route})=>({
      tabBarIcon:({focused,color,size})=>{
        let iconName;
        if(route.name === "Feed"){
         iconName = focused ? 'home':'home-outline';
        }
        else if(route.name === 'CreateStory'){
        iconName = focused ? 'add-circle':'add-circle-outline';
        }
        return (
        <Ionicons name = {iconName} size = {RFValue(30)} color = {color} style={styles.icon} />
        )
      }
    })}
    tabBarOptions = {{
      activeTintColor:'tomato',
      inactiveTintColor:'gray',
    }}
    >
    
  <Tab.Screen name = 'Feed' component = {Feed} options = {{headerShown:false}}/>
  <Tab.Screen name = 'Pictures' component = {Pictures} options = {{headerShown:false}}/>

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomTabStyle:{
    backgroundColor:'#2f345d',
    height:'10%',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    overflow:'hidden',
    position:'absolute',
  },
});

export default BottomTabNavigator;