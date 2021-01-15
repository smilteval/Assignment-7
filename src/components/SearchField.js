import React, { Component } from "react";

export default class SearchField extends Component {
  constructor() {
    super();
    this.state = {
      gifName: "",
      rating: "all",
      allGifs: [],
      filteredGifs: [],
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
        filteredGifs: responseObject.data
      })
    }

    catch (error) {
      console.log(error);
    }
  };

  //if the input field is empty, alert the user
  //if not, fetch the data from an api
  handleSearch=()=>{
    if(this.state.gifName === ""){
      alert("no results")
    }
    else{
      this.getData();
      this.setState({
        rating: "all"
      })
    }
  };

  //change the state of the rating based on dropdown menu choice
  handleRating=(event)=>{
    console.log("inside handle rating");
    this.setState({rating: event.target.value});
  };

  //get the rating and filter the original gif array based on it
  handleFilter=()=>{
    switch(this.state.rating){
      case "g":
        this.setState({
          filteredGifs: this.state.allGifs.filter(gif => gif.rating === "g")
        })
        break;
      case "pg":
        this.setState({
          filteredGifs: this.state.allGifs.filter(gif => gif.rating === "pg")
        })
        break;
      case "pg-13":
        this.setState({
          filteredGifs: this.state.allGifs.filter(gif => gif.rating === "pg-13")
        })
        break;
      default:
        this.setState({
          filteredGifs: this.state.allGifs
        })
    }
  }
  
  render() {
    return (
      <div>

        <div id="search-field">
          <input
            type="text"
            name="searchInput"
            placeholder="Search for a gif!"
            onChange={this.handleChange}
          />
          <button id="search-btn" onClick={() => this.handleSearch()}>Search</button>
        </div>
        
        <div id="filter-field">
          <label for="ratings">Filter by rating:</label>
          <select name="ratings" onChange={this.handleRating}>
            <option value="all" selected>Show all</option>
            <option value="g">G (General Audience)</option>
            <option value="pg">PG (Parental Guidance Suggested)</option>
            <option value="pg-13">PG-13 (Parents Strongly Cautioned)</option>  
          </select>
          <button id="filter-btn" onClick={() => this.handleFilter()}>Filter</button>
        </div>

        <div id="gif-field">
          {this.state.filteredGifs.map(gif=>{
              return <img class="gif" src={gif.images.original.url}/>
          })}
        </div>

      </div>
    );
  }
}