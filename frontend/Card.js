import React from "react";

function Card(){
    return(
        <div className="card m-20">
            <img className="img_book" width={133} height={120} src="./photo1.jpg" alt="book"/>
             <div className="flex-column">
                 <div className="book">
                     <p className="name_book"><b>Мастер и Маргарита</b></p>
                     <p className="author">Булгаков</p>

                 </div>
                 <div className="user_book d-flex flex-column">
                     <span>10 дней</span>
                     <div className="user d-flex align-center mt-5">
                         <img className="circle" width={20} height={20} src="./photo.jpg"/>
                         <p className="ml-5">Бегемот</p>
                     </div>
                 </div>

             </div>
            <button className="button" >Запросить</button>
        </div>
    )
}

export default Card
