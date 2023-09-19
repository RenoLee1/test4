import { StyleSheet, View, Pressable, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Button({ label, theme }) {
    if (theme === "Grey") {
        return (
            <View style={styles.buttonContainer}>
                <View style={[styles.button, {backgroundColor: 'grey'}]}>
                    <Text style={[styles.buttonLabel, {color: "#fff"}]}>{label}</Text>
                </View>
            </View>
        );
    }
    return (
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Text style={[styles.buttonLabel, {color: "black"}]}>{label}</Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 60,
        padding: 10,
        borderRadius: 10,
        // backgroundColor: 'green',
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 2,
    },
    buttonLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
