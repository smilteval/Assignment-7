import React,{Component} from 'react'

export default class SearchField extends React.Component {

    render(){
        return (
            <div>
                <form>
                    <input
                        type="text"
                        name="searchInput"
                        placeholder="Search for a GIF!"
                    >
                    </input> 
                    <input
                        type="submit">
                    </input>
                </form>
            </div>
        )
    }
}
