import React from 'react';
import { Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { Image } from 'semantic-ui-react'


function FollowersCards(props) {
    return (
        <Card>
            <Card.Content header={props.followers.login} />
           
            <Image src={props.followers.avatar_url} wrapped ui={false} />

        </Card>
    )
}

export default FollowersCards;