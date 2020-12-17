import { StatusBar } from "expo-status-bar"
import * as React from "react"
import "react-native-gesture-handler"
import { Button, StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import ChatPage from "./screen/ChatPage"
import ContactPage from "./screen/ContactPage"
import HomePage from "./screen/HomePage"
import LoginPage from "./screen/LoginPage"
import HistoriquePage from "./screen/HistoriquePage"

const MainStack = createStackNavigator()
const RootStack = createStackNavigator()

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate("Login", { itemId: 45 })} />
    </View>
  )
}
function MainStackScreen() {
  const createHeader = ({ route }) => ({
    title: route.params == undefined ? "Home" : route.params.name,
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  })

  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Contact" component={ContactPage} options={createHeader} />
      <MainStack.Screen name="Chat" component={ChatPage} options={createHeader} />
      <MainStack.Screen name="Historique" component={HistoriquePage} options={createHeader} />
    </MainStack.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" initialRouteName="LoginStack">
        <RootStack.Screen name="MainStack" component={MainStackScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="LoginStack" component={LoginPage} options={{ headerShown: false }} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default App
