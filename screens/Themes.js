import { useContext } from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from '../constants/context';
import styles from './Themes.styles'; 

function ThemesScreen () {

    const currentTheme = useContext (ThemeContext);
    const theme = currentTheme.state.theme;

    return (
        <View style={ theme == 'light' ? styles.container_light : theme == 'dark' ? styles.container_dark : theme == 'blue' ? styles.container_blue : theme == 'red' ? styles.container_red : theme == 'purple' ? styles.container_purple : theme == 'yellow' ? styles.container_yellow : styles.container_light }>
         <Text style = {theme == 'light' ? styles.text_light : theme == 'dark' ? styles.text_dark : theme == 'blue' ? styles.text_blue : theme == 'red' ? styles.text_red : theme == 'purple' ? styles.text_purple : theme == 'yellow' ? styles.text_yellow : styles.text_light }>Themes</Text>
        </View>
    );
    
}

export default ThemesScreen;