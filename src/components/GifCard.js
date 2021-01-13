import React, { Component } from 'react'

export default class GifCard extends Component {

    render() {
        return (
            <div>
                <img src={this.props.image}/>
            </div>
        )
    }
}
