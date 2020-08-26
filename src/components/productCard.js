import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import convertPrice from '../utils/convertPriceVND'
import * as actions from '../actions/cartAction'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
    root: {
        maxWidth: 390,
        marginTop: 5,
    },
    media: {
        // height: 0,
        // paddingTop: '56.25%', // 16:9
        width:"100%"
      },
});

const Style = {
    width: "100%",
    minHeight:100
};
const StyleTitle = {
    height: 50
};

const StyleMedia = {
    height: 180,
};

const StyleContent = {
    marginTop: "10px"
};

const StyleStar = {
    color: "#fc9d0a",
    fontSize: 11,
    float: "right",
    marginTop: 3
};

const StyleStarNone = {
    color: "#fc9d0a",
    fontSize: 11,
    float: "right",
    marginTop: 3
};



function ProductCard(props) {
    let user = JSON.parse(localStorage.getItem("user"));
    const classes = useStyles();
    const history = useHistory();

    return (
        <div>
          <Link to={{ pathname:"product/"+ props.id, query: { the: props.id }  }} style={{textDecoration:"none"}}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        title={props.title}
                        style={StyleMedia}
                        image={props.imageUrl} 
                    >
                        {/* <img src={props.imageUrl} style={Style} /> */}
                        </CardMedia>
                    <CardContent style={StyleContent}>
                        <Typography variant="body2" color="textSecondary" component="p" style={StyleTitle}>
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="secondary" component="p">
                            ₫{convertPrice(props.price)}
                            <span >{showRating(props.star)}</span>
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Link to='/' onClick={handleClickNotLink} style={{textDecoration:"none"}}>
                    <Button size="small" color="primary" variant="outlined" onClick={() => {
                            addToCart(props, 1, true)

                        }}>
                            Add Cart
                       </Button>
                    </Link>
                       
                        <span style={{ color: "grey" }}>Đã bán  {props.quantity}</span>
                    </CardActions>
                </CardActionArea>

            </Card>
            </Link>
        </div>



    );

    function handleClickNotLink(e) {
        e.preventDefault();
      }

    function addToCart(prop, quantity, checked) {
        if (user){
            props.addToCart(prop, quantity, checked)
        }         
        else{
            history.push("/sign-in");
        }
        
    }
}

function showRating(rating) {
    let result =[];
    for (let index2 = 0; index2 < (5-rating); index2++) {
        result.push(<i className="far fa-star" key={index2+100} style={StyleStarNone}></i>)          
    }
    for (let index = 0; index < rating; index++) {
        result.push(<i className="fas fa-star" style={StyleStar} key={index}></i>)          
    }  
    return result
    
}





const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addToCart: (product, quantity, checked) => {
            dispatch(actions.addToCart(product, quantity, checked))
        }
    }
}


export default connect(null, mapDispatchToProps)(ProductCard);

