import React from 'react';
import {HashRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import {Login, About, Toolbar, View, Editing, Header} from './components';

import logo from './logo.svg';
import './App.css';

const isAuth = () => {
    var authLocal = localStorage.getItem('isAuth');
    if(authLocal !== 'undefined'){
        return true;
    }else{
        return false;
    }
    
};



class App extends React.Component {
   
    render() {
        return (
        <div className="App">
            <Header />
            <div className="container-fluid">
            <Toolbar/>
                <Router>
                    <Switch>
                        <Route
                            exact
                            path={"/signin"} 
                            component={Login}
                        />
                        <Route
                            exact
                            path={["/","/view"]}
                            component={() => (isAuth() ? <View /> : <Redirect to="/signin" />)}
                        />
                        <Route
                            exact
                            path={"/edit/:id"}
                            component={Editing}
                        />
                        <Route
                            exact
                            path={"/about"}
                            component={() => (isAuth() ? <About /> : <Redirect to="/signin" />)}
                        />
                    </Switch>
                </Router>
            </div>
        </div>
        );
    }
}

export default App;
