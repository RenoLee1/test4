import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';

const SearchBar = () => (
    <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
            <View style={styles.searchArea}>
                <Ionicons style={styles.searchIcon} name="ios-search" size={20} color={Colors.medium} />
                <TextInput style={styles.searchInput} placeholder='Foods, Recipes, Meal Plans' placeholderTextColor={Colors.medium} />
            </View>
            <Link href={'/home_page'} asChild >
                <TouchableOpacity style={styles.optionButton}>
                    <Ionicons name="options-outline" size={25} color={Colors.primary} />
                </TouchableOpacity>
            </Link>
        </View>
    </View>
);

const CustomHeader = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('@/assets/images/FitPlate_logo.png')} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>FitPlate</Text>
                </View>
                <TouchableOpacity style={styles.profileButton}>
                    <Ionicons name='person-outline' size={20} color={Colors.primary}></Ionicons>
                </TouchableOpacity>
            </View>
            <SearchBar />
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        height: 60,
        backgroundColor: '#fff',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    logo: {
        width: 35,
        height: 35,
    },
    titleContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    profileButton: {
        backgroundColor: Colors.lightGrey,
        padding: 10,
        borderRadius: 50,
    },
    searchContainer: {
        height: 60,
        backgroundColor: '#fff',
    },
    searchBar: {
        flexDirection: 'row',
        gap: 10,
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    searchArea: {
        flex: 1,
        backgroundColor: Colors.lightGrey,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchIcon: {
        paddingLeft: 10,
    },
    searchInput: {
        padding: 5,
        color: Colors.medium,
        fontWeight: 'bold',
    },
    optionButton: {
        padding: 10,
        borderRadius: 50,
    },
});

export default CustomHeader;