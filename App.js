import "react-native-gesture-handler";

import React from "react";
import { StyleSheet, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AppClone from "./components/appClone/AppClone";

import Home from "./components/Home/Home";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar hidden={true} />
			<Stack.Navigator>
				<Stack.Screen name="Login" component={AppClone} />
				<Stack.Screen name="Home" component={Home} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
