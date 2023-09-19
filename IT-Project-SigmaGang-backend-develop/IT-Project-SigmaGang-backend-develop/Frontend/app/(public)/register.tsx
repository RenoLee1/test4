import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Pressable,
} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";
import Button from "@/components/Button";

const register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleRegister = () => {
        const data = {
            "user_name": username,
            "password": password,
            "confirm_password": confirmPassword,
            "email": email,
        };

        fetch("http://127.0.0.1:8000/api/register/", {
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
                console.log("Register Successful(Frontend)");
                console.log(responseData);
            })
            .catch((error) => {
                console.error("Error during login:", error);
            });
    }

    return (
        <View style={styles.container} >
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Register to get started</Text>
            </View>
            <View style={styles.registerContainer}>
                <View style={styles.registerArea}>
                    <TextInput
                        style={styles.registerInput}
                        placeholder="Username"
                        placeholderTextColor={Colors.medium}
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                    />
                    <TextInput
                        style={styles.registerInput}
                        placeholder="Email"
                        placeholderTextColor={Colors.medium}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput
                        style={styles.registerInput}
                        placeholder="Password"
                        placeholderTextColor={Colors.medium}
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <TextInput
                        style={styles.registerInput}
                        placeholder="Confirm password"
                        placeholderTextColor={Colors.medium}
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={(text) => setConfirmPassword(text)}
                    />
                </View>
                <Link href={"/(public)/login"} asChild>
                    <TouchableOpacity onPress={handleRegister}>
                        <Button label={"Register"} theme={"Grey"} />
                    </TouchableOpacity>
                </Link>
            </View>
            <View style={styles.loginOption}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ flex: 2, fontWeight: "bold", textAlign: 'center' }}>
                        Already have an account?{" "}
                        <Link href={"/(public)/login"} asChild>
                            <Text style={{ flex: 1, color: "green" }}>Login Now!</Text>
                        </Link>
                    </Text>
                </View>
            </View>
        </View >
    );
};

export default register;

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
        paddingTop: 30,
        paddingLeft: 50,
    },
    registerContainer: {
        flex: 6,
        // backgroundColor: 'blue',
        alignItems: "center",
    },
    registerArea: {
        // backgroundColor: 'pink',
        marginTop: 15,
        alignItems: "center",
        marginBottom: 15,
    },
    registerInput: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 22,
        padding: 10,
        backgroundColor: "#fff",
    },
    loginOption: {
        flex: 1.75,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: 'blue'
    },
});
