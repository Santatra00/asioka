import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Content} from 'react-native';
import { GiftedChat} from "react-native-gifted-chat";
import {AntDesign} from "@expo/vector-icons";
import { Container, Header, Item } from 'native-base';


export default function ChatPage({navigation}) {
  const dateActual = new Date();

  let m = [
  {
      _id: 1,
      text: 'Hello, what can I help you?',
      createdAt: new Date('12/07/2020'),
      user: {
          _id: 1,
          name: 'Me',
          avatar: 'https://placeimg.com/140/140/any',
      },
    },
    {
      _id: 2,
      text: 'Hello',
      createdAt: new Date('12/08/2020'),
      user: {
          _id: 2,
          name: 'Bodo',
          avatar: 'https://placeimg.com/140/140/any',
      },
  }
  ];
  const [messages, setMessages] = useState(m);
  const sendMessage = (value)=>{
    console.log("send message", value);
    // let tmpMessage = messages;
    let msg = value[0];
    msg._id = m.length + 1;
    setMessages([msg, ...messages])
    console.log("messages", messages);
  }
  const goToFriendList = ()=>{
    navigation.navigate("Contact", {name});
  };


  useEffect(() => {
    console.log( "Navigation",navigation)
    setMessages(m)
  }, [])

  return (
    <Container>
      <Header style={styles.header}>
        <Item>
          <AntDesign name="arrowleft" size={24} color="#fff" onPress={()=>goToFriendList()}/>
          <Text style={styles.text}>{navigation.state.params.name}</Text>
        </Item>
      </Header>
      <Container>
        <GiftedChat messages={messages} onSend={sendMessage} user={{_id: 1, name: "henry"}}/>
      </Container>
    </Container>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menubar:{
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: "16px"
  },
  back:{
    flexDirection: "row",
    alignItems: "right",
    alignSelf: "flex-start"
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
