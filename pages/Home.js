import { Text, View, Button, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import { defaultStyles } from "../Globals";
import React, { useEffect, useState } from "react";
import Articles from "../Articles";

export default function Home() {
    return (
        <View style={[defaultStyles.container, {alignItems:'center'}]}>
            <View style={[{flex:1}]}>
                <Articles />
            </View>
        </View>
    )
}