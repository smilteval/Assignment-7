import React, { Component } from "react";
import App from '../App';

class TrendingGifs extends React.Component {
  constructor() {
    super();
    this.state = {
      gifList: [],
    };
  }

  componentDidMount() {
    fetch(
      "http://api.giphy.com/v1/gifs/trending?api_key=W8fWbmNISlnnYSoZC6fsnCxrmYHlodt8"
    )
      .then((response) => response.json())
      .then((data) => {
          console.log(data.data)
        this.setState({
          gifList: [data.data],
        });
        console.log(this.state.gifList);
      })
  }

  render() {
    return <div class="container">{this.state.gifList}</div>;
  }
}

export default TrendingGifs;
