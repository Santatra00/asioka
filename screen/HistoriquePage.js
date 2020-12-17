import React, {Component, useState} from 'react';

import { 
  Container, View, 
  Header,
  List, 
  Left, 
  Thumbnail, 
  Right, 
  Body, 
  Text,
  ListItem,
  Content,
  Item
} from 'native-base';
import { StyleSheet} from 'react-native';
import {AntDesign} from "@expo/vector-icons";

export default function HistoriquePage({ navigation}) {
  let listClientAll = [
    {nom: "RAKOTO", message: "hello, inona ny vaovao"},
    {nom: "BE LOHA", message: "hello, aiza ny vaovao"},
    {nom: "TRISTA", message: "hello, fa naninona ny vaovao"},
    {nom: "TRISTA1", message: "hello, fa naninona ny vaovao"},
    {nom: "TRIST2", message: "hello, fa naninona ny vaovao"},
    {nom: "MEGA", message: "hello, inona kanefa ny vaovao"}
  ];
    const [listClient, setListClient] = useState(listClientAll);
    const searchText = (text)=>{
      setListClient(listClientAll.filter(client=>client.nom.toLowerCase().includes(text.toLowerCase())));
    }
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

  const goToHome = ()=>{
    navigation.navigate("Home", {name});
  };

  return (
      <Container>
        <Header style={styles.header}>
          <Item>
            <AntDesign name="arrowleft" size={24} color="#fff" onPress={()=>goToHome()}/>
            <Text style={styles.text}>Historique de transaction</Text>
          </Item>
        </Header>
        <Content >
          <List>
            <ListItem icon style={styles.item} >
              <Left>
                <Thumbnail small source={{ uri}} />
              </Left>
              <Body style={styles.message}>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep yo</Text>
              </Body>
              <Right>
                <Text note>3:43</Text>
              </Right>
            </ListItem>
            <ListItem icon style={styles.item} >
              <Left>
                <Thumbnail small source={{ uri}} />
              </Left>
              <Body style={styles.message}>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep yo</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem icon style={styles.item} >
              <Left>
                <Thumbnail small source={{ uri}} />
              </Left>
              <Body style={styles.message}>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep yo</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem icon style={styles.item} >
              <Left>
                <Thumbnail small source={{ uri}} />
              </Left>
              <Body style={styles.message}>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep yo</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
  );
}

const styles = StyleSheet.create({
  message: {
    marginLeft: '5px',
    border: "3px solid red",
    marginBottom: '30px'
  },
  item:{
    paddingLeft: "5px",
    height: '70px',   
  },
  right: {
    marginTop: '20px'
  },
  searchInput:{
  },
  menubar:{
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "16px"
  },
  back:{
    flexDirection: "row",
    alignItems: "center",
  },
  text:{
    color: "#fff",
    fontFamily: "AvenirNext-Regular",
    marginLeft: "24px",
    fontSize: "18px"
  },
  header:{
    justifyContent: "flex-start"
  }
});
