import React, { Fragment, useState, useEffect } from 'react';
import './Productos.css';
import { withRouter } from 'react-router-dom';
// Material UI
import CssBaseline from '@material-ui/core/CssBaseline';
// Componentes
import Navbar from '../../components/navbar/Navbar';
import Producto from '../../components/producto/Producto';
import EmblaCarousel from '../../components/carousel/EmblaCarousel';
import Footer from '../../components/footer/Footer';

const Productos = () => {

    // State Principal
    const [productoBusqueda, guardarBusqueda] = useState('');
    const [error, guardarError] = useState(false);
    const [resultado, guardarResultado] = useState([]);


    useEffect( () => {
  
        const consultarApi = async () => {
            const url = `http://localhost:3010/products`;
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            //console.log(resultado.data.items);
            let filtrados = resultado.data.items.filter(items => items.enabled === true );
            //console.log('Filtrados', filtrados);
            guardarResultado(filtrados);
        }

        consultarApi();
      },[] );   
  
    // Busqueda
    useEffect( () => {
      // Prevenir ejecucion inicial
      if(productoBusqueda === '') return;

      const consultarApi = async () => {
          const url = `http://localhost:3010/products`;
          const respuesta = await fetch(url, 
            { 
              method: 'post', 
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }, 
              body: new URLSearchParams({'termino': productoBusqueda})
            }
          );
          const resultado = await respuesta.json();
          //console.log(resultado.data);
          let filtrados = [];
          if(resultado.ok){
            filtrados = resultado.data.filter(items => items.enabled === true );
          } 
          //console.log('Filtrados', filtrados);
          guardarResultado(filtrados);
      }

      consultarApi();
    }, [ productoBusqueda ]);


    const datosConsulta = (datos) => {
      if(datos.termino === '' ){
        // Error
        guardarError(true);
        return;
      }
      guardarBusqueda(datos.termino)
      guardarError(false);
    }

    if(error){
      // Mostrar Error    
    }

    return ( 
        <Fragment>
            <CssBaseline />
            <Navbar datosConsulta={datosConsulta} muestraBuscar={true}/>
            <div className="producto-page">
            { 
              resultado.length > 0 ? 
                <EmblaCarousel autoplay delayLength={3000} options={{ loop: true, dragFree: true }}>
                {
                    resultado.map( item => 
                        item.enabled ?
                            <Producto key={item.id} item={item} />
                        : null
                    )
                }
                </EmblaCarousel>
              : <h3 className="mensaje-busqueda">No hay resultados para su busqueda</h3> 
            }   
            </div>
            <Footer />
        </Fragment>
        
     );
}
 
export default withRouter(Productos);


