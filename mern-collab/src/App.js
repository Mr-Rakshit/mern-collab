import './App.css';
import Form from "./Form"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Display from "./Display"
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/form" exact component={Form} />
          <Route path="/display" exact component={Display} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
