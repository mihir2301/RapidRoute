import React,{Component} from 'react';
import Node from './node/node';

import './rapidroute.css';

export default class rapidroute extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <div>
                FOO
                <Node></Node>
            </div>
        );
    }
}