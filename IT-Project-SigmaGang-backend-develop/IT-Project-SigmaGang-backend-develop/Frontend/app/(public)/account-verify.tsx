import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Button from '@/components/Button'
import Colors from '@/constants/Colors'


const register = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Forgot Password?</Text>
                <Text style={styles.subtitle}>Don't worry! Please enter username and email address to reset your password.</Text>
            </View>
            <View style={styles.verifyContainer}>
                <View style={styles.verifyArea}>
                    <TextInput
                        style={styles.verifyInput}
                        placeholder='Enter your username'
                        placeholderTextColor={Colors.medium}
                    // value={username}
                    // onChangeText={(text) => setUsername(text)}
                    />
                    <TextInput
                        style={styles.verifyInput}
                        placeholder='Enter your email address'
                        placeholderTextColor={Colors.medium}
                    // value={username}
                    // onChangeText={(text) => setUsername(text)}
                    />
                </View>
                <Link href={'/(public)/reset'} asChild>
                    <TouchableOpacity>
                        <Button label={"Verify"} theme={'Grey'} />
                    </TouchableOpacity>
                </Link>
            </View>
            <View style={styles.loginOption}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ flex: 2, fontWeight: "bold", textAlign: 'center' }}>
                        Remember Password?{" "}
                        <Link href={"/(public)/login"} asChild>
                            <Text style={{ flex: 1, color: "green" }}>Login</Text>
                        </Link>
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default register

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
        fontWeight: 'bold',
        paddingTop: 20,
        paddingLeft: 50,
    },
    subtitle: {
        fontSize: 13,
        paddingTop: 20,
        paddingLeft: 50,
        paddingRight: 40,
        color: 'grey'
    },
    verifyContainer: {
        flex: 4,
        // backgroundColor: 'blue',
        alignItems: 'center',

    },
    verifyArea: {
        // backgroundColor: 'pink',
        marginTop: 15,
        alignItems: 'center',
        marginBottom: 30,
    },
    verifyInput: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 22,
        padding: 10,
        backgroundColor: '#fff',
    },
    loginOption: {
        flex: 1.25,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: 'blue'
    },
})