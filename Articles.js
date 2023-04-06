import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class Articles extends React.Component {
    state = {
        loading: true,
        articles: []
    }

    async componentDidMount() {
        const res = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=051bafb5a3054336b87d2fe889c47e9e")
        const json = await res.json()
        this.setState({
            loading: false,
            articles: json.articles
        })
    }

    render() {
        return (
            <View style={styles.articlesContainer}>
                {this.state.loading ? <Text>Loading</Text> : <FlatList data={this.state.articles} contentContainerStyle={{ flex: 1, flexWrap:'wrap', flexDirection:'row',}} renderItem={(info) => <TouchableOpacity key={info.index} style={[styles.button, {}]} activeOpacity={0.6}>
                            <Text style={{color: 'black'}}>{info.item.title}</Text>
                        </TouchableOpacity>}></FlatList>} 
            </View>
        )
    }
}


const styles = StyleSheet.create({
    button: {
        paddingVertical: 18,
        paddingHorizontal: 32,
        borderRadius: 16,
        backgroundColor: 'white',
        margin: 2
    },
    articlesContainer: {
        flexDirection: 'row',
        flex: 1,
        width: '100%'
    }
})