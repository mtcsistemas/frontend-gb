import React, { Fragment } from 'react';
import './Producto.css';
import { withRouter, useHistory } from 'react-router-dom';
// Material UI
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const Producto = ({item}) => {

    let history = useHistory();

    return ( 
        <Fragment>
            <Card className="card" onClick={() => history.push(`/detalle/${item.id}`)}>
                <CardActionArea>
                    <CardMedia className="card-media" 
                        image={item.image_url}
                        title={item.description}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            <div className="item-description"> {item.description}</div>
                        </Typography>
                        <div className="itemBox-price">
                            <span className="value-item">${item.price}</span>
                            <span className="value-note">
                                <del>${item.list_price}</del>
                                <span className="value-item--discount">{item.discount}% OFF</span>
                            </span>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Fragment>
     );
}
 
export default withRouter( Producto );