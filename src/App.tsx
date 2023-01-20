import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export const App = () => {
    return (
        <BrowserRouter>

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            {/*<Route path="/dialogs" render={ () => <Dialogs/>}/>*/}
            {/*<Route path="/profile" render={ () => <Profile/>}/>*/}

            <Routes>
                <Route path="*" element={<Profile />} />
                <Route path="*" element={<Dialogs />} />
            </Routes>
        </div>

        </BrowserRouter>
    );
}

// export const App = () => {
//     return (
//         <BrowserRouter>
//             <div className="app-wrapper">
//                 {/*<Header/>*/}
//                 {/*<Navbar/>*/}
//                 {/*<Route path="/dialogs" render={ () => <Dialogs/>}/>*/}
//                 {/*<Route path="/profile" render={ () => <Profile/>}/>*/}
//                 {/*<Route path={'/dialogs'} element={<Dialogs />} />*/}
//                 {/*<Route path={'/profile'} element={<Profile />} />*/}
//
//                 <Route path={'/dialogs/*'} element={<Dialogs  />} />
//             </div>
//         </BrowserRouter>
//     );
// }


// component={Dialogs} component={Profile}