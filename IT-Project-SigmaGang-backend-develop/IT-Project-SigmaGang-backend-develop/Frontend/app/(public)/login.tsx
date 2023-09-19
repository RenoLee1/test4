import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Pressable,
} from "react-native";
import React, { useState } from "react";
import { Link, router, useNavigation, useRouter } from "expo-router";
import Colors from "@/constants/Colors";
import Button from "@/components/Button";

const login = () => {
	const navigation = useNavigation();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		const data = {
			"user_name": username,
			"password": password,
		};

		fetch("http://127.0.0.1:8000/api/login/", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((responseData) => {
				console.log("Login Successful(Frontend)");
				console.log(responseData);
			})
			.catch((error) => {
				console.error("Error during login:", error);
			});
	};

	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>Welcome back!</Text>
			</View>
			<View style={styles.loginContainer}>
				<View style={styles.loginArea}>
					<TextInput
						style={styles.loginInput}
						placeholder="Enter your username"
						placeholderTextColor={Colors.medium}
						value={username}
						onChangeText={(text) => setUsername(text)}
					/>
					<TextInput
						style={styles.loginInput}
						placeholder="Enter your password"
						placeholderTextColor={Colors.medium}
						secureTextEntry
						value={password}
						onChangeText={(text) => setPassword(text)}
					/>
					<Link href={"/account-verify"} asChild>
						<TouchableOpacity style={styles.forgotBotton}>
							<Text style={{ fontSize: 12, color: Colors.mediumDark }}>
								Forgot Password?
							</Text>
						</TouchableOpacity>
					</Link>
				</View>
				<Link href={"/(auth)/home_page"} asChild>
					<TouchableOpacity onPress={handleLogin}>
						<Button label={"Sign In"} theme={"Grey"} />
					</TouchableOpacity>
				</Link>
			</View>
			<View style={styles.registerOption}>
				<View style={{ flexDirection: "row" }}>
					<Text style={{ flex: 2, fontWeight: "bold", textAlign: 'center' }}>
						Don't have an account?{" "}
						<Link href={"/register"} asChild>
							<Text style={{ flex: 1, color: "green" }}>Register Now!</Text>
						</Link>
					</Text>
				</View>
			</View>
		</View>
	);
};

export default login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	titleContainer: {
		flex: 1,
		// backgroundColor: 'red',
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		paddingTop: 50,
		paddingLeft: 50,
	},
	loginContainer: {
		flex: 3,
		// backgroundColor: 'blue',
		alignItems: "center",
	},
	loginArea: {
		// backgroundColor: 'pink',
		alignItems: "center",
	},
	loginInput: {
		width: 300,
		height: 40,
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 22,
		padding: 10,
		backgroundColor: "#fff",
	},
	forgotBotton: {
		width: 100,
		marginRight: 50,
		marginLeft: 250,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 50,
		// backgroundColor: 'red',
	},
	registerOption: {
		flex: 1,
		height: 10,
		alignItems: "center",
		justifyContent: "center",
		// backgroundColor: 'blue',
	},
});
