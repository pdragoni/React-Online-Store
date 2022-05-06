import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/Home';
import Cart from './pages/Cart';
import Details from './pages/Details';

function App() {
  const [incluirCarrinho, setIncluirCarrinho] = useState([]);
  // const [carrinhoUnico, setCarrinhoUnico] = useState([]);
  const [idProducts, setIdProducts] = useState({});

  const idFilter = (paramId) => {
    const result = incluirCarrinho.filter((item) => item.id === paramId);
    // const filtrarRepetidos = filtroAqui
    // setCarrinhoUnico(filtrarRepetidos);
    console.log(result);
    setIdProducts({ ...idProducts, [paramId]: result.length + 1 });
  };

  const addCarrinho = (param) => {
    setIncluirCarrinho([...incluirCarrinho, param]);
    idFilter(param.id);
  };

  useEffect(() => {
    console.log(idProducts);
  }, [idProducts]);

  useEffect(() => {
    // console.log(incluirCarrinho);
  }, [incluirCarrinho]);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (<Home
              addCarrinho={ addCarrinho }
              idFilter={ idFilter }
            />) }
          />
          <Route
            exact
            path="/cart"
            render={ () => (<Cart
              incluirCarrinho={ incluirCarrinho }
              idFilter={ idFilter }
              idProducts={ idProducts }
            />) }
          />
          <Route
            exact
            path="/details/:id"
            render={ () => (
              <Details
                addCarrinho={ addCarrinho }
                idFilter={ idFilter }
              />) }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
