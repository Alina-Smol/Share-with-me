import BookPages from "./pages/BookPage/BookPages";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPages/LoginPage";
import HomePage from "./pages/HomePage";
import {AUTH_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, MAIN_ROUTE} from "./utils/consts";
import React from "react";


// export const authRoutes =  [
//     {
//         path: MAIN_ROUTE, element: <HomePage/>,
//     },
//     {
//         path: BASKET_ROUTE, element: <BasketPage/>,
//     }
// ]


export const publicRoutes = [
        {
            path: LOGIN_ROUTE,
            element: <LoginPage/>,
        },
            {
            path: AUTH_ROUTE,
            element: <RegistrationPage/>
        },
];

