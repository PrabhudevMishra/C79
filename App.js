import React from "react";
import WelcomeScreen from "./screens/welcomeScreen";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { AppTabNavigator } from "./components/appTabNavigator";

export default function App() {
  return <AppContainer />;
}

const switchNaviagtor = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  BottomTab: { screen: AppTabNavigator },
});

const AppContainer = createAppContainer(switchNaviagtor);
