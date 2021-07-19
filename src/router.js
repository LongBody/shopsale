import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from 'pages/homeLayout'
import NotFound from 'components/another/notFound'
import CartLayout from 'pages/cartLayout'
import ProductLayout from 'pages/productDetailLayout'
import ProductFlashSaleLayout from 'pages/productFlashSaleDetailLayout '
import AllProductChangePageLayout from 'modules/product/allProductChangePage'
import SignInLayout from 'modules/authentication/signIn'
import SignUpLayout from 'modules/authentication/signUp'
import UserInfoLayout from 'pages/userinfoLayout'
import SearchProduct from 'modules/product/searchProduct'
import CategoryLayout from 'pages/categoryLayout'
import CheckoutLayout from 'pages/checkoutLayout'
import AllProductInfiniteScrollLayout from 'pages/allProductInfiniteScrollLayout'
import PaymentSuccessLayout from 'pages/paymentSuccessLayout'


class Routes extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/cart" exact component={CartLayout}></Route>
        <Route path="/product/:id" exact component={ProductLayout}></Route>
        <Route path="/shopsale/categories/:category" component={CategoryLayout}></Route>
        <Route path="/productFlashSale/:id" exact component={ProductFlashSaleLayout}></Route>
        <Route path="/sign-in" exact component={SignInLayout}></Route>
        <Route path="/sign-up" exact component={SignUpLayout}></Route>
        <Route path="/user-info" exact component={UserInfoLayout}></Route>
        <Route path="/:keyword" exact component={SearchProduct} ></Route>
        <Route path="/payment/checkout" exact component={CheckoutLayout} ></Route>
        <Route path="/shopsaleproduct/allproduct/:page" exact component={AllProductChangePageLayout} ></Route>
        <Route path="/shopsaleproduct/products" exact component={AllProductInfiniteScrollLayout} ></Route>
        <Route path="/payment/success" exact component={PaymentSuccessLayout} ></Route>
        <Route component={NotFound}></Route>
      </Switch>
    )
  }
}


export default Routes