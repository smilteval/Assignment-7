import React, { Component } from 'react'
import App from '../App'
import SearchField from './SearchField'
import { Link } from "react-router-dom";

export default class NavBar extends Component {

    render() {
        return(
            <div className="App-header">
                <h1>GIPHY</h1>
                <div className="nav-bar">
                    <Link to="./Trending">
                        <button className="nav-button">
                            Trending
                        </button>
                    </Link>
                    <Link to="./">
                        <button className="nav-button">
                            Search
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

