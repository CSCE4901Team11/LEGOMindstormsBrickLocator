import React, { useContext } from 'react';
import { View, Text, Pressable, TouchableOpacity , TextInput, Button } from 'react-native';
import { ThemeContext } from '../constants/context';
import styles from './Browse.styles';
import SearchBar from 'react-native-dynamic-search-bar';
import GetPieces from '../components/Pieces';

function BrowseScreen () {

    const currentTheme = useContext (ThemeContext);
    const theme = currentTheme.state.theme;


    return (
        <View style={ theme == 'light' ? styles.container_light : theme == 'dark' ? styles.container_dark : styles.container_blue }>
         {/* <Text style = {theme == 'light' ? styles.text_light : theme == 'dark' ? styles.text_dark : styles.text_blue }>Browse Screen</Text> */}
         <SearchBar
            placeholder="Search here"
            //onPress={() => alert("onPress")}
            onChangeText={(text) => this.filterList(text)}
            onSearchPress={() => console.log("Search Icon is pressed")}
            onClearPress={() => this.filterList("")}
            onPress={() => alert("onPress")}
         />
         <GetPieces />
        </View>
    );
    
}

export default BrowseScreen;
