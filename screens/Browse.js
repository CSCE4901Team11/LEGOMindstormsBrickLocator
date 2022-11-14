import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Pressable, TouchableOpacity , TextInput, Button } from 'react-native';
import { ThemeContext } from '../constants/context';
import styles from './Browse.styles';
import SearchBar from 'react-native-dynamic-search-bar';
import GetPieces from '../components/Pieces';
import staticData from './staticData';

 class Search extends React.Component{
    constructor() {
        super();
        this.state = {
            query: '',
            dataBackup: staticData,
            dataSource: staticData,
        };
    }

    filterList = (text) => {
        var newData = this.state.dataBackup,
        newData = this.state.dataBackup.filter((item) => {
            const itemData = item.name.toLowercase();
            const testData = text.toLowercase();
            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            query:text,
            dataSource: newData,
        });
    };

    renderItem(item){
        return(
            <View style={ theme == 'light' ? styles.container_light : theme == 'dark' ? styles.container_dark : styles.container_blue }> //make background style for results
                key={item.name}
                title={item.name}
                imageSource={item.image }
                subtitle={item.color}
            </View>
        );
    };

}

function BrowseScreen () {

    const currentTheme = useContext (ThemeContext);
    const theme = currentTheme.state.theme;
    const legoSearch = new Search();


    return (
        <View style={ theme == 'light' ? styles.container_light : theme == 'dark' ? styles.container_dark : styles.container_blue }>
         {/* <Text style = {theme == 'light' ? styles.text_light : theme == 'dark' ? styles.text_dark : styles.text_blue }>Browse Screen</Text> */}
         <SearchBar
            placeholder="Search here"
            //onPress={() => alert("onPress")}
            onChangeText={(text) => legoSearch.filterList(text)}
            onSearchPress={() => console.log("Search Icon is pressed")}
            onClearPress={() => legoSearch.filterList("")}
            onPress={() => alert("onPress")}
         />
         <GetPieces />
        </View>
    );
    
}

export default BrowseScreen;
