import React, { Fragment, useState, useEffect } from 'react';
import './Detalle.css';
import { withRouter, useHistory, useParams } from 'react-router-dom';
// Material UI
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
// Componentes
import Navbar from '../../components/navbar/Navbar';
import Error from '../../components/error/Error';

const Detalle = () => {

    let history = useHistory();
    let params = useParams();
    const productoId = params.itemId;
  
    const [resultado, guardarResultado] = useState({});
    const [imagen, guardarImagen] = useState('');
    const [error, guardarError] = useState(false);

    useEffect( () => {
    
        const consultarApi = async (productoId) => {
            const url = `http://localhost:3010/products/${productoId}`;
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            //console.log(resultado.data);
            if(resultado.ok){
                guardarResultado(resultado.data);
                guardarImagen(resultado.data.main_image.url);
            } else {
                guardarError(true);
            }
        }

        consultarApi(productoId);
        
    }, [ productoId ]);


    return ( 
        <Fragment>
            <CssBaseline />

            <Navbar muestraBuscar={false}/>

            <div className="details-page">
                <Paper elevation={1} className="paper-container">
                    {
                        error ? 
                            <Error mensaje='El producto esta deshabilitado, por favor seleccione otro producto.' />
                        :
                        resultado.description ?
                            <Fragment>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {resultado.description}
                                </Typography>

                                <div
                                    className="item-image"
                                    style={{
                                        backgroundImage: `url(${imagen})`,
                                    }}
                                />
                                
                                <Typography gutterBottom component="p" className="content">
                                    {resultado.summary}
                                </Typography>
                            </Fragment>
                        :
                        <CircularProgress size={100} className="item-loader" /> 
                        
                    }

                    <Button className="volver" color="primary" onClick={() => history.push(`/productos/`)}>
                        Volver
                    </Button>
                </Paper>
            </div>
        </Fragment>
     );
}
 
export default withRouter(Detalle);