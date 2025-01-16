import { Link } from "expo-router";
import { Text, View, StyleSheet, TextInput, Button, Pressable, Image, Keyboard, ScrollView, TouchableOpacity } from "react-native";
import AuthLayout from "./Layouts/AuthLayout";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as SQLite from 'expo-sqlite';
import { useEffect, useState } from "react";

const logo = require("./../assets/images/splash-img.png");
export default function HomeScreen() {

  const [db, setdb] = useState(null)

  const [Contacts, setContacts] = useState([])

  

  async function initializeDb(db) {
    try {
      await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS contacts (
          id INTEGER PRIMARY KEY NOT NULL, 
          name TEXT NOT NULL, 
          phone TEXT NOT NULL
        );
        
      `);

        console.log('Table initialized successfuly');
        
    } catch (error) {
      console.error("error initializing db", error)
    }
  }

  async function FetchContacts(db) {
    try {
      let data= await db.getAllAsync('SELECT * FROM contacts');
      setContacts(data)
    } catch (error) {
      console.error("error fetching db", error)
    }
  }

  async function AddContact(db) {
    try {
      let name=`John Dolphin ${Math.random().toFixed(2)}`;
      let phone= '123-456,7890'

      const result = await db.runAsync('INSERT INTO contacts (name, phone) VALUES (?, ?)', name, phone);
      await FetchContacts(db)
      
    } catch (error) {
      
      console.error("error fetching db", error)
    }
  }

  useEffect(() => {
    (async()=>{
      const newdb = await SQLite.openDatabaseAsync('contacts');
      setdb(newdb)
      await initializeDb(newdb)
      await FetchContacts(newdb)
      AddContact(db)

    })()
  }, [])
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
          <StatusBar style="dark" />
          <View
            style={{ flex: 1 }}
          >
            <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
              {/* header */}
              <View style={styles.header}>
                <Image source={logo} style={{ width: 60, height: 60 }} />
                <Text style={styles.headerText}>Contacts</Text>
              </View>

              {/* children */}
              <View style={{ flex: 1 , paddingVertical:30, paddingHorizontal:20}}>
                <ScrollView>

                  {
                    Contacts.length>0?(
                      Contacts.map((i,key)=>(
                        <TouchableOpacity style={styles.ItemView}>
                          <Image source={require('../assets/images/splash-img.png')} style={{width:40, height:40}} />

                          <View>
                            <Text style={styles.ItemText}>{i.name} </Text>
                            <Text style={[styles.ItemText,{fontSize:13}]}>{i.phone}</Text>
                          </View>
                        </TouchableOpacity>
                        ))
                      
                    ):(
                      <Text>No contacts found</Text>
                    )
                  }
                  {/* items */}
                  


                </ScrollView>
              </View>
              {/* footer */}
              <View style={styles.footer}>
                <Text style={styles.footerText}>Developed by Solutech</Text>
              </View>
            </Pressable>
          </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginVertical: 12,
  },
  linkView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  header: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'100%',
    paddingHorizontal:30
  },
  footer: { justifyContent: "center", alignItems: "center" },
  footerText: { fontSize: 16, fontWeight: "500", textAlign: "center" },
  ItemView:{
    backgroundColor:'gray',
    flexDirection:'row',
    padding:10,
    borderRadius:10,
    gap:10,
    marginBottom:10
  },
  ItemText:{
    color:'white',
    fontSize:15,
    fontWeight:'600'
  }
});
