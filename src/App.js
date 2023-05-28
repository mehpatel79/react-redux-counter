import './App.css';
import TodoApp from "./components/TodoApp";
import Counter from "./components/Counter";
import NestedRouting from "./components/NestedRouting";
import Users from "./components/Users";
import TodoAPI from './components/TodoAPI';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
    return (
            <Router>
                <Route path="/">{" "}
                    <Link to="/Counter">Counter</Link>{" "}
                    <Link to="/TodoApp">Todo App</Link>{" "}
                    <Link to="/NestedRoute">Nested Routing</Link>{" "}
                    <Link to="/Users">Users Data</Link>{" "}
                    <Link to="/TodoAPI">Todo With API</Link>{" "}
                    
                </Route>
                <Switch>
                    <Route path="/Counter">         <Counter />         </Route>
                    <Router path="/TodoApp">        <TodoApp />         </Router>
                    <Router path="/NestedRoute">    <NestedRouting />   </Router>
                    <Router path="/Users">          <Users />           </Router>
                    <Router path="/TodoAPI">        <TodoAPI />         </Router>
                    
                </Switch>

            </Router>

        );
   
}

export default App;
