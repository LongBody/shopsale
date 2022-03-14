import {
  AppBar,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import 'components/body/header/style.scss';
import { styleAppBar, useStyles } from 'components/body/header-checkout/template';
import LogoWeb from 'image/LogoWeb.png';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_APP_LINK } from 'constants/config';
import { connect } from 'react-redux';
import * as actions from 'actions/cartAction';

const HeaderCheckout: React.FC<any> = (props: any) => {
  const classes = useStyles();
  let user = JSON.parse(localStorage.getItem('userShopsale') || '{}');

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [userState, setUserState] = React.useState(user);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = async () => {
    await localStorage.removeItem('userShopsale');
    await localStorage.removeItem('cartProduct');
    await setUserState('');
    window.location.replace(DEFAULT_APP_LINK);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {userState ? (
        <Link to="/user-info">
          <MenuItem onClick={handleMenuClose}>Thông tin</MenuItem>
        </Link>
      ) : (
        <Link to="/sign-in" style={{ color: 'black' }}>
          <MenuItem onClick={handleMenuClose}>Đăng Nhập</MenuItem>
        </Link>
      )}
      {userState ? (
        <MenuItem onClick={() => handleLogout()} style={{ color: 'red' }}>
          Đăng Xuất
        </MenuItem>
      ) : (
        <Link to="/sign-up" style={{ color: 'black' }}>
          <MenuItem onClick={handleMenuClose}>Đăng Kí</MenuItem>
        </Link>
      )}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  let { cart } = props;

  let quantity = 0;

  if (cart) {
    cart.map((item: any) => {
      quantity += item.quantity;
    });
  }

  useEffect(() => {
    if (user) {
      props.fetchCartUser(user._id);
    }
  }, []);

  let cardInfoItem = cart.map((item: any) => {
    return (
      <div style={{ marginBottom: 5 }} className="item__card__header">
        {item.category === 'FS' ? (
          <Link
            to={{
              pathname: '/productFlashSale/' + item.product.id,
            }}
            style={{ textDecoration: 'none', display: 'flex' }}
          >
            <img
              src={item.product.imageUrl}
              style={{ width: 40, border: '1px solid #dadada' }}
            />
            <h3
              style={{
                width: 200,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: 'inline-block',
                marginLeft: 4,
                color: '#535252',
              }}
            >
              {item.product.title}
            </h3>
            <h5
              style={{
                color: '#696969',
                marginLeft: 1,
                marginRight: 3,
                paddingRight: 3,
              }}
            >
              x{item.quantity}
            </h5>
          </Link>
        ) : (
          <Link
            to={{
              pathname: '/product/' + item.product.id,
            }}
            style={{ textDecoration: 'none', display: 'flex' }}
          >
            <img
              src={item.product.imageUrl}
              style={{ width: 40, border: '1px solid #dadada' }}
            />
            <h3
              style={{
                width: 200,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: 'inline-block',
                marginLeft: 4,
                color: '#535252',
              }}
            >
              {item.product.title}
            </h3>
            <h5
              style={{
                color: '#696969',
                marginLeft: 1,
                marginRight: 3,
                paddingRight: 3,
              }}
            >
              x{item.quantity}
            </h5>
          </Link>
        )}
      </div>
    );
  });

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={styleAppBar}>
        <Container fixed>
          <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link to="/">
              <img src={LogoWeb} className="logoWebImage"></img>
            </Link>

            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
              <span style={{ fontSize: 15, marginLeft: 5, marginTop: 3 }}>
                {user ? user.fullName : 'Người Dùng'}
              </span>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

const mapStateToProps = (state:any, ownProps:any) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch:any, ownProps:any) => {
  return {
    fetchCartUser: (id:any) => {
      dispatch(actions.getCartUser(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCheckout);
