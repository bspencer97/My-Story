import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import NavigationService from '../../NavigationService';
import { PRIMARY_COLOR, SECONDARY_COLOR, SECONDARY_COLOR_LIGHT } from '../constants/styles';
import { FontAwesome } from '@expo/vector-icons';

class LoginScreen extends Component {
    onAuthComplete = () => {
        NavigationService.navigate('stories', null)
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={{marginBottom: 10}}>
                    <Text style={styles.titleStyle}>My Story</Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <FontAwesome name="book" size={200} color={SECONDARY_COLOR} />
                </View>

                <View>
                    <Button 
                        buttonStyle={styles.buttonStyle}
                        textStyle={styles.textStyle}
                        title="Log in"
                        large
                        onPress={this.onAuthComplete}
                    />
                </View>

                <View>
                    <Button 
                        buttonStyle={styles.buttonStyle}
                        textStyle={styles.textStyle}
                        title="Sign up"
                        large
                        onPress={this.onAuthComplete}
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    buttonStyle: {
        marginTop: 10,
        backgroundColor: SECONDARY_COLOR
    },
    textStyle: {
        color: SECONDARY_COLOR_LIGHT,
        fontSize: 30
    },
    titleStyle: {
        color: PRIMARY_COLOR,
        textShadowColor: SECONDARY_COLOR,
        textShadowOffset: {width: 5, height: 5},
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 80,
        marginBottom: 30
      //  fontFamily: 'Franklin Gothic'
    }
};

export default LoginScreen;
