import { useContext } from 'react';
import { View, Text, Pressable, TouchableOpacity , TextInput } from 'react-native';
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
           
            <Pressable
              title = "Browse Pieces"
              //accessibilityLabel= "Browse Pieces"
              style= {styles.button_light}
            />

            <Pressable
              title = "Browse Models"
              //accessibilityLabel= "Browse Models"
              style= {styles.button_light}
            />

           <Pressable
              title = "Browse Guides"
              //accessibilityLabel= "Browse Guides"
              style= {styles.button_light}
            />


        </View>
    );
    
}

export default BrowseScreen;