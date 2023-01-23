import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AllActionType, StateType} from "./redux/store";


type AppType = {
    state: StateType
    dispatch: (action: AllActionType) => void
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
                    <Profile posts={props.state.profilePage.posts}
                             newPostText={props.state.profilePage.newPostText}
                             dispatch={props.dispatch}/>}/>
                <Route path="/dialogs" element={
                    <Dialogs dialogs={props.state.dialogsPage.dialogs}
                             messages={props.state.dialogsPage.messages}
                             newMessageBody={props.state.dialogsPage.newMessageBody}
                             dispatch={props.dispatch}/>}/>
            </Routes>
        </div>
    );
}

