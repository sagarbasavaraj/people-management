import { AppBar } from "./common/components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home/home";
import AddEditPeople from "./add-edit-people/add-edit-people";
import StorageService from "./service/storage-service";
import "./app.scss";

//initilaize storage
StorageService.init();

function App() {
  return (
    <div className="app">
      <AppBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/add-edit-people/:id?">
            <AddEditPeople />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
