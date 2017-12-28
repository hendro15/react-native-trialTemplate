import React, { Component } from 'react';
import {
    View, Text, Alert
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class Toolbar extends Component {
    _onPressMenu() {
        Alert.alert('Menu pressed');
    }

    render() {
        return (
            <Header>
                <Left>
                    <Button
                        onPress={this._onPressMenu} transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>My Header</Title>
                </Body>
                <Right />
            </Header>
        );
    }
}