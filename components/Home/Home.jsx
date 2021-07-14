import React from "react";

import { ScrollView } from "react-native";

import NavBarTop from "./NavBarTop";
import Balance from "./Balance";
import MiddleIcons from "./MiddleIcons";
import Cards from "./Cards";
import Card from "./Card";
import Card2 from "./Card2";

import NavBarBotton from "./NavBarBotton";

function Home() {
	return (
		<>
			<NavBarTop></NavBarTop>

			<ScrollView>
				<Balance></Balance>

				<ScrollView horizontal={true}>
					<MiddleIcons></MiddleIcons>
				</ScrollView>

				<Cards>
					<Card></Card>
					<Card2></Card2>
				</Cards>
			</ScrollView>

			<NavBarBotton></NavBarBotton>
		</>
	);
}

export default Home;
