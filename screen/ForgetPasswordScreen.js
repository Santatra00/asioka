import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { Alert, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export default function ForgetPasswordScreen(props) {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [isModalVisible, setIsModalVisible] = useState(false)

  const goToRedefinePassword = () => {
    props.navigation.navigate("EnterCode", { name })
  }

  return (
    <View style={styles.centeredView}>
      <View style={styles.container}>
        <View style={styles.circle} />

        <View style={{ marginHorizontal: 32 }}>
          <Text style={styles.header}>ZAriary</Text>
          <View style={{ marginTop: "3%", alignItems: "center" }}>
            <Text>Please, enter the number phone that you have used to register into ZAriary</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Telephone"
            onChange={(name) => setName(name.value)}
            value={name}
          ></TextInput>

          <View style={{ alignItems: "flex-end", marginTop: 64 }}>
            <TouchableOpacity style={styles.connect} onPress={goToRedefinePassword}>
              <Ionicons name="md-arrow-round-forward" size={24} color="#fff"></Ionicons>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2
  },
  modalView: {
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
    elevation: 5
  },
  container: {
    flex: 1,
    backgroundColor: "#F4F5F7"
    // color: "#00BFA6"
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500,
    backgroundColor: "#FFF",
    position: "absolute",
    left: -120,
    top: -20
  },
  header: {
    fontWeight: "800",
    fontSize: 30,
    color: "#514E5A",
    marginTop: 32,
    alignItems: "center"
  },
  input: {
    marginTop: 32,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#BAB7C3",
    borderRadius: 30,
    paddingHorizontal: 16,
    color: "#514E5A",
    fontWeight: 600
  },
  connect: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: "#00BFA6",
    alignItems: "center",
    justifyContent: "center"
  }
})
