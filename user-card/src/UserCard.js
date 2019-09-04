import React from 'react';
import {Card} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { Image } from 'semantic-ui-react'


function Cards (props){
    return(
        <Card>
            
            <h1>User: {props.user.login}</h1>
            
            <Card.Content header={props.user.name} />
           <h2>Location: {props.user.location}</h2>
           
            <Image src={props.user.avatar_url} wrapped ui={false} />
            <h2> Number of followers: {props.user.followers}</h2>
            <div>Followers: {props.followers.map(follower=>(
<div> {follower.login}</div>
            ))}</div>
        </Card>
    )
}

export default Cards;