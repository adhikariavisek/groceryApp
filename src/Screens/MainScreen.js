//Main screen of the app where the reminder list as well as the add task
//will take place
import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import AddTask from "../Components/AddTask";
import Textlist from "../Components/TextList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";

const MainScreen = () => {
  const [term, setTerm] = useState("");

  const [taskItems, setTaskItems] = useState([]);

  //useEffect is used so that data is retrieved at the start of the application
  useEffect(() => {
    getData();
    console.log(taskItems);
  }, []);

  //to add to the array
  const addTask = () => {
    console.log(taskItems.indexOf(term));
    if (term != "" && taskItems.indexOf(term) != 0) {
      setTaskItems([...taskItems, term]);
    }
    console.log(term);
    setTerm("");
    Keyboard.dismiss();
    return true;
  };

  //to store data to the device
  const storeData = async () => {
    try {
      await AsyncStorage.setItem("@storage_Key", JSON.stringify(taskItems));
      console.log("The data is stored");
    } catch (e) {
      console.error(e);
    }
  };

  //In order to delete a record
  const deleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  //to get the data from the device
  const getData = async () => {
    console.log("Get data is running");
    try {
      const value = await AsyncStorage.getItem("@storage_Key");
      if (value !== null && taskItems.length === 0) {
        var newData = JSON.parse(value);
        //setTaskItems([...taskItems, ...newData]);
        setTaskItems((taskItems) => [...taskItems, ...newData]);
        // setTaskItems((taskItems) => {
        //   return { ...taskItems, ...newData };
        // });
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.mainScreen}>
      <ScrollView>
        {taskItems.map((item, index) => {
          return (
            <View style={styles.list} key={index}>
              <Textlist
                text={item}
                id={index}
                delete={(index) => {
                  deleteTask(index);
                }}
              />
            </View>
          );
        })}
      </ScrollView>

      <AddTask
        style={styles.taskStyle}
        term={term}
        add={addTask}
        store={storeData}
        onTermChange={(newTerm) => setTerm(newTerm)}
      />
      {/* <TouchableOpacity
        onPress={() => { storeData() }}>
        <Text>Add</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  list: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  taskStyle: {
    justifyContent: "center",
    width: "100%",
    backgroundColor: "blue",
  },
  flatList: {
    paddingHorizontal: 10,
  },
});

export default MainScreen;
