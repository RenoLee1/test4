import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'
import Colors from '@/constants/Colors'

import ImageViewer from '@/components/imageViewer';
import Button from '@/components/Button';
const PlaceholderImage = require('@/assets/images/FitPlate_logo.png');


export default function StartPage() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer placeholderImageSource={PlaceholderImage} />
            </View>
            <Link href={'/(public)/login'} asChild>
                <TouchableOpacity>
                    <Button label={"Sign In"} theme={'Grey'} />
                </TouchableOpacity>
            </Link>
            <Link href={'/(public)/register'} asChild>
                <TouchableOpacity>
                    <Button label={"Sign Up"} theme={' '} />
                </TouchableOpacity>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.lightGrey,
    },
    imageContainer: {
        flex: 4 / 5,
        paddingTop: 100,
    },
});