import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import HomeApp from "../pages/HomePage";
import LoginApp from "../pages/LoginPage";
import NavBar from "../components/navBar";
import RegisterApp from "../pages/registration";

function Router() {

    const Error = () =>{
        return(
            <div >
                <NavBar/>
                <h1>This Page Is Not Found!</h1>
            </div>
    )};

    return(
        <BrowserRouter >
            <Switch >
                <Route exact path='/' component={HomeApp}/>
                <Route path='/login' component={LoginApp}/>
                <Route path='/register' component={RegisterApp}/>
                <Route component={Error}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
