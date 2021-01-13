import React from 'react'

class Zip extends React.Component{
    constructor(){
        super();
        this.state = {
            searchInput: ""
        }
    }
}


export default function SearchField() {
    return (
        <div>
            <form>
                <input
                type="text"
                name="searchInput"
                placeholder="Search for a gif!"
                >
                </input> 
                <input
                type="submit">
                </input>
            </form>
        </div>
    )
}
