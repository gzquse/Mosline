import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Nav from "./component/Nav";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Post from "./component/Post"

class App extends Component{
  render() {
    return (
        <BrowserRouter>
            <Nav/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/:post_id' component={Post}/>
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
