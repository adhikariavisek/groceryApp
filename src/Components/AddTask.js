//This is the file for adding task or reminder
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const AddTask = ({ term, onTermChange, add, store }) => {
  const addHandler = () => {
    add();
    store();
  };

  const termChangeHandler = (newTerm) => {
    onTermChange(newTerm);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
    >
      <View style={styles.inputIcon}>
        <MaterialCommunityIcons
          style={styles.icon}
          name="reminder"
          size={24}
          //color="55BCF6"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter new Reminder"
          value={term}
          onChangeText={termChangeHandler}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TouchableOpacity style={styles.opacity} onPress={addHandler}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  taskStyle: {
    //backgroundColor : 'grey',
    flexDirection: "row",
    borderRadius: 5,
    marginHorizontal: 15,
    justifyContent: "space-between",
    height: 45,
  },
  input: {
    alignSelf: "stretch",
    padding: 10,
    width: "90%",
    //   borderRadius : 5,
    //   marginHorizontal: 15,
  },
  icon: {
    alignSelf: "center",
  },
  inputIcon: {
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    //marginBottom : 20,
    justifyContent: "space-between",
    width: "96%",
    margin: "2%",
  },
  opacity: {
    backgroundColor: "#55BCF6",
    borderRadius: 10,
    height: 20,
    width: 20,
    opacity: 0.9,
  },
  writeTaskWrapper: {
    bottom: 50,
    width: "100%",
    alignSelf: "stretch",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
  },
});

export default AddTask;
