import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo-garbarino.svg';
// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// Componentes
import Buscador from '../buscador/Buscador';

const Navbar = ({datosConsulta, muestraBuscar}) => {


    return ( 
        <AppBar position="static">
            <Toolbar className="appbar">
                <img src={ logo } alt="Garbarino" />
                {
                    muestraBuscar ?
                        <Buscador datosConsulta={datosConsulta}/>
                    : null
                }
            </Toolbar>
        </AppBar>
     );
}
 
export default Navbar;