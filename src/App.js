import Main from './components/main'
import { Route, Switch, Redirect } from "react-router-dom";
import Login from './components/login'
import './App.css';

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <h2>Book Library</h2>
            </a>
            </nav>
            <main className="container-fluid">
          <Switch>
          <Route path="/login" component={Login}></Route>
            <Route path="/book" component={Main}></Route>
             <Redirect from="/" exact to="/book"></Redirect>
          </Switch>
        </main>
    </div>
  );
}

export default App;
