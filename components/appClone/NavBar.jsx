import React from "react";

import {
	View,
	Text,
	TouchableHighlight,
	StyleSheet,
	TextInput,
	Image,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import styles from "./css.js";

function NavBar() {
	return (
		<View style={styles.navBar}>
			<View style={styles.user}>
				<View>
					<Image
						style={styles.imagem}
						source={{
							uri: "http://derodecor.vteximg.com.br/arquivos/ids/196222/PP324-1.16M_6.jpg?v=636935332460600000",
						}}
					/>
				</View>

				<View>
					<Text style={styles.textNavBar}>olá, Luan</Text>
					<Text>ag ..00 c/c ...00-00</Text>
				</View>
			</View>

			<Text style={styles.seta}>
				<AntDesign name="down" size={20} color="#f97306" />
			</Text>
		</View>
	);
}

export default NavBar;
