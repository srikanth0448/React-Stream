import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/header/header";
import StreamContainer from './containers/streamContainer';
import VideosListContainer from './containers/videosListContainer';
import LoginContainer from './containers/loginContainer'

export default class App extends Component {

    render() {
      
        return (
            <React.Fragment>
              <Header />

              <Switch>
               <Route
                  path="/login"
                  component={(props) => <LoginContainer {...props} />}
                />
                <Route
                  path="/stream"
                  component={(props) => <StreamContainer {...props} />}
                />
                <Route
                  path="/home"
                  component={(props) => <VideosListContainer {...props} />}
                /> 

                <Redirect from='/' to='/login' />
              </Switch>
            </React.Fragment>
        );
    }
}