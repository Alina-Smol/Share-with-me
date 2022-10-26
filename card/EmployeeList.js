import 'semantic-ui-css/semantic.min.css'

import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import EmployeeCard from "./EmployeeCard";

export default function EmployeeList() {
        return(
<Card.Group>
    <EmployeeCard url="https://ampravda.ru/files/articles-2/109728/v1kh8320o6br.jpeg"
    name="Мастер и Маргарита"
    author = "Михаил Булгаков"
    comeback  = "14 дней"
                  avatar = "https://funik.ru/wp-content/uploads/2018/10/17478da42271207e1d86.jpg"
                  username = "Алина"
     raiting = "9.5"
    />

    <EmployeeCard url="https://i2.wp.com/bookbrain.ru/wp-content/uploads/2019/01/Karazin1.jpg?w=1212&ssl=1"
                  name="Преступление и наказание"
                  author = "Фёдор Достоевский"
                  comeback  = "10 дней"
                  description = "Рома"
                  raiting = "9.3"
    />
</Card.Group>
)
};

