import React, { Component, useRef } from "react";
import { connect } from "react-redux";
import { fetchProduct, fetchLoadMoreProduct } from "../actions/productAction";
import Products from "../components/product/products";
import Skeleton from "../components/loading/skeleton";
import { bindActionCreators } from "redux";
import { Container } from "@material-ui/core";
import PropTypes from "prop-types";
import LoadingBar from "react-top-loading-bar";
import LogoLoading from "../components/loading/logoLoading";

class ProductContainer extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };
  constructor(props) {
    super(props);
    this.state = {
      page: 3,
    };
    this.myRef = React.createRef() 
  }

  componentDidMount() {
    this.props.fetchProduct();
  }

  
  executeScroll = () => this.myRef.current.scrollIntoView()

  

loadMoreProductOnClick() {
    // ref.current.continuousStart()
    this.setState({
      page: (this.state.page += 1),
    });

    console.log(this.state.seeMore)
    if (this.state.page > 5) {
      window.location.replace(
        "https://shopsale.cf/#/shopsaleproduct/allproduct/2"
      );
    } else  this.props.fetchLoadMoreProduct(this.state.page);

   
    this.executeScroll()
  }

 

  render() {
    let { products } = this.props;
    if (products.length == 0) return <Skeleton></Skeleton>;

    return (
      <div>
        <LoadingBar
          height={3}
          color="#f11946"
          onRef={(ref) => (this.LoadingBar = ref)}
        />
        <Products products={products}> </Products>
        <Container
          style={{ justifyContent: "center", marginTop: 30, display: "flex" }}
        >
          
              <button
            onClick={() => {
              this.loadMoreProductOnClick();
            }}
            style={{ width: 400, height: 30 }}
          >
            
                Xem Thêm
       
          </button>
          
        
          <div ref={this.myRef}></div> 
        </Container>
        
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProduct: bindActionCreators(fetchProduct, dispatch),
    fetchLoadMoreProduct: (pageIndex) =>
      dispatch(fetchLoadMoreProduct(pageIndex)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
