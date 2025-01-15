import { Link } from "expo-router";
import { Text, View, StyleSheet, TextInput, Button, Pressable, Image, Keyboard, ScrollView, TouchableOpacity } from "react-native";
import AuthLayout from "./Layouts/AuthLayout";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const logo = require("./../assets/images/splash-img.png");
export default function HomeScreen() {
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

                  {/* items */}
                  <TouchableOpacity style={styles.ItemView}>
                    <Image source={require('../assets/images/splash-img.png')} style={{width:40, height:40}} />

                    <View>
                      <Text style={styles.ItemText}>Swaziburg Duoni </Text>
                      <Text style={[styles.ItemText,{fontSize:13}]}>08133092341</Text>
                    </View>
                  </TouchableOpacity>


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
    gap:10
  },
  ItemText:{
    color:'white',
    fontSize:15,
    fontWeight:'600'
  }
});
