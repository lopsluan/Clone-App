import React from "react";

import { View, Text } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

import styles from "./css";

function Card() {
	return (
		<View style={styles.card}>
			<View style={styles.cardTop}>
				<View>
					<Text style={styles.cardTextPrincipal}>Itaucard Multiplo</Text>
					<Text style={styles.cardTextPrincipal}>Mc Internacional</Text>

					<View style={styles.cardInfo}>
						<Text style={styles.cardText}>
							<FontAwesome name="cc-mastercard" size={24} color="black" />
						</Text>
						<Text style={styles.cardText}>final 0000</Text>
					</View>
				</View>

				<View>
					<Text style={styles.cardText}>
						expandir{" "}
						<MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
					</Text>
				</View>
			</View>

			<View style={styles.cardFooter}>
				<Text style={styles.cardTextFooter}>ver fatura</Text>
				<Text style={styles.cardTextFooter}>cartão virtual</Text>
			</View>
		</View>
	);
}

export default Card;
