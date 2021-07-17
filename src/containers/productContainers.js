import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProduct, fetchLoadMoreProduct } from "../actions/productAction";
import Products from "../components/product/products";
import Skeleton from "../components/loading/skeleton";
import { bindActionCreators } from "redux";
import { Container } from "@material-ui/core";
import PropTypes from "prop-types";
import LogoLoading from "../components/loading/logoLoading";

class ProductContainer extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };
  constructor(props) {
    super(props);
    this.state = {
      seeMore: 1,
      page: 3,

    };
    this.myRef = React.createRef()
  }

  componentDidMount() {
    this.props.fetchProduct();
  }

  componentWillReceiveProps(){
    this.setState({
      seeMore: (this.state.seeMore -= 1)
    });
  }


  executeScroll = () => this.myRef.current.scrollIntoView()



  loadMoreProductOnClick() {
    this.setState({
      page: (this.state.page += 1),
      seeMore: (this.state.seeMore += 1)
    });


    if (this.state.page > 8) {
      window.location.replace(
        "https://shopsale.cf/shopsaleproduct/allproduct/3"
      );
    } else {
      this.props.fetchLoadMoreProduct(this.state.page);

    }
    this.executeScroll()
    
  }



  render() {
    let { products } = this.props;
    if (products.length === 0) return <Skeleton></Skeleton>;

    return (
      <div>
        <Products products={products}> </Products>
        <Container
          style={{ justifyContent: "center", marginTop: 30, display: "flex" }}
        >


          {
            this.state.seeMore === 1 ? 
              <LogoLoading/>
               : <a
                onClick={() => {
                  this.loadMoreProductOnClick();
                }}
                style={{ width: 400, height: 30, border: "1px solid #00acc1", paddingTop: 3, paddingBottom: 3, display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <span style={{ color: "#00acc1", cursor: "pointer", padding: 30, fontFamily: "Roboto-Medium;" }}>Xem Thêm </span>
              </a>
          }







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
