import React, { Component } from 'react'

export default class GifCard extends Component {

    render() {
        return (
            <>
                <img id="gif" src={this.props.image}/>
                <h4>{this.props.rating}</h4>
            </>
        )
    }
}
