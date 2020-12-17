import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal } from 'react-native';
import {Ionicons} from "@expo/vector-icons"

export default function LoginPage(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);


  const goToHome = ()=>{
    props.navigation.navigate("Home", {name});
  };

  return (
    <View style={styles.centeredView}>
      <Modal 
        visible={isModalVisible}
        transparent="true"
        animationType="slide"
        onRequestClose={()=>{
        Alert.alert("Modal has been closed")
      }}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Hello</Text>

          </View>
        </View>
      </Modal>
    <View style={styles.container}>
      <View style={styles.circle}/>
      <View style={{marginTop: 64}}>
        <Image 
          source={require("../assets/images/Savings.png")}
          style={{width: 100, height: 100, alignSelf:"center"}}
        />
      </View>
      
      <View style={{marginHorizontal: 32}}>
        <Text style={styles.header}>ZAriary</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Username" 
          onChange={name=>setName(name.value)} 
          value={name}>
        </TextInput>
        <TextInput 
          style={styles.input} 
          placeholder="Password" 
          secureTextEntry={true}
          onChange={password=>setPassword(password.value)} 
          value={password}>
        </TextInput>
        <View style={{alignItems: "flex-end", marginTop: 64}}>
          <TouchableOpacity style={styles.connect} onPress={/*goToHome*/ e=>setIsModalVisible(true)}>
            <Ionicons name="md-arrow-round-forward" size={24} color="#fff"></Ionicons>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
  centeredView:{
    flex: 1, 
    justifyContent: "center",
    alignItems: "center", 
    marginTop: 2
  },  
  modalView:{
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#F4F5F7',
    color: "#00BFA6"
  },
  circle:{
    width: 500,
    height: 500,
    borderRadius: 500,
    backgroundColor: "#FFF",
    position: "absolute",
    left: -120,
    top: -20
  },
  header:{
    fontWeight: "800",
    fontSize: 30,
    color: "#514E5A",
    marginTop: 32,
    alignItems: "center"
  },
  input:{
    marginTop: 32, 
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#BAB7C3",
    borderRadius: 30,
    paddingHorizontal: 16,
    color: "#514E5A",
    fontWeight: 600
  },
  connect:{
    width: 70, 
    height: 70, 
    borderRadius: 70 / 2 , 
    backgroundColor: "#00BFA6",
    alignItems:"center",
    justifyContent: "center"
  }
});
