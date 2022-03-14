import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProductFS } from 'actions/productAction';
import ProductFlashSale from 'components/body/product-flashsale/index';
import SkeletonFs from 'components/loading/skeletonFs';
import { bindActionCreators } from 'redux';

class ProductFSContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.fetchProductFS();
  }

  render() {
    let { productFS } = this.props;
    if (productFS.length === 0) return <SkeletonFs></SkeletonFs>;

    return (
      <div>
        <ProductFlashSale products={productFS}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    productFS: state.productFS,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProductFS: bindActionCreators(fetchProductFS, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductFSContainer);
