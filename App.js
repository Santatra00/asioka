import { StatusBar } from "expo-status-bar"
import * as React from "react"
import "react-native-gesture-handler"
import { Button, StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import ChatPage from "./screen/ChatPage"
import ContactPage from "./screen/ContactPage"
import HomePage from "./screen/HomePage"
import HistoriquePage from "./screen/HistoriquePage"
import RegisterScreen from "./screen/RegisterScreen"
import LoginScreen from "./screen/LoginScreen"
import EnterCodeScreen from "./screen/EnterCodeScreen"
import ForgetPasswordScreen from "./screen/ForgetPasswordScreen"
import RedefinePasswordScreen from "./screen/RedefinePasswordScreen"
import Store from "./Store/configureStore"
import { Provider } from "react-redux"

const MainStack = createStackNavigator()
const RootStack = createStackNavigator()

const Stack = createStackNavigator()

const commonScreens = {
  Help: LoginScreen
}

const authScreens = {
  Login: LoginScreen,
  Register: RegisterScreen,
  ForgotPassword: ForgetPasswordScreen,
  RedefinePassword: RedefinePasswordScreen,
  EnterCode: EnterCodeScreen
}

const userScreens = {
  Home: HomePage,
  Contact: ContactPage,
  Chat: ChatPage,
  Historique: HistoriquePage
}

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

function LoginStackScreen() {
  return (
    <MainStack.Navigator initialRouteName="Login">
      <MainStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <MainStack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      <MainStack.Screen name="ForgotPassword" component={ForgetPasswordScreen} options={{ headerShown: false }} />
      <MainStack.Screen name="RedefinePassword" component={RedefinePasswordScreen} options={{ headerShown: false }} />
      <MainStack.Screen name="EnterCode" component={EnterCodeScreen} options={{ headerShown: false }} />
    </MainStack.Navigator>
  )
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  Object.entries({
    // Use the screens normally
    ...commonScreens,
    // Use some screens conditionally based on some condition
    ...(isLoggedIn ? userScreens : authScreens)
  }).map(([name, component]) => console.log(name, component, name == "Home"))

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {Object.entries({
            // Use some screens conditionally based on some condition
            ...(isLoggedIn ? userScreens : authScreens),
            // Use the screens normally
            ...commonScreens
          }).map(([name, component], index) => (
            <Stack.Screen
              key={index}
              name={name}
              component={component}
              options={{ headerShown: isLoggedIn && name != "Home" }}
              initialParams={{ connexion: setIsLoggedIn }}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
