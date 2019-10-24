import React from 'react';
import './Error.css';

const Error = ({mensaje}) => {
    return ( 
        <div className="error">
            {mensaje}
        </div>
     );
}
 
export default Error;