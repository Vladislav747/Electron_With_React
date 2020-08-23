import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import {Login, About, Toolbar, View, Editing} from './components';
import {Home} from './pages';
import {Default} from './layouts';

import logo from './logo.svg';
import './App.css';

const isAuth = () => {
    var authLocal = localStorage.getItem('isAuth');
    if(authLocal !== 'undefined'){
        return authLocal;
    }else{
        return false;
    }
    
};



class App extends React.Component {
   
    render() {
        return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="container-fluid">
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
                            component={() => (isAuth() ? [<Toolbar/>,<View />] : <Redirect to="/signin" />)}
                        />
                        <Route
                            exact
                            path={"/edit/:id"}
                            component={() => (isAuth() ? [<Toolbar/>,<Editing />] : <Redirect to="/signin" />)}
                        />
                        <Route
                            exact
                            path={"/about"}
                            component={() => (isAuth() ? [<Toolbar/>,<About />] : <Redirect to="/signin" />)}
                        />
                    </Switch>
                </Router>
            </div>
        </div>
        );
    }
}

export default App;
