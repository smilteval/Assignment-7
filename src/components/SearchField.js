import React, { Component } from "react";
import GifCard from "./GifCard";
import { Link } from "react-router-dom";
//import GifCard from './GifCard';

export default class SearchField extends Component {
  constructor() {
    super();
    this.state = {
      gifName: "",
      gifs: [],
      rating: "",
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
      let data = await response.json();
      this.setState({
        gifs: data.data
      })

    }

    catch (error) {
            console.log(error);
            this.setState({
        gifs: [],
      });
    }
  };

  handleSearch=()=>{
    if(this.state.gifName === ""){
      alert("no results")
    }
    else{
      this.getData();
      <Link to="./Search"></Link>
    }
  };

  handleRating=(event)=>{
    console.log("inside handle rating");
    this.setState({rating: event.target.value});
  };

  handleFilter=()=>{
    console.log("inside handle filter");

    //filters gifs with rating g
    if(this.state.rating === "g"){
      this.setState({
        gifs: this.state.gifs.filter(gif => gif.rating === "g")
      })
    }

    //filters gifs with rating pg
    if(this.state.rating === "pg"){
      this.setState({
        gifs: this.state.gifs.filter(gif => gif.rating === "pg")
      })
    }

    //filters gifs with rating pg
    if(this.state.rating === "pg-13"){
      this.setState({
        gifs: this.state.gifs.filter(gif => gif.rating === "pg-13")
      })
    }

  }
  
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

        <div>
          <label for="ratings">Filter by rating:</label>
          <select name="ratings" onChange={this.handleRating}>
            <option value="all" selected>Show all</option>
            <option value="g">g</option>
            <option value="pg">pg</option>
            <option value="pg-13">pg-13</option>  
          </select>

          <button
            id="filter-btn"
            onClick={() => this.handleFilter()}
          > 
            Filter
          </button>
        </div>
        
        <div id="gifList">
          <br />
          {this.state.gifs.map((gif) => {
            return <GifCard image={gif.images.original.url} rating={gif.rating} />;
          })}
        </div>
      </div>
    );
  }
}
