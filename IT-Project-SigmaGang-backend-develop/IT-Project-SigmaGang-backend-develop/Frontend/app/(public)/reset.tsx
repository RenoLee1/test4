import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Button from '@/components/Button'
import Colors from '@/constants/Colors'

const register = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Create new password</Text>
                <Text style={styles.subtitle}>Your new password should be unique from the previously used.</Text>
            </View>
            <View style={styles.resetContainer}>
                <View style={styles.resetArea}>
                    <TextInput
                        style={styles.resetInput}
                        placeholder='New password'
                        placeholderTextColor={Colors.medium}
                        secureTextEntry
                    />
                    <TextInput
                        style={styles.resetInput}
                        placeholder='Confirm password'
                        placeholderTextColor={Colors.medium}
                        secureTextEntry
                    />
                </View>
                <Link href={'/(public)/login'} asChild>
                    <TouchableOpacity>
                        <Button label={"Reset Password"} theme={'Grey'} />
                    </TouchableOpacity>
                </Link>
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
        paddingLeft: 30,
    },
    subtitle: {
        fontSize: 13,
        paddingTop: 20,
        paddingLeft: 30,
        color: 'grey'
    },
    resetContainer: {
        flex: 4,
        // backgroundColor: 'blue',
        alignItems: 'center',

    },
    resetArea: {
        // backgroundColor: 'pink',
        marginTop: 15,
        alignItems: 'center',
        marginBottom: 30,
    },
    resetInput: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 22,
        padding: 10,
        backgroundColor: '#fff',
    },
})