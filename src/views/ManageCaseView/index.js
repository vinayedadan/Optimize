import React, { Component } from 'react';
import NavBar from '../../components/navbar';
import TouchableOpacityBtn from '../../components/opacity-btn';
import Calender from '../../components/calender';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import styles from './style';

export default class ManageCase extends Component {
    render() {
        return (
        <View style={styles.wrapper}>
          <NavBar styles={styles.navWrapper}>
              <TouchableOpacityBtn navigator={this.props.navigator} onPress = { this.onPress } id='MainCategory' label="< Back"/>
              <Text style={styles.headingText} >Manage Case</Text>
              <TouchableOpacityBtn navigator={this.props.navigator} onPress = { this.onPress } id='Login' label="Logout"/>
          </NavBar>
          <Calender/>
        </View>
        );
    }
}