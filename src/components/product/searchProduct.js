import React, { useState, useEffect, useRef } from 'react';
import Header from '../body/header'
import '../../scss/app.scss'
import { callApi } from '../../utils/callApi'
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import convertPrice from '../../utils/convertPriceVND'
import Footer from '../body/footer';
import Button from '@material-ui/core/Button';
import * as actions from '../../actions/cartAction'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
import ProductCard from './productCard'
import CircularProgress from '@material-ui/core/CircularProgress';
import LoadingBar from 'react-top-loading-bar'
import LogoLoading from "../loading/logoLoading";

const StyleStar = {
    color: "#fc9d0a",
    fontSize: 13,
    marginTop: 3
};

const styleImage = {
    border: "2px solid rgba(0,0,0,.05)",
    padding: 10,
    height: 320
};

const stylePrice = {
    color: "rgb(0, 172, 193)",

};


const StyleStarNone = {
    color: "#fc9d0a",
    fontSize: 13,
    marginTop: 3
};

function SearchProduct(props) {

    // const history = useHistory();
    const [product, setProductSearch] = useState([])
    const [loading, setLoading] = useState("Loading...")
    const [noProduct, setNoProduct] = useState(false)
    const ref = useRef(null)

    console.log(props)
    let result
    const fetchData = async () => {
        setNoProduct(false)
        // setLoading(true)
        const callApiData = await callApi("product/find/?search=" + props.match.params.keyword).then(async (response) => {
            ref.current.complete()
            let data = await response.data
            // let dataConvert={
            //     id:data._id,
            //     title:data.title,
            //     price:data.price,
            //     imageUrl:data.imageUrl,
            //     bio:data.bio,
            //     star:data.star
            // }
            return data
        })


        if (callApiData.length > 0) {
            setProductSearch(callApiData)
        }
        else {
            setProductSearch([])
            setLoading("")
            setNoProduct(true)
        }
    }

    useEffect(() => {
        ref.current.continuousStart()
        fetchData()
    }, [props.location.pathname]);


    result = product.map((item, index) => {
        return (
            <Grid item xs={12} xs={12} sm={10} md={6} lg={2}>
                <ProductCard
                    key={index}
                    id={item._id}
                    imageUrl={item.imageUrl}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                    star={item.star}
                ></ProductCard>
            </Grid>
        )
    })



    return (

        <div>
            <Header />
            <LoadingBar color='#3f51b5' ref={ref} />
            <Container style={{ paddingTop: 145 }}>
                {noProduct === true ? <div style={{ color: "red", display: "flex",  marginRight: "auto", marginLeft: "auto" }}>
                    <img style={{ height: 35, marginTop: 15, color: "red", marginRight: 8 }} src="https://www.flaticon.com/svg/static/icons/svg/1178/1178479.svg" />
                    <h2>Không Có Sản Phẩm
                    </h2></div> : ""}
                <Grid container spacing={1} xs={12} sm={6} md={6} lg={12}>
                    {result.length > 0 ? result : <div style={{ color: "#e79413", margin: "0 auto", paddingTop: 100 }}>
                        {loading ? <LogoLoading /> : ""}
                    </div>}

                </Grid>
            </Container>

        </div>

    );
}


export default connect(null, null)(SearchProduct);
