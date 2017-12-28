import React, { Component } from 'react';
import { Container, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';

export default class Foot extends Component {

    constructor() {
        super();
        this.state = {
            status: true,
            buttonStatus: false,
            badgeCount: 5
        }
    }

    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button badge vertical active={this.state.buttonStatus}>
                        {
                            this.state.status ? <Badge><Text>{this.state.badgeCount}</Text></Badge> : null
                        }
                        <Icon name="apps" />
                        <Text>Apps</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="camera" />
                        <Text>Camera</Text>
                    </Button>
                    <Button vertical>
                        <Icon active name="navigate" />
                        <Text>Navigate</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="person" />
                        <Text>Contact</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}