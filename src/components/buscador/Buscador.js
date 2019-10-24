import React from 'react';
import './Buscador.css';
// Material UI
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const Buscador = ({datosConsulta}) => {

    const handleChange = (e) => {
        
        if (e.key === 'Enter') {
            consultarDetalle(e.target.value);
        }
    }

    const handleBusqueda = (e) => {
        if(e.target.value.length === 0){
            limpiarFiltro();
        } 
    }

    const consultarDetalle = (e) => {
        datosConsulta({ termino: e });
    }

    const limpiarFiltro = () => {
        consultarDetalle(' ');
    }

    return ( 
        <div className="main-container">
            <div className="container-icon">
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Buscar producto..."
                style={{ width: '100%', color: 'white' }}
                name="productoBusqueda"
                onKeyPress={handleChange}
                onChange={handleBusqueda}
            />
        </div>
     );
}
 
export default Buscador;