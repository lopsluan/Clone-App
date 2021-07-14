import React from "react";

import { View, Text } from "react-native";
import Card from "./Card";
import styles from "./css";

function Cards(props) {
	return <View style={styles.cards}>{props.children}</View>;
}

export default Cards;
