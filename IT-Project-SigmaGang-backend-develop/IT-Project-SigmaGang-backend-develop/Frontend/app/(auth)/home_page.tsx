import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
// import { Link, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import HighProteinFood from '@/components/HighProteinFood'
import ADFood from '@/components/ADFood'
import LowFatFood from '@/components/LowFatFood'
import Colors from '@/constants/Colors'

const home_page = () => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<Text style={styles.title}>Today</Text>
				<ADFood />
				<Text style={styles.subtitle}>High Protein Food</Text>
				<HighProteinFood />
				<Text style={styles.subtitle}>Low Fat Food</Text>
				<LowFatFood />
			</ScrollView>
		</SafeAreaView>
	)
}


export default home_page

const styles = StyleSheet.create({
	container: {
		top: 80,
		backgroundColor: Colors.lightGrey,
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		paddingTop: 30,
		paddingLeft: 20,
	},
	subtitle: {
		fontSize: 20,
		fontWeight: "bold",
		paddingTop: 20,
		paddingLeft: 20,
	}
})