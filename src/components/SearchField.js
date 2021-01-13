import React, {Component} from 'react'
import GifCard from './GifCard';
//import GifCard from './GifCard';

export default class SearchField extends Component {

    constructor(){
        super();
        this.state = {
            gifName: null,
            gifs: [],
        };
    }

    //every time a user enters a gif name, update it
    handleChange = event => {
        console.log("inside handleChange")
        this.setState({gifName: event.target.value});
    }


    //get data from an api
    getData = async () => {
        console.log("inside getData")
        try{
            //get a response from an api
            let response = await fetch("http://api.giphy.com/v1/gifs/search?q="+this.state.gifName+"&api_key=W8fWbmNISlnnYSoZC6fsnCxrmYHlodt8");
            
            //if there was an error, print it
            if(!response.ok){
                throw new Error("Something went wrong");
            }
            
            //turn the response into a data object
            let data = await response.json();

            this.setState({
                gifs: data.data //set the city data to the data received from an api
            });
        }

        catch(error){
            console.log(error);
            this.setState({
                gifs: []
            });
        }
    }    


    render(){
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
                        onClick={() => {this.getData()}}
                    >
                        Search
                    </button>
                

                {this.state.gifs.map(gif=>{
                    return (
                        <GifCard image={gif.images.original.url}/>
                    )
                })}
                
            </div>
        )
    }
}