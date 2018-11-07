import React from 'react';
import { Container, Header,Tabs,Tab, Content, Footer, FooterTab, Button} from 'native-base';

import { 
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity } from 'react-native';

import Note from './note';  
import Tab1 from './tab';
import Tab2 from './tab-two';

/*
const config = {
  apiKey: "AIzaSyDV9zbuC0G1DB4dkrNVXap1Qlez_0gbiBo",
  authDomain: "",
  databaseURL: "https://contacts-5665d.firebaseio.com",
  projectId: "contacts-5665d",
  storageBucket: "",
  messagingSenderId: "965904642670"
};


const firebaseApp = firebase.initializeApp(config);*/

export default class Main extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
      noteArray:[],
      doneArray:[],
      noteText: ''
    }


  }

  render() {
    let notes = this.state.noteArray.map((val,key) =>{
      return <Note key={key} keyval={key} val={val}
          updateNote={()=>this.updateNote(key)}
          deleteMethod={()=> this.deleteNote(key)}/>
    });

    let doneNotes = this.state.doneArray.map((val,key) =>{
      return <Note key={key} keyval={key} val={val}
          updateNote={()=>this.updateNote(key)}
          deleteMethod={()=> this.deleteNote(key)}/>
    });
    return (
      <View style={styles.container}>
         <Header hasTabs />
         
        <Tabs style={styles.header}>
          <Tab heading="active">
          <Tab1 notes={notes}/>
          </Tab>
          <Tab heading="done">
          <Tab2 notes={doneNotes}/>
          </Tab>
        </Tabs>
 
       <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            placeholder='>note'
            placeholderTextColor='white'
            underlineColor='transparent'
            onChangeText={(noteText)=> this.setState({noteText})}
            value={this.state.noteText}
          >
          </TextInput>
       </View>

       <TouchableOpacity style={styles.addButton} onPress={this.addNote.bind(this)}>
         <Text style={styles.addButtonText}>+
         </Text>
       </TouchableOpacity>

     
      </View>
    );
  }

  deleteNote(key){
    this.state.noteArray.splice(key,1);
    this.setState({noteArray: this.state.noteArray})
  }

  updateNote(key,value){
    alert(value);
   // this.state.noteArray.find(key);
  }

  addNote(){
    if(this.state.noteText){
      var dt = new Date();
      this.state.noteArray.push({
        'date': dt.getFullYear() 
        + '/' + dt.getMonth() + '/' + dt.getDate(),
        'note': this.state.noteText
      });

      this.setState({noteArray: this.state.noteArray });
      this.setState({noteText: ''})
    }
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  header: {
      backgroundColor: '#E91E63',
      alignItems: 'center',
      justifyContent:'center',
      borderBottomWidth: 10,
      borderBottomColor: '#ddd'
  },
  headerText: {
      color: 'white',
      fontSize: 18,
      padding: 26
  },
  scrollContainer: {
      flex: 1,
      marginBottom: 100
  },
  footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10
  },
  textInput: {
      alignSelf: 'stretch',
      color: '#fff',
      padding: 20,
      backgroundColor: '#252525',
      borderTopWidth:2,
      borderTopColor: '#ededed'
  },
  addButton: {
      position: 'absolute',
      zIndex: 11,
      right: 20,
      bottom: 90,
      backgroundColor: '#E91E63',
      width: 70,
      height: 70,
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 8
  },
  addButtonText: {
      color: '#fff',
      fontSize: 24
  }
});


