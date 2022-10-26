import 'semantic-ui-css/semantic.min.css'

import React from 'react'
import {Container, Menu} from 'semantic-ui-react'
import EmployeeJS from "./EmployeeList";
import addMyMenu from "./addMyMenu";


export default function App(){
    return(
        <div className="App"> 
            <Container>
                <h1> Книги </h1>
                <EmployeeJS/>
            </Container>
        </div>
    );
}
