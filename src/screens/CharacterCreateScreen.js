import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { Header, FormInput, Button } from 'react-native-elements';
import NavigationService from '../../NavigationService';
import { PRIMARY_COLOR, ALT_COLOR, SECONDARY_COLOR, SECONDARY_COLOR_LIGHT } from '../constants/styles';

class CharacterCreateScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            character: [],
            characterObject: {},
            name: '',
            race: '',
            ethnicity: '',
            age: '',
            gender: '',
            //height: '',
            //design: '',
            personality: '',
            backstory: '',
            summary: '',
            notes: ''
        };
    }

    createNewObject = () => {
        this.setState({
            characterObject: {
                name: this.state.name,
                race: this.state.race,
                ethnicity: this.state.ethnicity,
                age: this.state.age,
                gender: this.state.gender,
                //height: this.state.height,
                //design: this.state.design,
                personality: this.state.personality,
                backstory: this.state.backstory,
                summary: this.state.summary,
                notes: this.state.notes
            }
        })
    }


    storeData = async () => {
        this.createNewObject();
        var oldData = null;
        try {
            const value = await AsyncStorage.getItem('characters');
            if (value !== null) {
                oldData = JSON.parse(value);
                this.state.character = oldData;
            }
        } catch(error) {
            //ERROR
        }

        this.state.character.push(this.state.characterObject);

        try {
          await AsyncStorage.setItem('characters', JSON.stringify(this.state.character)); 
        } catch (error) {
          // Error saving data
        }
    }

    onButtonPress = () => {
        this.storeData().then(() => NavigationService.navigate('characters'))
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
                    <Text style={styles.inputTextStyle}>Name: </Text>
                    <FormInput
                        selectionColor={ALT_COLOR}
                        underlineColorAndroid={ALT_COLOR}   
                        inputStyle={styles.formInputStyle}
                        onChangeText={(name) => this.setState({name})}
                        value={this.state.name}
                    />
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Text style={styles.inputTextStyle}>Race: </Text>
                    <FormInput
                        selectionColor={ALT_COLOR}
                        underlineColorAndroid={ALT_COLOR}
                        inputStyle={styles.formInputStyle}
                        onChangeText={(race) => this.setState({race})}
                        value={this.state.race}
                    />
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Text style={styles.inputTextStyle}>Ethnicity: </Text>
                    <FormInput
                        selectionColor={ALT_COLOR}
                        underlineColorAndroid={ALT_COLOR}
                        inputStyle={styles.formInputStyle}
                        onChangeText={(ethnicity) => this.setState({ethnicity})}
                        value={this.state.ethnicity}
                    />
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Text style={styles.inputTextStyle}>Age: </Text>
                    <FormInput
                        selectionColor={ALT_COLOR}
                        underlineColorAndroid={ALT_COLOR}
                        inputStyle={styles.formInputStyle}
                        onChangeText={(age) => this.setState({age})}
                        value={this.state.age}
                    />
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Text style={styles.inputTextStyle}>Gender: </Text>
                    <FormInput
                        selectionColor={ALT_COLOR}
                        underlineColorAndroid={ALT_COLOR}
                        inputStyle={styles.formInputStyle}
                        onChangeText={(gender) => this.setState({gender})}
                        value={this.state.gender}
                    />
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Text style={styles.inputTextStyle}>Personality: </Text>
                    <FormInput
                        selectionColor={ALT_COLOR}
                        underlineColorAndroid={ALT_COLOR}
                        inputStyle={styles.formInputStyle}
                        onChangeText={(personality) => this.setState({personality})}
                        value={this.state.personality}
                    />
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Text style={styles.inputTextStyle}>Backstory: </Text>
                    <FormInput
                        selectionColor={ALT_COLOR}
                        underlineColorAndroid={ALT_COLOR}
                        inputStyle={styles.formInputStyle}
                        onChangeText={(backstory) => this.setState({backstory})}
                        value={this.state.backstory}
                    />
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Text style={styles.inputTextStyle}>Summary: </Text>
                    <FormInput
                        selectionColor={ALT_COLOR}
                        underlineColorAndroid={ALT_COLOR}
                        inputStyle={styles.formInputStyle}
                        onChangeText={(summary) => this.setState({summary})}
                        value={this.state.summary}
                    />
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Text style={styles.inputTextStyle}>Notes: </Text>
                    <FormInput
                        selectionColor={ALT_COLOR}
                        underlineColorAndroid={ALT_COLOR}
                        inputStyle={styles.formInputStyle}
                        onChangeText={(notes) => this.setState({notes})}
                        value={this.state.notes}
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
        onPress: () => NavigationService.navigate('characters'), 
    },
    centerComponent: {
        text: 'New Character',
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

export default CharacterCreateScreen;
