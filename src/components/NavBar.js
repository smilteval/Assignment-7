import React, { Component } from 'react'
import App from '../App'
import SearchField from './SearchField'
import { Link } from "react-router-dom";

export default class NavBar extends Component {

    render() {
        return(
            <div>
                <div className="App-header">
                    <h1>GIPHY</h1>
                </div>

                <div className="nav-bar">
                    <Link to="/">
                        <button className="nav-button">
                            TRENDING
                        </button>
                    </Link>
                    <Link to="/Search">
                        <button className="nav-button">
                            SEARCH
                        </button>
                    </Link>
                </div>
            </div> 
        )
    }
}

