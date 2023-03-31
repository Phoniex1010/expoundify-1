import { Text, View, Button, StyleSheet, TouchableOpacity} from "react-native";
import { defaultStyles } from "../Globals";
import React from "react";

export default function Home() {
    return (
        <View style={[defaultStyles.container, {justifyContent: 'center',  alignItems: 'center',}]}>
            <TouchableOpacity style={[styles.button, {width: '50%', }]} activeOpacity={0.6}>
                <Text style={{color: 'black'}}>Article</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 18,
        paddingHorizontal: 32,
        borderRadius: 16,
        backgroundColor: 'white'
    }
})