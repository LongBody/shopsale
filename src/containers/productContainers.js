import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProduct, fetchLoadMoreProduct } from 'actions/productAction';
import Products from 'modules/product/products';
import Skeleton from 'components/loading/skeleton';
import { bindActionCreators } from 'redux';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import LogoLoading from 'components/loading/logoLoading';
import { withRouter } from 'react-router-dom';
import './style.scss';

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
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.props.fetchProduct();
  }

  componentWillReceiveProps() {
    this.setState({
      seeMore: (this.state.seeMore - 1),
    });
  }

  executeScroll = () => this.myRef.current.scrollIntoView();

  loadMoreProductOnClick() {
    this.setState({
      page: (this.state.page + 1),
      seeMore: (this.state.seeMore + 1),
    });

    if (this.state.page > 8) {
      this.props.history.push('/shopsaleproduct/allproduct/3');
    } else {
      this.props.fetchLoadMoreProduct(this.state.page);
    }
    this.executeScroll();
  }

  render() {
    let { products } = this.props;
    if (products.length === 0) return <Skeleton></Skeleton>;

    return (
      <div>
        <Products products={products}> </Products>
        <Container className="productContainer__wrap">
          {this.state.seeMore === 1 ? (
            <LogoLoading />
          ) : (
            <p
              onClick={() => {
                this.loadMoreProductOnClick();
              }}
              className="productContainer__button__loadMore"
            >
              <span className="productContainer__button__loadMore__text">
                Xem Thêm
              </span>
            </p>
          )}

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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ProductContainer));
