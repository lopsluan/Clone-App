import React from "react";

import { View, Text, Image } from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";

import styles from "./css";

function NavBarTop() {
	return (
		<View>
			<View style={styles.navBar}>
				<View style={styles.navItens}>
					<Image
						style={styles.img}
						source={{
							uri: "http://derodecor.vteximg.com.br/arquivos/ids/196222/PP324-1.16M_6.jpg?v=636935332460600000",
						}}
					/>

					<Text style={{ color: "#fff" }}>Luan</Text>
				</View>

				<View style={styles.navItens}>
					<Text>
						<Entypo name="magnifying-glass" size={24} color="#fff" />
					</Text>
					<Text>
						<Feather name="bell" size={24} color="#fff" />
					</Text>
				</View>
			</View>
		</View>
	);
}

export default NavBarTop;
