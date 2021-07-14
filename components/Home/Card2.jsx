import React from "react";

import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "./css";

function Card() {
	return (
		<View style={styles.card}>
			<View style={styles.cardTop}>
				<View>
					<Text style={styles.cardTextPrincipalCredito}>Crédito</Text>
				</View>

				<View>
					<Text style={styles.cardText}>
						expandir{" "}
						<MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
					</Text>
				</View>
			</View>

			<View style={styles.cardFooter}>
				<Text style={styles.cardTextFooter}>ver mais</Text>
			</View>
		</View>
	);
}

export default Card;
