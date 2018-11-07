import React from 'react';
import Main from './App/components/main'
import * as firebase from  'firebase';

const config = {
  apiKey: "AIzaSyDV9zbuC0G1DB4dkrNVXap1Qlez_0gbiBo",
  authDomain: "**************************",
  databaseURL: "https://contacts-5665d.firebaseio.com",
  projectId: "contacts-5665d",
  storageBucket: "",
  messagingSenderId: "965904642670"
};

//firebase.initializeApp(firebaseConf);

export default class App extends React.Component {

  render() {
    return (
     <Main/>
    );
  }
}


