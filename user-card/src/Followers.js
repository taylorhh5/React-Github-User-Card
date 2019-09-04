import React from 'react';
import { Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { Image } from 'semantic-ui-react'


class FollowersCards extends React.Component {
    render(){
    return (
        <Card>
            <Card.Content header={this.props.followers.login} />
           
            <Image src={this.props.followers.avatar_url} wrapped ui={false} />

        </Card>
    )
}
}

export default FollowersCards;

