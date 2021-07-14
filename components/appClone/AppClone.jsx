import React from "react";
import styles from "./css";
import { LinearGradient } from "expo-linear-gradient";

import { View } from "react-native";

import NavBar from "./NavBar";
import Form from "./Form";
import Footer from "./Footer";

function AppClone({ navigation }) {
	return (
		<>
			<View style={styles.container}>
				<LinearGradient
					// Background Linear Gradient
					colors={["#f97306", "transparent"]}
					style={styles.background}
				/>
				<NavBar></NavBar>
				<Form navigation={navigation} />
				<Footer></Footer>
			</View>
		</>
	);
}

export default AppClone;
