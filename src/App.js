import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

const App = () => {
    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/task1" exact>
                        <Task1 />
                    </Route>
                    <Route path="/task2" exact>
                        <Task2 />
                    </Route>
                    <Route path="*">
                        <PageNotFound />
                    </Route>
                </Switch>
            </Router>
        </Fragment>
    )
}

export default App
