import React from "react";
import styles from "./css";

import {
	View,
	Text,
	TouchableHighlight,
	StyleSheet,
	TextInput,
	Image,
} from "react-native";

function Form() {
	return (
		<View style={styles.form}>
			<TouchableHighlight>
				<Text style={styles.titulo}>senha eletônica</Text>
			</TouchableHighlight>

			<TextInput
				style={styles.input}
				secureTextEntry={true}
				works
				placeholder=""
			></TextInput>

			<TouchableHighlight>
				<View style={styles.button}>
					<Text style={styles.buttonText}>acessar</Text>
				</View>
			</TouchableHighlight>

			<TouchableHighlight>
				<Text style={styles.text}>esqueci minha senha</Text>
			</TouchableHighlight>
		</View>
	);
}

export default Form;
