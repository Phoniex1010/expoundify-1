import { Text, View, Button, StyleSheet, TouchableOpacity, FlatList, ScrollView} from "react-native";
import { defaultStyles } from "../Globals";
import React, { useEffect, useState } from "react";
import Articles from "../Articles";

export default function Home() {
    return (
        <View style={[defaultStyles.container, {alignItems:'center'}]}>
            <ScrollView>
                <Articles/>
            </ScrollView>
        </View>
    )
}