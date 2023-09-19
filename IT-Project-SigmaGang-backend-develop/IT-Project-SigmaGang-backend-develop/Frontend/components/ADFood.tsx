import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ADImage } from '@/assets/images/homepageImage'

const ADFood = () => {
    return (
        <ScrollView contentContainerStyle={
            { padding: 15 }
        } horizontal showsHorizontalScrollIndicator={false} >
            {
                ADImage.map((item, index) => (
                    <View style={styles.ImageCard} key={index}>
                        <Image source={item.img} />
                        <Text style={styles.ImageText}>{item.text}</Text>
                    </View>
                ))
            }
        </ScrollView >
    )
}

export default ADFood

const styles = StyleSheet.create({
    ImageCard: {
        padding: 10,
        backgroundColor: '#fff',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06,
        borderRadius: 8,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ImageText: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
})