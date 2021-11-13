import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import routes from "../../constants/routes";
import { Charts, Overview } from "./subpages";
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

const getIconByRoute = (route: string) => {
  switch (route) {
    case routes.moduleOverview:
      return "command";
    case routes.moduleCharts: //fallthrough;
    default:
      return "pie-chart";
  }
};

const ModulePage = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        return (
          <Icon
            tvParallaxProperties={{}} //for TypeScript happy living
            type="feather"
            raised={focused}
            name={getIconByRoute(route.name)}
            color={color}
            size={size - 10}
          />
        );
      },
      headerShown: false,
    })}
    initialRouteName={routes.moduleOverview}
  >
    <Tab.Screen name={routes.moduleOverview} component={Overview} />
    <Tab.Screen name={routes.moduleCharts} component={Charts} />
  </Tab.Navigator>
);

export default ModulePage;