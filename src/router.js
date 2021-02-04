import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './components/layout/homeLayout'
import NotFound from './components/another/notFound'
import CartLayout from './components/layout/cartLayout'
import ProductLayout from './components/layout/productDetailLayout'
import ProductFlashSaleLayout from './components/layout/productFlashSaleDetailLayout '
import AllProductChangePageLayout from './components/product/allProductChangePage'
import SignInLayout from './components/authentication/signIn'
import SignUpLayout from './components/authentication/signUp'
import UserInfoLayout from './components/layout/userinfoLayout'
import SearchProduct from './components/product/searchProduct'
import CategoryLayout from './components/layout/categoryLayout'
import CheckoutLayout from './components/layout/checkoutLayout'


class Routes extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Switch>
        <Route exact path={`/`} component={HomePage}></Route>
        <Route path={`/cart`}  exact component={CartLayout}></Route>
        <Route path="/product/:id" exact component={ProductLayout}></Route>
        <Route path="/shopsale/categories/:category" component={CategoryLayout}></Route>
        <Route path="/productFlashSale/:id" exact component={ProductFlashSaleLayout}></Route>
        <Route path="/sign-in" exact component={SignInLayout}></Route>
        <Route path="/sign-up" exact  component={SignUpLayout}></Route>
        <Route path="/user-info" exact  component={UserInfoLayout}></Route>
        <Route path="/:keyword" exact component={SearchProduct} ></Route>  
        <Route path="/payment/checkout" exact component={CheckoutLayout} ></Route>  
        <Route path="/shopsaleproduct/allproduct/:page" exact component={AllProductChangePageLayout} ></Route>
        <Route component={NotFound}></Route>
      </Switch>
    )
  }
}


export default Routes