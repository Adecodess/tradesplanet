// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Form from './Form';
import Login from './Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Form} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
