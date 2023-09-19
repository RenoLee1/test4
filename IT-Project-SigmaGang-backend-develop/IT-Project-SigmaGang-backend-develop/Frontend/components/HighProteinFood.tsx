import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { HighProteinFoodImage } from '@/assets/images/homepageImage'

const HighProteinFood = () => {
	return (
		<ScrollView contentContainerStyle={
			{ padding: 15 }
		} horizontal showsHorizontalScrollIndicator={false} >
			{
				HighProteinFoodImage.map((item, index) => (
					<View style={styles.ImageCard} key={index}>
						<Image source={item.img} />
						<Text style={styles.ImageText}>{item.text}</Text>
					</View>
				))
			}
		</ScrollView >
	)
}

export default HighProteinFood

const styles = StyleSheet.create({
	ImageCard: {
		padding: 10,
		backgroundColor: '#fff',
		elevation: 2,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.06,
		borderRadius: 4,
		marginHorizontal: 3,
		alignItems: 'center',
		justifyContent: 'center',
	},
	ImageText: {
		fontSize: 15,
		textAlign: 'center',
		fontWeight: 'bold',
	},
})