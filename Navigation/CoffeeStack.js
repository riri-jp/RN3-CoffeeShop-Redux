import { createStackNavigator, createAppContainer } from "react-navigation";

import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeList from "../Components/CoffeeList";

const CoffeeStack = createStackNavigator(
  {
    CoffeeDetail: CoffeeDetail,
    CoffeeList: CoffeeList
  },
  {
    initialRouteName: "CoffeeList",
    cardStyle: {
      backgroundColor: "rgb(20, 90, 100)"
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "rgb(20, 90, 100)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTintColor: "white"
    }
  }
);

export default CoffeeStack;
