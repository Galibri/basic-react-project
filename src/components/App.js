import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HeaderNavLinks from './Nav/HeaderNav'

import Home from './Pages/Home/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Test from './Pages/Test'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="AppWrapper">
                    <div className="header">
                        <HeaderNavLinks />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 my-4">
                                <Switch>
                                    <Route path="/" exact component={Home} />
                                    <Route path="/about" component={About} />
                                    <Route path="/contact" component={Contact} />
                                    <Route path="/post/:postId" component={Test} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
