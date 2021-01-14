import React, { Component, useState } from "react"

import { Container, Header, Item, List, Left, Thumbnail, Right, Body, Text, ListItem, Content } from "native-base"
import { StyleSheet } from "react-native"
import { AntDesign } from "@expo/vector-icons"

export default function ContactPage({ navigation }) {
  let listClientAll = [
    { nom: "Aina", message: "Hello, what can I help you" },
    { nom: "Bodo", message: "Hello, what can I help you" },
    { nom: "Charline", message: "Hello, what can I help you" },
    { nom: "Domoina", message: "Hello, what can I help you" },
    { nom: "Ericka", message: "Hello, what can I help you" },

    { nom: "Fano", message: "hello, inona kanefa ny vaovao" }
  ]
  const [listClient, setListClient] = useState(listClientAll)
  const searchText = (text) => {
    setListClient(listClientAll.filter((client) => client.nom.toLowerCase().includes(text.toLowerCase())))
  }
  const goToMessage = (name) => {
    navigation.navigate("Chat", { name })
  }
  const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png"
  const goToHome = () => {
    navigation.navigate("Home", { name })
  }
  return (
    <Container>
      <Header style={styles.header}>
        <Item>
          <AntDesign name="arrowleft" size={24} color="#fff" onPress={() => goToHome()} />
          <Text style={styles.text}>Liste contact</Text>
        </Item>
      </Header>
      <Content>
        <List>
          {listClient.map((client) => (
            <ListItem icon style={styles.item} onPress={() => goToMessage(client.nom)}>
              <Left>
                <Thumbnail small source={{ uri }} />
              </Left>
              <Body style={styles.message}>
                <Text>{client.nom}</Text>
                <Text note>{client.message}</Text>
              </Body>
              <Right>
                <Text note>3:43</Text>
              </Right>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  message: {
    marginLeft: "5px",
    // border: "3px solid red",
    marginBottom: "30px"
  },
  item: {
    paddingLeft: "5px",
    height: "70px"
  },
  right: {
    marginTop: "20px"
  },
  searchInput: {},
  text: {
    color: "#fff",
    fontFamily: "AvenirNext-Regular",
    marginLeft: "24px",
    fontSize: "18px"
  },
  header: {
    justifyContent: "flex-start"
  }
})
