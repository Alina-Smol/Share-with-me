import React from "react";
import Card from "./Card";
import Search from "./Search";

function Content(){
    return(
        <div className="content p-30">
            <div className="d-flex align-center justify-between">
                <h1>Книги</h1>
                <Search/>
            </div>
            <div className="d-flex flex-wrap">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

export default Content