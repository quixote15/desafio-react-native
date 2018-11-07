import React from 'react';
import { Container, Header,Tabs,Tab, Content, Footer, FooterTab, Button} from 'native-base';

import {  
  View,
  ScrollView
  } from 'react-native';

export default class Tab2 extends React.Component {

  render() {
    return (
      <View >
        <ScrollView >
        {this.props.notes}
       </ScrollView>
      </View>
    );
  }



}
