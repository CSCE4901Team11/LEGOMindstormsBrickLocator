import { useContext } from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from '../constants/context';
import styles from './Browse.styles';

function BrowseScreen () {

    const currentTheme = useContext (ThemeContext);
    const theme = currentTheme.state.theme;

    return (
        <View style={ theme == 'light' ? styles.container_light : theme == 'dark' ? styles.container_dark : styles.container_blue }>
         <Text style = {theme == 'light' ? styles.text_light : theme == 'dark' ? styles.text_dark : styles.text_blue }>
            Browse Screen
         </Text>

         <tempSearchBar style={ theme == 'light' ? styles.tempSearchBar_light : theme == 'dark' ? styles.tempSearchBar_dark : styles.tempSearchBar_blue }>
            placeholder= "Browse Placeholder",
         </tempSearchBar>

         <TouchableOpacity
            style={styles.button_light}
        >
          <Text style={styles.button}>Browse Pieces</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.button_light}
        >
          <Text style={styles.button}>Browse Models</Text>
        </TouchableOpacity>
         
        <TouchableOpacity
            style={styles.button_light}
        >
          <Text style={styles.button}>Browse Guides</Text>
        </TouchableOpacity>

        </View>
    );
    
}

export default BrowseScreen;