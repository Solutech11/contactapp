import { Keyboard, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const AddContactModal = ({visibility, setVisibility}) => {
  
  const [Name, setName] = useState('')
  const [PhoneNo, setPhoneNo] = useState('')

  return (
    <Modal transparent={true} visible={visibility} animationType='fade'>
        <Pressable onPress={()=>Keyboard.dismiss()} style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Pressable onPress={()=>setVisibility(false)} style={{backgroundColor:'black',opacity:0.5, position:'absolute', width:'100%',height:'100%'}} />

            <View  style={styles.Container}>
                <Text style={{fontSize:18, fontWeight:600, borderBottomWidth:1, width:'100%', textAlign:'center', paddingBottom:10}}>Add Contact</Text>
                
                <TextInput placeholder='Name' autoCapitalize='words' style={styles.TextInput} defaultValue={Name} onChangeText={setName}  />

                <TextInput placeholder='Phone Number' keyboardType='phone-pad' style={styles.TextInput} defaultValue={PhoneNo} onChangeText={setPhoneNo}  />

                <TouchableOpacity style={styles.Buttons}>
                  <Text style={{color:'white', fontWeight:'500'}}>Add</Text>
                </TouchableOpacity>


            </View>
        </Pressable>
    </Modal>
  )
}

export default AddContactModal

const styles = StyleSheet.create({
  Container:{
    backgroundColor:'white',
    width:'70%',
    padding:15,
    borderRadius:10,
    alignItems:'center',
    gap:20
  },
  TextInput:{
    borderWidth:1,
    width:'100%',
    padding:10,
    borderRadius:10,
    borderColor:'grey'
  },
  Buttons:{
    backgroundColor:'#02a9ea',
    width:'100%',
    padding:10,
    paddingVertical:15,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
  }
})