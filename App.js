import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {createAppContainer} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SearchScreen from './screens/SearchScreen';
import TransactionScreen from './screens/BookTransactionScreen';

export default class App extends React.Component {
render(){
  return (
  
     <AppContainer/>
    
   
  );}
}
const tabNavigator=createBottomTabNavigator({
  Search:{screen:SearchScreen},
  Transaction:{screen:TransactionScreen}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const routeName=navigation.state.routeName
      if(routeName==="Transaction"){
        return(
          <Image
          source={require("./assets/book.png")}
          style={styles.imageIcon}
         />
        )
      }else
      if(routeName==="Search"){
        return(
          <Image
          source={require("./assets/searchingbook.png")}
          style={styles.imageIcon}
         />
        )
      }
    }
  })
}
)
const AppContainer=createAppContainer(tabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center',
  },
  imageIcon:{
    height:40,
    width:40,
  }
});

