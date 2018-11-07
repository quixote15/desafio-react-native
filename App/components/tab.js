import React from 'react';
import { Container, Header,Tabs,Tab, Content, Footer, FooterTab, Button} from 'native-base';

import {  
  View,
  Text,
  ScrollView
  } from 'react-native';

export default class Tab1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          noteArray:[],
          noteText: ''
        }
    
    
      }
    
  render() {

   
    return (
      <View>
        
        <ScrollView >
        {this.props.notes}
       </ScrollView>
      </View>
    );
  }



}
