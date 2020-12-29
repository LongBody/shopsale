import React, { useState, useEffect , useRef} from 'react';
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
import ProductCard from '../product/productCard'

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
    const ref = useRef(null)
    // const history = useHistory();
    let user = JSON.parse(localStorage.getItem("user"));
    const [product, setProductSearch] = useState([])
    const [loading, setLoading] = useState(true)
    let result 
    const fetchData = async () => {
        // setLoading(true)
        const callApiData = await callApi("product/find/?search=" + props.match.params.category).then(async (response) => {
        
            let data = await response.data
            // let dataConvert={
            //     id:data._id,
            //     title:data.title,
            //     price:data.price,
            //     imageUrl:data.imageUrl,
            //     bio:data.bio,
            //     star:data.star
            // }
            console.log(data)
            return data
        })

        setProductSearch(callApiData) 
        
       
    }

 

    useEffect(() => {    
       fetchData()
    }, [props.location.params]);


    result = product.map((item, index) => {
        return (
            <Grid item xs={12} xs={10} sm={10} md={6} lg={2}>
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
            <Container style={{ paddingTop: 120 }}>
                <Grid container spacing={2} xs={3} sm={8} md={12} lg={12}>
                    {result ? result : <div style={{textAlign:"center",color:"#e79413"}}><h2>Loading</h2></div>}
                </Grid>
            </Container>

        </div>

    );
}


export default connect(null, null)(SearchProduct);
