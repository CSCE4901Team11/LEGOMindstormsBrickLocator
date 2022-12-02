import { useContext } from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from '../constants/context';
import styles from './Themes.styles'; 

function ThemesScreen () {

  const currentTheme = useContext (ThemeContext);
  const theme = currentTheme.state.theme;
  const colors = Themes[theme]

  const blueThemeChange = ()  => {
    currentTheme.dispatch({ type: "BLUEMODE" })
  };

  const redThemeChange = ()  => {
    currentTheme.dispatch({ type: "REDMODE" })
  };

  const purpleThemeChange = ()  => {
    currentTheme.dispatch({ type: "PURPLEMODE" })
  };

  const yellowThemeChange = ()  => {
    currentTheme.dispatch({ type: "YELLOWMODE" })
  };


    return (
        <View style={ theme == 'light' ? styles.container_light : theme == 'dark' ? styles.container_dark : theme == 'blue' ? styles.container_blue : theme == 'red' ? styles.container_red : theme == 'purple' ? styles.container_purple : theme == 'yellow' ? styles.container_yellow : styles.container_light }>
         <Text style = {theme == 'light' ? styles.text_light : theme == 'dark' ? styles.text_dark : theme == 'blue' ? styles.text_blue : theme == 'red' ? styles.text_red : theme == 'purple' ? styles.text_purple : theme == 'yellow' ? styles.text_yellow : styles.text_light }>Themes</Text>
        
        
  


        <View style={styles.button}>
          <Button
            color="#01050d"
            title='Blue Mode'
            onPress={ blueThemeChange }
          />
          </View>

          <View style={styles.button}>
          <Button
            color="#01050d"
            title='Red Mode'
            onPress={ redThemeChange }
          />
          </View>

          <View style={styles.button}>
          <Button
            color="#01050d"
            title='Purple Mode'
            onPress={ purpleThemeChange }
          />
          </View>

          <View style={styles.button}>
          <Button
            color="#01050d"
            title='Yellow Mode'
            onPress={ yellowThemeChange }
          />
          </View>
       
        </View>
    );
    
}

export default ThemesScreen;