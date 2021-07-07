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

function Footer() {
	return (
		<View style={styles.footer}>
			<View>
				<Text style={styles.footerItem}>Pix</Text>
			</View>

			<View>
				<Text style={styles.footerItem}>iToken</Text>
			</View>

			<View>
				<Text style={styles.footerItem}>ajuda</Text>
			</View>
		</View>
	);
}

export default Footer;
