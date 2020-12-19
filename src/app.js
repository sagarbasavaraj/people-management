import { AppBar } from "./common/components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home/home";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <AppBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
