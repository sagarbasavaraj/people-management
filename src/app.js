import { AppBar } from "./common/components";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./home/home";
import AddEditPerson from "./add-edit-person/add-edit-person";
import StorageService from "./service/storage-service";
import "./app.scss";

//initilaize storage
//uses indexdb to store data
StorageService.init();

//Main App component
function App() {
  return (
    <div className="app">
      <AppBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/add-edit-person/:id?">
            <AddEditPerson />
          </Route>
          {/** if none of the route match redirect to home */}
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
