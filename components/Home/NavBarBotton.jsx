import React from "react";

import { View, Text, TouchableHighlight } from "react-native";
import {
	AntDesign,
	MaterialCommunityIcons,
	MaterialIcons,
} from "@expo/vector-icons";

import styles from "./css";

function NavBarBotton() {
	return (
		<View style={styles.navBarBotton}>
			<View style={styles.shortcutsItens}>
				<TouchableHighlight>
					<View>
						<AntDesign name="home" size={24} style={styles.shortcutsIcons} />
					</View>
				</TouchableHighlight>
				<Text style={styles.shortcutsText}>Home</Text>
			</View>

			<View style={styles.shortcutsItens}>
				<TouchableHighlight>
					<View>
						<MaterialCommunityIcons
							name="format-list-checkbox"
							size={24}
							style={styles.shortcutsIcons}
						/>
					</View>
				</TouchableHighlight>
				<Text style={styles.shortcutsText}>extrato</Text>
			</View>

			<View style={styles.shortcutsItens}>
				<TouchableHighlight>
					<View>
						<MaterialIcons
							name="attach-money"
							size={24}
							style={styles.shortcutsIcons}
						/>
					</View>
				</TouchableHighlight>
				<Text style={styles.shortcutsText}>transações</Text>
			</View>

			<View style={styles.shortcutsItens}>
				<TouchableHighlight>
					<View>
						<AntDesign
							name="appstore-o"
							size={24}
							style={styles.shortcutsIcons}
						/>
					</View>
				</TouchableHighlight>
				<Text style={styles.shortcutsText}>serviços</Text>
			</View>

			<View style={styles.shortcutsItens}>
				<TouchableHighlight>
					<View>
						<MaterialCommunityIcons
							name="help-circle-outline"
							size={24}
							style={styles.shortcutsIcons}
						/>
					</View>
				</TouchableHighlight>
				<Text style={styles.shortcutsText}>ajuda</Text>
			</View>
		</View>
	);
}

export default NavBarBotton;
