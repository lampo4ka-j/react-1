import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


 const App = (props) => {

  return (
      <BrowserRouter>
    <div className='app-wrapper'>
        <Header />
        <NavBar state={props.state.friendsPage} />
        <div className='app-wrapper-content'>
            <Route path='/profile' render={() => <Profile dispatch={props.dispatch} state={props.state.profilePage} />} />
            <Route path='/dialogs' render={() => <Dialogs dispatch={props.dispatch} state={props.state.messagesPage} />} />
        </div>
    </div>
          </BrowserRouter>
  );
}

export default App;
