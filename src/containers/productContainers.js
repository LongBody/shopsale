import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchProduct, fetchLoadMoreProduct } from '../actions/productAction'
import Products from '../components/products'
import Skeleton from '../components/skeleton'
import { bindActionCreators } from 'redux';
import { Container } from '@material-ui/core';
import PropTypes from "prop-types";

class ProductContainer extends Component {

    static contextTypes = {
        router: PropTypes.object
      }
    constructor(props) {
        super(props);
        this.state={
            page:3
        }
    }

    componentDidMount() {

        this.props.fetchProduct()

    }

    loadMoreProductOnClick(){
        console.log(this.state.page)
        this.setState({
            page:this.state.page+=1
        })
        if(this.state.page > 5){
            window.location.replace("https://longbody.github.io/shopsale/#/shopsale/shopsaleproduct/allproduct")
        }
        else 
        this.props.fetchLoadMoreProduct(this.state.page)
    }

    render() {

        let { products } = this.props
        if (products.length == 0)
            return <Skeleton></Skeleton>

        return (
            <div>
                
                <Products products={products}> </Products>
               <Container style={{justifyContent:"center",marginTop:30,display:"flex"}}>
                    <button onClick={() =>{this.loadMoreProductOnClick()}}
                    style={{width:400,height:30}}
                    >Xem Thêm</button></Container>
            </div>


        );

    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProduct: bindActionCreators(fetchProduct, dispatch),
        fetchLoadMoreProduct:(pageIndex) => dispatch(fetchLoadMoreProduct(pageIndex))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);