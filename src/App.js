import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/Home';
import Cart from './pages/Cart';
import Details from './pages/Details';

function App() {
  const [incluirCarrinho, setIncluirCarrinho] = useState([]);
  const addCarrinho = (param) => setIncluirCarrinho([...incluirCarrinho, param]);

  useEffect(() => {
    // console.log(incluirCarrinho);
  }, [incluirCarrinho]);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => <Home addCarrinho={ addCarrinho } /> } />
          <Route
            exact
            path="/cart"
            render={ () => (<Cart
              incluirCarrinho={ incluirCarrinho }
            />) }
          />
          <Route
            exact
            path="/details/:id"
            render={
              () => <Details addCarrinho={ addCarrinho } />
            }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
