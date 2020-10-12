import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './components/home'
import NotFound from './components/notFound'
import CartLayout from './components/cartLayout'
import ProductLayout from './components/productDetailLayout'
import ProductFlashSaleLayout from './components/productFlashSaleDetailLayout '
import AllProductChangePageLayout from './components/allProductChangePage'
// import AllProductLayoutID from './components/allProductDetailLayout'
import SignInLayout from './components/signIn'
import SignUpLayout from './components/signUp'
import UserInfoLayout from './components/userinfo'
import SearchProduct from './components/searchProduct'
import CategoryLayout from './components/categoryLayout'
import chatMessage from './components/chatMessage'



class Routes extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/cart"  exact component={CartLayout}></Route>
        <Route path="/product/:id" exact component={ProductLayout}></Route>
        <Route path="/shopsale/categories/:category" component={CategoryLayout}></Route>
        <Route path="/productFlashSale/:id" exact component={ProductFlashSaleLayout}></Route>
        <Route path="/sign-in" exact component={SignInLayout}></Route>
        <Route path="/sign-up" exact  component={SignUpLayout}></Route>
        <Route path="/user-info" exact  component={UserInfoLayout}></Route>
        <Route path="/:keyword" exact component={SearchProduct} ></Route>
      
        <Route path="/shopsaleproduct/allproduct/:page" exact component={AllProductChangePageLayout} ></Route>
        {/* <Route path="/shopsaleproduct/allproduct/detail/:id" component={AllProductLayoutID} ></Route> */}
        <Route path="/shopsaleChat/message" exact component={chatMessage} ></Route>
        <Route component={NotFound}></Route>
      </Switch>
    )
  }
}


export default Routes