import React, { Component } from "react";

class TrendingGifs extends React.Component {
  constructor() {
    super();
    this.state = {
      gifList: [{}],
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
          gifList: data,
        });
      })
  }

  render() {
    return <div class="container">{this.state.gifList}</div>;
  }
}

export default TrendingGifs;
