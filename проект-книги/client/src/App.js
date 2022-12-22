import {createBrowserRouter, Navigate, Outlet, RouterProvider} from "react-router-dom";
import LoginPage from "./pages/LoginPages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import BookPages from "./pages/BookPage/BookPages";
import NotFoundPage from "./pages/NotFoundPage";
import {useContext} from "react";
import {AuthContext} from "./components/context/authContext";
import SelfPage from "./pages/SelfPage/SelfuserPage";
import MyBook from "./pages/BookPage/MyBook/MyBook";
import GivebackBookPage from "./pages/BookPage/GiveBack/GivebackBookPage";
import RequestsBook from "./pages/BookPage/RequestsBook/RequestsBook";
import CreateBook from "./components/CreateBook/CreateBook"
import Requests2BookPage from "./pages/BookPage/RequestsBook/Requests2BookPage";
import Requests2CardBook from "./pages/BookPage/RequestsBook/Requests2CardBook";
import RequestsCardBook from "./pages/BookPage/RequestsBook/RequestsCardBook";
import RequestsBookPage from "./pages/BookPage/RequestsBook/RequestsBookPage";
import CreateBookPage from "./pages/CreateBookForm/CreateBookPage";
import CreateNewBookForm from "./pages/CreateBookForm/CreateNewBookForm";
import CreateBookNew from "./pages/CreateBookForm/CreateBookNew";
import CardCreateForm from "./components/CardBook/CardCreateForm";
import {CreateNewFolder} from "@mui/icons-material";
import UserPage from "./pages/UserPage";
import BookPage from "./pages/BookPage";
import OAuth2RedirectHandler from "./pages/LoginPages/OAuth2RedirectHandler";

function CreateBookForm() {
    return null;
}

function App() {
    const currentUser = useContext(AuthContext);

    const Layout = () => {
        return(
            <div className="wholeScreen">
                <Navbar/>
                <Outlet/>
            </div>
        )
    };

    const ProtectedRoute = ({children}) => {
        if(!currentUser.currentUser){
            return <Navigate to='/login'/>
        }
        return children
    }

    const PublicRoute = ({children}) => {
        if(currentUser.currentUser){
            return <Navigate to='/'/>
        }
        return children
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <ProtectedRoute>
                    <Layout/>
                </ProtectedRoute>,
            children:[
                {
                    path: "/",
                    element: <HomePage/>
                },
                {
                    path: "/books",
                    element: <BookPages/>,
                    children:[
                        {
                        path:"/books/requests",
                        element:<RequestsBook/>,
                            children:[
                                {
                                    path:'/books/requests/requestsbook2spage',
                                    element: <Requests2BookPage/>,
                                    children: [
                                        {
                                        path: '/books/requests/requestsbook2spage/cards',
                                        element:<Requests2CardBook/>
                                    }
                                    ]
                                },

                                {
                                    path:'/books/requests/requestsbookspage',
                                    element: <RequestsBookPage/>,
                                    children: [
                                        {
                                            path: '/books/requests/requestsbookspage/cards',
                                            element:<RequestsCardBook/>
                                        }
                                    ]
                                },
                            ]
                        },

                        {
                            path:"/books/mybook",
                            element:<MyBook/>
                        },
                        {
                            path: "/books/giveback",
                            element:<GivebackBookPage/>
                        },
                    ]
                },
                {
                    path:'/book/:idbookinstance',
                    element: <BookPage/>
                },
                {
                    path: '/user/:iduser',
                    element: <UserPage/>
                },
                {
                    path: '/account',
                    element: <SelfPage/>
                },
                {
                    path: "/createbook",
                    element: <CreateBookPage/>
                },

            ]
        },
        {
            path:'/login',
            element: <PublicRoute>
                <LoginPage/>
            </PublicRoute>

        },
        {
            path:"/oauth2/redirect",
            element: <PublicRoute>
                <OAuth2RedirectHandler/>
                </PublicRoute>
        },
        {
            path:'/register',
            element: <PublicRoute>
                <RegistrationPage/>
            </PublicRoute>
        },
        {
            path:'*',
            element:<NotFoundPage/>
        }
    ])
  return (
      <div className="h-screen">
          <RouterProvider router={router}/>
      </div>
  );
}

export default App;
