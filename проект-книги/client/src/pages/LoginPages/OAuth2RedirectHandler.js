import React, {Component} from "react";
import {useSearchParams, Navigate} from "react-router-dom";
import {OAuth2} from "../../components/context/OAuth2";


function withSearchParams(Component) {

    return (urlParams) => (
        <Component {...urlParams} urlParams={useSearchParams()} />
    );
}

class OAuth2RedirectHandler extends Component {
    render() {
        const [URLSearchParams] = this.props.urlParams;
        const code = URLSearchParams.get("code");
        console.log(code);
        // const navigate = useNavigate();
        try {
            const res = OAuth2(code).then(result => {
                console.log("OOOOo");
                window.location.href="/";
                return (<Navigate to="/" />);
            }, error => {
                console.log(error);
            })
            console.log(res.user)
            // res.map((user)=>
            //     localStorage.setItem('user', JSON.stringify(user)
            // )
            if (res) {
                // localStorage.setItem('user', JSON.stringify(res[0]))
                console.log('11111111111')

                // return (<Navigate to="/"/>)
            }
            return <></>;
        } catch (e) {
            console.log("login navigate")
        }
        //
        // if (code) {
        //     localStorage.setItem("ACCESS_CODE", code);
        //
        //     return <Navigate to="/profile" replace={true} />;
        // } else {
        //     return <Navigate to="/login" replace={true} />;
        // }
        return <></>
    }
}

export default withSearchParams(OAuth2RedirectHandler);

