import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AddTask from "./src/Components/AddTask";
import Textlist from "./src/Components/TextList";
import MainScreen from "./src/Screens/MainScreen";

const navigator = createStackNavigator(
  {
    Add: AddTask,
    Main: MainScreen,
    Text: Textlist,
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      title: "Remind Me!!!",
    },
  }
);

export default createAppContainer(navigator);
