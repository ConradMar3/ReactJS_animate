import React from 'react'
import { Header, Icon, Image } from 'semantic-ui-react'
import logo from "../logo.svg";

const HeaderExampleUsersIcon = () => (
    <div>
        <Header as='h2' icon textAlign='center'>
            <Icon name='users' circular />
            <Header.Content>ReactJS-Animate</Header.Content>
        </Header>
    </div>
)

export default HeaderExampleUsersIcon
