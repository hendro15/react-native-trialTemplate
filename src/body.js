import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Content, Form, Item, Label, Input, Button, Text } from 'native-base';
import Style from './style';

export default class Body extends Component {
    state = {
        numberInput: ''
    }

    handleInput = (text) => {
        this.setState({ numberInput: text })
    }

    setNotif = (number) => {
        Alert.alert('input: ' + number)
    }

    render() {
        return (
            <Content>
                <Form>
                    <Item floatingLabel last>
                        <Label>Number of notification</Label>
                        <Input onChangeText={this.handleInput} />
                    </Item>
                </Form>
                <Button block info
                    onPress={() => this.setNotif(this.state.numberInput)}
                    style={[Style.inputButton]}>
                    <Text>Set Notif</Text>
                </Button>
            </Content>
        );
    }
}