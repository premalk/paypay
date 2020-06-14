import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Employee from './Employee.jsx';
import AddEmployee from './AddEmployee.jsx';

const Routing = () => {
  return (
    <Router>
      <div>
      <div class="uk-flex uk-flex-center">
    <div class="uk-card uk-card-default uk-card-body">
    <a class="uk-link-toggle" href="#">
        <span class="uk-link-heading"><Link to="/">Home</Link></span>
      </a>
    </div>
    <div class="uk-card uk-card-default uk-card-body uk-margin-left">
    <a class="uk-link-toggle" href="#">
        <span class="uk-link-heading"><Link to="/addEmployee">Add Employee</Link></span>
      </a>
    </div>
</div>
      <Switch>
        <Route exact path="/">
          <Employee />
        </Route>
        <Route path="/addEmployee">
          <AddEmployee />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}
export default Routing;
