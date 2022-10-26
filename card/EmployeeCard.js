import 'semantic-ui-css/semantic.min.css'

import {Card, Image, Icon} from 'semantic-ui-react'
import {Container, Button, Header } from 'semantic-ui-react'
import {Component} from "react";


export default class EmployeeCard extends Component {
    render(){
        return(
            <Card>
                <Image src={this.props.url} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{this.props.name} </Card.Header>
                    {this.props.author}
                    <Card.Meta>
                        <span className='date'>{this.props.comeback}</span>
                    </Card.Meta>
                    <Card.Description>
                        <div>
                            <Image src={this.props.avatar} avatar />
                            <span>{this.props.username}</span>
                        </div>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='book' />
                        Raiting {this.props.raiting}
                    </a>

                </Card.Content>
                <button className="ui button">Запрос</button>
            </Card>
        )
    }
}