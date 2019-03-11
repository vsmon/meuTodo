import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/components/Login';
import CreateLogin from './src/components/CreateLogin';
import Home from './src/components/Home';
import EditItem from './src/components/EditItem';

const navigator = createStackNavigator({
  Login:{
    screen:Login
  },
  CreateLogin:{
    screen:CreateLogin
  },
  Home:{
    screen:Home
  },
  EditItem:{
    screen:EditItem
  }
  
})
export default createAppContainer(navigator)

/* export default class App extends Component{
  render(){
    return(
      <Login/>
    );
  }
} */
