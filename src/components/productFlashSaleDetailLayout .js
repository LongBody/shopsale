import React, { useState, useEffect } from 'react';
import Header from '../components/header'
import '../scss/app.scss'
import { callApi } from '../utils/callApi'
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import convertPrice from '../utils/convertPriceVND'
import Footer from '../components/footer';
import Button from '@material-ui/core/Button';
import * as actions from '../actions/cartAction'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
import swal from 'sweetalert'
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

const stylePriceSale = {
    textDecoration: "line-through",
    color: "#929292"

};

const styleSale = {
    marginLeft: 30,
    color: "red",
    fontSize: 17,
    border: "1px solid red",
    padding: 3

};





const StyleStarNone = {
    color: "#fc9d0a",
    fontSize: 13,
    marginTop: 3
};



function ProductDetail(props) {
    const history = useHistory();
    let user = JSON.parse(localStorage.getItem("userShopsale"));
    const [pro, setPro] = useState({
        title: "Loading...",
        price: "",
        star: ""
    })

    const [bioAsync, setBioAsync] = useState(false)

    const fetchData = async () => {
        const callApiData = await callApi("productFlashSale/" + props.match.params.id).then(async (response) => {
            let data = await response.data
            let dataConvert = {
                id: data._id,
                title: data.title,
                price: data.price,
                imageUrl: data.imageUrl,
                bio: data.bio,
                star: data.star,
                sale: data.sale
            }
            return dataConvert
        })

        setPro(callApiData)
        console.log(pro)
        setBioAsync(true)
    }

    useEffect(() => {
        fetchData()
    }, []);


    function newRow(text) {
        let result = text.split('\n')
        console.log(text)
        return result.map((item, key) => {
            return <div key={key}> - {item}</div>
        })
    }
    function salePrice(price, sale) {
        let priceSale = price - price * (sale / 100)
        return convertPrice(priceSale)
    }

    return (
        <div>
            <Header />

            <Container style={{ paddingTop: 110 }}>
                <div style={{ padding: 20, backgroundColor: "#fff" }}>
                    {
                        pro ?
                            <Grid container spacing={2} xs={3} sm={8} md={12} lg={12}>
                                <Grid item xs={12} xs={10} sm={10} md={6} lg={4}>
                                    <img src={pro.imageUrl} style={styleImage} />
                                    <div style={{ marginTop: 50 }}>
                                        <h4>CHI TIẾT SẢN PHẨM</h4>
                                        {
                                            bioAsync ?
                                                newRow(pro.bio)
                                                : "Loading"

                                        }
                                    </div>
                                </Grid>
                                <Grid item xs={12} xs={10} sm={10} md={6} lg={6}>
                                    <h2>{pro.title}</h2>
                                    <h3>{showRating(pro.star)}</h3>
                                    <h1 style={stylePrice}>₫{pro.price ? salePrice(pro.price, pro.sale) : ""}
                                        <span style={styleSale}>Giảm {pro.sale}%</span>
                                    </h1>
                                    <h3 style={stylePriceSale}>₫{convertPrice(pro.price)}

                                    </h3>

                                    <h4>Vận Chuyển :
                                        <span style={{ marginLeft: 10 }}>
                                            <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9d21899f3344277e34d40bfc08f60bc7.png"
                                                style={{ height: 20 }}
                                            />
                                        Miễn Phí Vận Chuyển
                                        </span>
                                    </h4>
                                    <div>
                                        <Button variant="outlined" color="primary"
                                            onClick={() => {
                                                addToCart(pro, 1, true)
                                            }}
                                        >
                                            Thêm Vào Giỏ Hàng
                                         </Button>
                                        <Button variant="contained" color="primary" style={{ marginLeft: 10 }}
                                            onClick={() => {
                                                buyNow()
                                            }}
                                        >
                                            Mua Ngay
                                        </Button>
                                    </div>
                                </Grid>
                            </Grid>
                            : "Loading"
                    }
                </div>
            </Container>
        </div>

    );

    function addToCart(prop, quantity, checked) {


        let pro = {
            id:prop.id,
            title :prop.title,
            price:prop.price - prop.price * (prop.sale / 100),
            imageUrl :prop.imageUrl,
        }

        if (user) {
            props.addToCart(pro, quantity, checked)
        }
        else {
            history.push("/sign-in");
        }

    }

    function buyNow() {
        if (user) {
            swal("Thành Công", "Đã Mua Hàng", "success");
        }
        else {
            history.push("/sign-in");
        }

    }


}

function showRating(rating) {
    let result = [];

    for (let index = 0; index < rating; index++) {
        result.push(<i className="fas fa-star" style={StyleStar} key={index}></i>)
    }

    for (let index2 = 0; index2 < (5 - rating); index2++) {
        result.push(<i className="far fa-star" key={index2 + 100} style={StyleStarNone}></i>)
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


export default connect(null, mapDispatchToProps)(ProductDetail);






