import React,{Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  TimePickerAndroid,
} from 'react-native';

export default class Clock extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>

       <View style={styles.header}>
          <Text style={styles.headertext}>Clock</Text>
      </View>





        <ScrollView style={styles.scrollContainer}></ScrollView>

        <View style={styles.footer}>
        <Text style=styles.footertext>Add Time</Text>

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>


      </View>

    </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create ({
container:{
  flex: 1,
},
header: {
  backgroundColor:'#E91E63',
  //alignItems:'center',
  //justifyContent:'center',
  borderBottomWidth:10,
  borderBottomColor:'#ddd',
},
headertext:{
  color:'white',
  fontSize:28,
  padding:20,
},
scrollContainer: {
  flex:0,
  marginBottom:100,
},
footer:{
  //position:'absolute',
  //alignItems:'center',
  //bottom:0,
  //left:0,
  //right:0,
},
addButton: {
      backgroundColor:'#E91E63',
      width:50,
      height:50,
      borderRadius:100,
      borderColor:'#ccc',
      alignItems:'center',
      justifyContent:'center',
      alignSelf:'flex-end',
      elevation:8,
      marginBottom: 20,
      zIndex:10,
},
touchcontent:{
  backgroundColor:'#E91E63',
  width:90,
  height:90,
  borderRadius:50,
  borderColor:'#ccc',
  alignItems:'center',
  justifyContent:'center',
  elevation:8,
  marginBottom: -45,
  zIndex:10,
},
touchcontenttext:{
  color:'#fff',
  fontSize:24,
},

addButtonText: {
  color:'#fff',
  fontSize:24,
},
textInput:{
  alignSelf:'stretch',
  color:'#fff',
  padding:20,
  paddingTop:46,
  backgroundColor:'#252525',
  borderBottomWidth:1,
  borderTopColor:'#ededed',

}
});
AppRegistry.registerComponent('Clock',()=> Clock);
