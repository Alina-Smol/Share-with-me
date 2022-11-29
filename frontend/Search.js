import React from "react";

function Search(){
    return(
        <div className="search_block d-flex">
            <img src="/search.svg" alt="Search"/>
            <input className="input_search" placeholder="Поиск..."/>
        </div>
    )
}

export default Search