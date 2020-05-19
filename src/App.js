import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import {Home} from "./Components/Pages/Home";
import {Cart} from "./Components/Pages/Cart";
import 'antd/dist/antd.css';

const App = () => {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/cart" component={Cart}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
