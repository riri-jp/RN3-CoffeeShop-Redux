import { createBottomTabNavigator } from "react-navigation";

import AuthStack from "./AuthStack";
import OrderStack from "./OrderStack";
import CoffeeStack from "./CoffeeStack";

import React from "react";
import { Icon } from "native-base";

const BottomNav = createBottomTabNavigator(
  {
    Auth: AuthStack,
    Order: OrderStack,
    Coffee: CoffeeStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = "";
        let iconType = "";
        switch (routeName) {
          case "Auth":
            iconName = "account";
            iconType = "MaterialCommunityIcons";
            break;
          case "Coffee":
            iconName = "coffee";
            iconType = "MaterialCommunityIcons";
            break;
          case "Order":
            iconName = "cart";
            iconType = "MaterialCommunityIcons";
            break;
          default:
            iconName = "account";
            iconType = "MaterialCommunityIcons";
        }
        return (
          <Icon name={iconName} type={iconType} style={{ color: tintColor }} />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "white",
      inactiveTintColor: "black",
      style: {
        backgroundColor: "#00BFFF"
      }
    }
  }
);

export default BottomNav;
