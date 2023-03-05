import { useContext } from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from '../constants/context';
import styles from './Browse.styles';
import SearchBar from 'react-native-dynamic-search-bar';
import GetPieces from '../components/Pieces';

function BrowseScreen () {

    const currentTheme = useContext (ThemeContext);
    const theme = currentTheme.state.theme;


    return (
        <View style={ theme == 'light' ? styles.container_light : theme == 'dark' ? styles.container_dark : theme == 'blue' ? styles.container_blue : theme == 'red' ? styles.container_red : theme == 'purple' ? styles.container_purple : theme == 'yellow' ? styles.container_yellow : styles.container_light }>
         {/* <Text style = {theme == 'light' ? styles.text_light : theme == 'dark' ? styles.text_dark : theme == 'blue' ? styles.text_blue : theme == 'red' ? styles.text_red : theme == 'purple' ? styles.text_purple : theme == 'yellow' ? styles.text_yellow : styles.text_light }>Browse Screen</Text> */}
         <SearchBar
            placeholder="Search here"
            onPress={() => alert("onPress")}
            onChangeText={(text) => console.log(text)}
         />
         <GetPieces />
        </View>
    );
    
}

export default BrowseScreen;