import React from 'react';
import {Card} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { Image } from 'semantic-ui-react'


class Cards extends React.Component {
    render(){
    return(
        <Card>
            
            <h1>User: {this.props.user.login}</h1>
            
            <Card.Content header={this.props.user.name} />
           <h2>Location: {this.props.user.location}</h2>
           
            <Image src={this.props.user.avatar_url} wrapped ui={false} />
            <h4> Number of followers: {this.props.user.followers}</h4>
            <div>Followers: {this.props.followers.map(follower=>(
<div> {follower.login}</div>
            ))}</div>
        </Card>
    )
}
}

export default Cards;