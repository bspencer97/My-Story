import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { Header, FormInput, Button } from 'react-native-elements';
import NavigationService from '../../NavigationService';
import { PRIMARY_COLOR, ALT_COLOR, SECONDARY_COLOR, SECONDARY_COLOR_LIGHT } from '../constants/styles';

class StoryCreateScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            story: [],
            storyObject: {},
            title: '', 
            genre: '',
            characters: '',
            summary: '',
            world: '',
            plot: ''
        };
    }

    createNewObject = () => {
        this.setState({
            storyObject: {
                title: this.state.title, 
                genre: this.state.genre, 
                characters: this.state.characters, 
                summary: this.state.summary,
                world: this.state.world,
                plot: this.state.plot
            }
        })
    }


    storeData = async () => {
        this.createNewObject();
        var oldData = null;
        try {
            const value = await AsyncStorage.getItem('stories');
            if (value !== null) {
                oldData = JSON.parse(value);
                this.state.story = oldData;
            }
        } catch(error) {
            //ERROR
        }

        this.state.story.push(this.state.storyObject);

        try {
          await AsyncStorage.setItem('stories', JSON.stringify(this.state.story)); 
        } catch (error) {
          // Error saving data
        }
    }

    onButtonPress = () => {
        this.storeData().then(() => NavigationService.navigate('stories'))
    }

    render() {
        return (
            <View>
                <Header
                   leftComponent={headerProps.leftComponent}
                   centerComponent={headerProps.centerComponent}
                   rightComponent={headerProps.rightComponent}
                   backgroundColor={PRIMARY_COLOR}
                   outerContainerStyles={{borderBottomColor: ALT_COLOR, borderBottomWidth: 2}}
                />

                <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Text style={styles.inputTextStyle}>Title: </Text>
                    <FormInput
                        // placeholder='New Story'
                        // placeholderTextColor = 'gray'
                        selectionColor={ALT_COLOR}
                        underlineColorAndroid={ALT_COLOR}
                        inputStyle={styles.formInputStyle}
                        onChangeText={(title) => this.setState({title})}
                        value={this.state.title}
                    />
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Text style={styles.inputTextStyle}>Genre: </Text>
                    <FormInput
                        // placeholder='Action'
                        // placeholderTextColor = 'gray'
                        selectionColor={ALT_COLOR}
                        underlineColorAndroid={ALT_COLOR}
                        inputStyle={styles.formInputStyle}
                        onChangeText={(genre) => this.setState({genre})}
                        value={this.state.genre}
                    />
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Text style={styles.inputTextStyle}>Characters: </Text>
                    <FormInput
                        // placeholder='John Doe'
                        // placeholderTextColor = 'gray'
                        selectionColor={ALT_COLOR}
                        underlineColorAndroid={ALT_COLOR}
                        inputStyle={styles.formInputStyle}
                        onChangeText={(characters) => this.setState({characters})}
                        value={this.state.characters}
                    />
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Text style={styles.inputTextStyle}>Summary: </Text>
                    <FormInput
                        //placeholder='New Story'
                        //placeholderTextColor = 'gray'
                        selectionColor={ALT_COLOR}
                        underlineColorAndroid={ALT_COLOR}
                        inputStyle={styles.formInputStyle}
                        onChangeText={(summary) => this.setState({summary})}
                        value={this.state.summary}
                    />
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Text style={styles.inputTextStyle}>World: </Text>
                    <FormInput
                        // placeholder='Middle Earth'
                        // placeholderTextColor = 'gray'
                        selectionColor={ALT_COLOR}
                        underlineColorAndroid={ALT_COLOR}
                        inputStyle={styles.formInputStyle}
                        onChangeText={(world) => this.setState({world})}
                        value={this.state.world}
                    />
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Text style={styles.inputTextStyle}>Plot: </Text>
                    <FormInput
                        //placeholder='New Story'
                        // placeholderTextColor = 'gray'
                        selectionColor={ALT_COLOR}
                        underlineColorAndroid={ALT_COLOR}
                        inputStyle={styles.formInputStyle}
                        onChangeText={(plot) => this.setState({plot})}
                        value={this.state.plot}
                    />
                </View>

                
                <Button
                    title="Save"
                    buttonStyle={styles.buttonStyle}
                    textStyle={styles.textStyle}
                    onPress = {this.onButtonPress} 
                />
            </View>
        );
    }    
}

const headerProps = {
    leftComponent: {
        icon: 'keyboard-backspace',
        color: SECONDARY_COLOR_LIGHT,
        size: 30,
        onPress: () => NavigationService.navigate('stories'), 
    },
    centerComponent: {
        text: 'New Story',
        style: {
            fontSize: 35,
            color: SECONDARY_COLOR_LIGHT,
            justifyContent: 'center' 
        }
    }
};

const styles = {
    buttonStyle: {
        marginTop: 10,
        backgroundColor: SECONDARY_COLOR
    },
    textStyle: {
        color: SECONDARY_COLOR_LIGHT,
        fontSize: 30
    },
    inputTextStyle: {
        color: ALT_COLOR,
        fontSize: 18,
        marginTop: 15, 
        marginLeft: 10
    },
    formInputStyle: {
        color: ALT_COLOR,
        height: 40, 
        borderWidth: 0,
        width: 250
    }
};

export default StoryCreateScreen;
