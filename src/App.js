// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Form from './components/Form';
import Login from './components/Login';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Route component={Navbar} />
      <Switch>
        <Route path="/dashboard" component={Homepage} />
        <Route exact path="/" component={Form} />
        <Route path="/login" component={Login} />
        <Route path="/account" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
