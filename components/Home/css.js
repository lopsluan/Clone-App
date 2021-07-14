import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	navBar: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: "#f97306",
		paddingVertical: 5,
	},

	navItens: {
		flexDirection: "row",
		alignItems: "center",
	},

	img: {
		width: 35,
		height: 35,
		borderRadius: 50,
		marginHorizontal: 10,
	},

	balance: {
		backgroundColor: "#f97306",
		paddingTop: 35,
		paddingHorizontal: 15,
	},

	principalBalance: {
		fontSize: 23,
		color: "#fff",
		borderBottomColor: "#fff",
		borderBottomWidth: 0.3,
		paddingVertical: 3,
	},

	itemsBalance: {
		color: "#fff",
		paddingVertical: 10,
	},

	shortcuts: {
		paddingVertical: 20,
		flexDirection: "row",
		justifyContent: "space-evenly",
	},

	conatinerShortcuts: {
		borderWidth: 1,
		borderColor: "#ced4da",
		padding: 15,
		marginHorizontal: 15,
		borderRadius: 15,
	},

	conatinerShortcutsNew: {
		borderWidth: 1,
		borderColor: "#ced4da",
		borderStyle: "dashed",
		padding: 15,
		marginHorizontal: 20,
		borderRadius: 15,
	},

	shortcutsIcons: {
		color: "#EB8109",
	},

	shortcutsItens: {
		fontSize: 30,
		alignItems: "center",
	},

	shortcutsText: {
		fontSize: 12,
	},

	cards: {
		backgroundColor: "#EBE4EF",
		paddingTop: 20,
		paddingBottom: 50,
		marginHorizontal: 0,
	},

	card: {
		backgroundColor: "#fff",
		padding: 25,
		margin: 10,
		borderWidth: 0.5,
		borderColor: "#7A6A50",
		borderRadius: 8,
		borderTopWidth: 6,
		borderTopColor: "#7A6A50",
	},

	cardTop: {
		flexDirection: "row",
		justifyContent: "space-between",
		borderBottomWidth: 0.5,
		borderBottomColor: "#000",
	},

	cardTextPrincipal: {
		fontSize: 16,
		fontWeight: "bold",
	},

	cardInfo: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingBottom: 20,
		paddingVertical: 10,
	},

	cardText: {
		color: "#464643",
		fontWeight: "300",
	},

	cardFooter: {
		flexDirection: "row",
		paddingVertical: 10,
	},

	cardTextFooter: {
		color: "#0D92FF",
		fontWeight: "bold",
		margin: 5,
	},

	navBarBotton: {
		position: "absolute",
		bottom: 0,
		backgroundColor: "#fff",
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-around",
		paddingVertical: 5,
	},

	cardTextPrincipalCredito: {
		padding: 20,
		fontSize: 25,
		fontWeight: "100",
	},
});

export default styles;
