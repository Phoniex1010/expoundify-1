import { Text, View, Button, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import { defaultStyles } from "../Globals";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
    return (
        <View style={[defaultStyles.container, {justifyContent: 'center',  alignItems: 'center', textAlign: 'center'}]}>
            <View style={[{backgroundColor: 'white', borderRadius: 12, width:'80%', height: 48, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}]}>
                <TextInput style={[defaultStyles.TextInput, {height:'100%', textAlign:'left', flex: 1, padding: 12}]}>
                </TextInput>
                <FontAwesomeIcon icon={faMagnifyingGlass} size={28} style={{paddingHorizontal: 12}} />
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    TextInput:{
        backgroundColor: 'white',
        color: 'white',
        borderRadius: 12,
        fontSize: '10',
    },
})