import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './componets/auth/Login';
import NuevaCuenta from './componets/auth/NuevaCuenta';
import Proyectos from './componets/proyecto/Proyectos';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
          <Route exact path="/proyectos" component={Proyectos} />
        </Switch>
      </Router>
  );
}

export default App;
