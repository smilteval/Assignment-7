import React, { Component } from "react";
import GifCard from "./GifCard";
import { Link } from "react-router-dom";
//import GifCard from './GifCard';

export default class SearchField extends Component {
  constructor() {
    super();
    this.state = {
      gifName: "",
      rating: "all",
      allGifs: [],
      gRatedGifs: [],
      pgRatedGifs: [],
      pg13RatedGifs: [],
    };
  }

  //every time a user enters a gif name, update it
  handleChange = (event) => {
    console.log("inside handleChange");
    this.setState({ gifName: event.target.value });
  };

  //get data from an api
  getData = async () => {
    console.log("inside getData");
    try {
      //get a response from an api
      let response = await fetch(
        "http://api.giphy.com/v1/gifs/search?q=" +
          this.state.gifName +
          "&api_key=W8fWbmNISlnnYSoZC6fsnCxrmYHlodt8"
      );

      //if there was an error, print it
      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      //turn the response into a data object
      let responseObject = await response.json();

      this.setState({
        allGifs: responseObject.data,
        gRatedGifs: responseObject.data.filter(gif => gif.rating === "g"),
        pgRatedGifs: responseObject.data.filter(gif => gif.rating === "pg"),
        pg13RatedGifs: responseObject.data.filter(gif => gif.rating === "pg-13"),
      })
    }

    catch (error) {
      console.log(error);
    }
  };

  handleSearch=()=>{
    if(this.state.gifName === ""){
      alert("no results")
    }
    else{
      this.getData();
    }
  };

  handleRating=(event)=>{
    console.log("inside handle rating");
    this.setState({rating: event.target.value});
  };
  
  render() {
    return (
      <div>
        <input
          type="text"
          name="searchInput"
          placeholder="Search for a gif!"
          onChange={this.handleChange}
        />

        <button
          id="search-btn"
          onClick={() => this.handleSearch()}
        >
          Search
        </button>       

        <br/>

      </div>
    );
  }
}
