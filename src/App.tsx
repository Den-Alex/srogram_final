import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";



type AppType = {
    // state: StateType
    // dispatch: (action: AllActionType) => void
}
export const App = (props: AppType) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            {/*<Route path="/dialogs" render={ () => <Dialogs/>}/>*/}
            {/*<Route path="/profile" render={ () => <Profile/>}/>*/}

            <Routes>
                <Route path="/profile" element={
                    <ProfileContainer/>}/>
                <Route path="/dialogs" element={
                    <DialogsContainer />}/>
                <Route path="/users" element={
                    <UsersContainer/>
                }/>
            </Routes>
        </div>
    );
}

