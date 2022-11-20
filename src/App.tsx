import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter,Route} from "react-router-dom";

export const App = () => {
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Route path="/dialogs" render={ () => <Dialogs/>}/>
            <Route path="/profile" render={ () => <Profile/>}/>
        </div>
        </BrowserRouter>
    );
}


// component={Dialogs} component={Profile}