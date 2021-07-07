import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppClone from "./components/appClone/AppClone";

export default function App() {
	return <AppClone></AppClone>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
