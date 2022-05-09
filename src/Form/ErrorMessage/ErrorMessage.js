import React, { Component } from 'react'
import './ErrorMessage.css'

export default class ErrorMessage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <>
                {this.props.message && 
                    <h4>
                        {this.props.message}
                    </h4>
                }
            </>
        )
    }
}
