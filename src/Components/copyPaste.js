//This is to copy paste all the not required code


//This code display the result of the items in a listed form
{
    taskItems.map((item, index) => {
      return (
        <View
        style = {styles.list}
        key={index} > 
        {/* onPress={() => completeTask(index)}> */}
          <Textlist 
          text={item}
          id = {index}
          delete = {() => {completeTask(index)}} /> 
        </View>
      )
    })
    } 


    //This is the structure of flatlist for displaying the data
     <FlatList
            style = {styles.flatList}
            data={taskItems}
            renderItem={({item}) => (<Text>{item}</Text>)}
            keyExtractor={(item) => item}
    />
            


    //I don't know what this is
    <View style={styles.item}>
    <View style={styles.itemLeft}>
      <View style={styles.square}></View>
      <Text style={styles.itemText}>{props.text}</Text>
    </View>
    </View>



  //For the delete button
  <TouchableOpacity 
            onPress = {() => props.delete()}>
                <Ionicons name="ios-trash-bin" size={24} color='#55BCF6' />
            </TouchableOpacity>