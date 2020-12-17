import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, ImageBackground, TouchableOpacity} from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import { 
  List, 
  Left, 
  Thumbnail, 
  Right, 
  Body, 
  ListItem,
  Content
} from 'native-base';
export default function HomePage({ navigation}) {
  const goToHistorique = ()=>{
    navigation.navigate("Historique", {name});
  };

  const goToFriendList = ()=>{
    navigation.navigate("Contact", {name});
  };

  const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

  let listClientAll = [
    {nom: "Aina", message: "2000 Ar"},
    {nom: "Bodo", message: "1000 Ar"},
    {nom: "Charline", message: "3000 Ar"}];
  const [listClient, setListClient] = useState(listClientAll);

  const goToMessage = (name)=>{
    navigation.navigate("Chat", {name});
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <ImageBackground style={styles.imageBackground} source={require("../assets/images/bg.jpeg")}>
        <SafeAreaView>
          <View style={styles.menubar}>
            <View style={styles.back}>
              {/* <AntDesign name="arrowleft" size={24} color="#fff"/>
              <Text style={styles.text}>Votre compte</Text> */}
              {/* <TouchableOpacity style={styles.standartButton} onPress={goToHistorique}>
                <Text style={{color: "rgb(233, 209, 249)"}}>
                  <AntDesign style={{alignItems: "right"}} name="eye" size={24} color="#FFF"/>
                  See Compte</Text>
              </TouchableOpacity> */}

              <TouchableOpacity style={styles.standartButton} onPress={goToFriendList}>
                {/* <Text style={{color: "rgb(233, 209, 249)"}}> */}
                  <AntDesign name="user" size={24} color="#FFF"/>
                  {/* Friend</Text> */}
              </TouchableOpacity>

            </View>
          </View>
          <View style={styles.mainRecip}>
            <Text style={styles.maxiText}>RANDRIANASOLO</Text>
            <Text style={styles.text}>Hasitiana Santatra</Text>
            <View style={styles.divider}></View>
            <Text style={styles.miniText}>Solde: 2000 Ar | Depuis : 04 Nov 2020</Text>
          </View>
          <View style={{alignContent: "space-around", alignItems: "center"}}>
            <TouchableOpacity style={styles.button} onPress={goToHistorique}>
              <Text style={{color: "rgb(233, 209, 249)"}}>Transfert</Text>
            </TouchableOpacity>
          </View>

        </SafeAreaView>
      </ImageBackground>
      <View style={styles.recipesContainer}>
        <Text style={{fontSize: "18px"}}>Derniers transactions</Text>
        <TouchableOpacity style={styles.standartButton, {width: "100%"}} onPress={goToHistorique}>
          <Text style={{color: "rgb(233, 209, 249)", width: "100%",alignContent: "space-around", flex: 1}}>
              <Text style={{flex: 1, width: "80%"}}>
                List transfert 
              </Text>
              <Text>
              <AntDesign name="eye" size={24} color="#000"/>

              </Text>

          </Text>

        </TouchableOpacity>
        <Text style={styles.miniText, {color: "black", fontSize: "10px"}}>88 Transactions effectuee au total</Text>
        <Content >
          <List>
            {
              listClient.map((client)=>
              <ListItem icon style={styles.item} onPress={()=>goToMessage(client.nom)} >
                <Left>
                  <Thumbnail small source={{ uri}} />
                </Left>
                <Body style={styles.message}>
                  <Text>{client.nom}</Text>
                <Text note>{client.message}</Text>
                </Body>
                <Right>
                  <Text note>{parseInt(Math.random()*21)}:{parseInt(Math.random()*59)}</Text>
                </Right>
              </ListItem>
              )
            }
            
          </List>
        </Content>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  imageBackground:{
    width: "100%"
  },
  menubar:{
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: "16px"
  },
  back:{
    flexDirection: "row",
    alignItems: "right",
    alignSelf: "flex-end"
  },
  text:{
    color: "#fff",
    fontFamily: "AvenirNext-Regular",
    marginLeft: "24px",
    fontSize: "18px"

  },
  miniText:{
    color: "#fff",
    fontFamily: "AvenirNext-Regular",
    marginLeft: "24px",
    fontSize: "12px"

  },
  maxiText:{
    color: "#fff",
    fontFamily: "AvenirNext-Regular",
    marginLeft: "24px",
    fontSize: "24px"
  },
  mainRecip:{
    padding: "0 32px",
    marginTop: "100px",
    marginBottom: "32px"
  },
  divider: {
    borderBottomColor: "#FFF",
    borderBottomWidth: "2px",
    width: "150px",
    marginTop: "8px",
    marginBottom: "6px",
    marginLeft: "24px"
  },
  button: {
    // marginLeft: "48px",
    marginBottom: "32px",
    backgroundColor: "#FFF3",
    paddingTop: "6px",
    paddingBottom: "6px",
    paddingLeft: "12px",
    paddingRight: "12px",
    borderRadius: "20px",
    color: "white",
    fontWeight: "bold"
  },
  standartButton: {
    // backgroundColor: "#FFF3",
    alignSelf: "flex-start",
    paddingTop: "6px",
    paddingBottom: "6px",
    paddingLeft: "12px",
    paddingRight: "12px",
    // borderRadius: "20px",
    color: "white"
  },
  recipesContainer:{
    marginTop: "-20px",
    padding: "32px",
    backgroundColor: "#fff",
    borderTopLeftRadius: "26px",
    borderTopRightRadius: "26px",
    display: "flex"
  }
});
