import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "../Components/Login";
import CoffeeCart from "../Components/CoffeeCart";
import OrderHistory from "../Components/OrderHistory";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeList from "../Components/CoffeeList";

const OrderStack = createStackNavigator(
  {
    CoffeeCart: CoffeeCart,
    OrderHistory: OrderHistory
  },
  {
    initialRouteName: "CoffeeCart",
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

export default OrderStack;
