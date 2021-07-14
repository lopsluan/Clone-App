import React from "react";

import { View, Text } from "react-native";
import { AntDesign, MaterialIcons, FontAwesome } from "@expo/vector-icons";

import styles from "./css";

function IconesMeio() {
	return (
		<View style={styles.shortcuts}>
			<View style={styles.shortcutsItens}>
				<View style={styles.conatinerShortcuts}>
					<AntDesign name="home" size={24} style={styles.shortcutsIcons} />
				</View>
				<Text style={styles.shortcutsText}>soluções para esse</Text>
				<Text style={styles.shortcutsText}>momento</Text>
			</View>

			<View style={styles.shortcutsItens}>
				<View style={styles.conatinerShortcuts}>
					<MaterialIcons
						name="attach-money"
						size={24}
						style={styles.shortcutsIcons}
					/>
				</View>
				<Text style={styles.shortcutsText}>Pix</Text>
			</View>

			<View style={styles.shortcutsItens}>
				<View style={styles.conatinerShortcuts}>
					<FontAwesome name="barcode" size={24} style={styles.shortcutsIcons} />
				</View>
				<Text style={styles.shortcutsText}>pagar conta</Text>
			</View>

			<View style={styles.shortcutsItens}>
				<View style={styles.conatinerShortcutsNew}>
					<AntDesign name="plus" size={24} style={styles.shortcutsIcons} />
				</View>
				<Text style={styles.shortcutsText}>criar novo atalho</Text>
			</View>
		</View>
	);
}

export default IconesMeio;
