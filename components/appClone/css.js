import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	background: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 600,
	},

	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#f7b733",
	},

	form: {
		alignItems: "center",
	},

	button: {
		alignItems: "center",
		backgroundColor: "#fff",
		borderRadius: 4,
		paddingHorizontal: 100,
		paddingVertical: 15,
	},

	buttonText: {
		color: "#f97306",
		fontSize: 16,
	},

	text: {
		color: "#fff",
		paddingVertical: 10,
		paddingTop: 25,
	},

	input: {
		borderBottomWidth: 1,
		borderBottomColor: "#fff",
		marginBottom: 10,
		width: 230,
	},

	titulo: {
		color: "#fff",
		paddingVertical: 10,
		fontSize: 17,
	},

	navBar: {
		backgroundColor: "#fff",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
	},

	user: {
		backgroundColor: "#fff",
		padding: 10,
		flexDirection: "row",
	},

	textNavBar: {
		color: "#f97306",
	},

	footer: {
		flexDirection: "row",
		justifyContent: "space-around",
		width: "100%",
		position: "absolute",
		bottom: 0,
		padding: 20,
	},

	footerItem: {
		color: "#fff",
	},

	imagem: {
		width: 35,
		height: 35,
		borderRadius: 50,
		marginHorizontal: 10,
	},

	seta: {
		marginRight: 10,
	},
});

export default styles;
