import React, {Component} from 'react';
import {View, Text, Pressable, TouchableOpacity , TextInput, Button} from 'react-native';
import { ThemeContext } from '../constants/context';
//import {SafeAreaView} from 'react-native-safe-area-context';
/**
 * ? Local Imports
 */
// import SearchBar from "react-native-dynamic-search-bar";
import SearchBar from 'react-native-dynamic-search-bar';
import styles from './Search.styles';
// Static Data
import staticData from './staticData';

interface IProps {}

interface IState {
  query: string;
  dataBackup: any;
  dataSource: any;
}

export default class Search extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      query: '',
      dataBackup: staticData,
      dataSource: staticData,
    };
  }

  filterList = (text: string) => {
    var newData = this.state.dataBackup;
    newData = this.state.dataBackup.filter((item: any) => {
      const itemData = item.name.toLowerCase();
      const textData = text.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      query: text,
      dataSource: newData,
    });
  };

  /*renderRightComponent = (item: any) => (
    <View>
     
    </View>
  );*/

  renderItem(item: any) {
    const currentTheme = useContext (ThemeContext);
    const theme = currentTheme.state.theme;

    return (
      <View style={ theme == 'light' ? styles.container_light : theme == 'dark' ? styles.container_dark : styles.container_blue }> //make background style for results
        key={item.name}
        title={item.name}
        imageSource={item.image}
        subtitle={item.color}
      </View>
    );
  };
}  