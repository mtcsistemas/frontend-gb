import React from 'react';
import './Footer.css';

const Footer = () => {
    return ( 
        <footer>
            <div className="gb-footer-legal">
                <div className="inner-wrapper-footer">
                    <div className="gb-footer-disclaimer">
                        <strong>Copyright © 2019 Garbarino S.A.I.C.e.I.</strong>
                        <p className="gb-footer-disclaimer-text">El uso de este sitio web implica la aceptación de los Términos y Condiciones y de las Políticas de Privacidad de Garbarino S.A.I.C.e.I. Las fotos son a modo ilustrativo. La venta de cualquiera de los productos publicados está sujeta a la verificación de stock. Los precios online para los productos presentados/publicados en www.garbarino.com.ar y/o www.garbarino.com son válidos exclusivamente para la compra vía internet en las páginas antes mencionadas.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;