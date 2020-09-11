import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import '../scss/app.scss'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import convertPrice from '../utils/convertPriceVND'
import ProductLayout from '../components/productDetailLayout'
import { useHistory } from "react-router-dom";
import { callApi } from '../utils/callApi'
import { Link } from 'react-router-dom'
const useStyles = makeStyles({
    root: {
        maxWidth: 390,
        marginTop: 5,
    },
    media: {
        width: "100%"
    },
});


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

function salePrice(price, sale) {
    let priceSale = price - price * (sale / 100)
    return convertPrice(priceSale)
}

function FlashSale(props) {
    const classes = useStyles();


    let result = props.products.map(item => {
        return (

            <Grid item xs = { 12 }
            xs = { 6 }
            sm = { 3 }
            md = { 4 }
            lg = { 2 }>
            <Link to = {
                { pathname: "productFlashSale/" + item._id, query: { the: props.id } } }
            style = {
                { textDecoration: "none" } } >
            <Card className = { classes.root } >
            <CardActionArea >
            <CardMedia className = { classes.media }
            title = { item.title }
            style = { StyleMedia }
            image = { item.imageUrl } >
            { /* <img src={item.imageUrl} style={Style} /> */ } </CardMedia>                         <CardContent style = { StyleContent } >
            <Typography variant = "body2"
            color = "textSecondary"
            component = "p"
            style = { StyleTitle } > { item.title } </Typography> <Typography variant = "body2"
            color = "secondary"
            component = "p" > ₫{ salePrice(item.price, item.sale) }

            </Typography> </CardContent> <
            CardActions >
            <span style = {
                { color: "grey", textDecoration: "line-through" } } > ₫{ convertPrice(item.price) } </span><span style = {
                { fontSize: 16, fontWeight: 500 } } > { item.sale } % </span> </CardActions> </CardActionArea>

            </Card> </Link> </Grid>

        )
    })


    return ( <div>
        <div style = {
            { backgroundColor: "rgb(0, 172, 193)", width: 140, height: 2 } } > . </div> <Grid container spacing = { 1 }
        xs = { 12 }
        sm = { 12 }
        md = { 12 }
        lg = { 12 } > { result } </Grid>

        </div>

    );
}

export default FlashSale;