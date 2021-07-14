import React from "react";

import { View, Text } from "react-native";

import styles from "./css";

function Saldo() {
	return (
		<View style={styles.balance}>
			<Text style={styles.itemsBalance}>saldo em conta</Text>
			<Text style={styles.principalBalance}>R$ ....</Text>
			<Text style={styles.itemsBalance}>
				cheque especial disponível R$ .... {">"}
			</Text>
		</View>
	);
}

export default Saldo;
