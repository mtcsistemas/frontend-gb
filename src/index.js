import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
// Paginas
import Productos from './pages/productos/Productos';
import Detalle from './pages/detalle/Detalle';

const Root = (
    <BrowserRouter>
        <Switch>
            <Route path="/productos" component={ Productos } />
            <Route path="/detalle/:itemId" component={ Detalle } />
            <Redirect from="/" to="/productos" />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(Root, document.getElementById('root'));

