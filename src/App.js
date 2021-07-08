import './App.css';
import Form from "./Form"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/form" exact component={Form} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
