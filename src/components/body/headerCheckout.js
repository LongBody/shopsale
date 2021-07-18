import React, { useEffect } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Container,
  Menu,
  MenuItem,
  IconButton,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import LogoWeb from 'image/LogoWeb.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'actions/cartAction';
import 'scss/header.scss';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const styleAppBar = {
  position: 'fixed',
  zIndex: 3,
  backgroundColor: '#00acc1',
};

function Header(props) {
  let user = JSON.parse(localStorage.getItem('userShopsale'));

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [userState, setUserState] = React.useState(user);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = async () => {
    await localStorage.removeItem('userShopsale');
    await localStorage.removeItem('cartProduct');
    await setUserState('');
    window.location.replace('https://shopsale.cf');
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
    cart.map((item) => {
      quantity += item.quantity;
    });
  }

  useEffect(() => {
    if (user) {
      props.fetchCartUser(user._id);
    }
  }, []);

  let cardInfoItem = cart.map((item) => {
    return (
      <div style={{ marginBottom: 5 }} className="item__card__header">
        {item.category === 'FS' ? (
          <Link
            to={{
              pathname: '/productFlashSale/' + item.product.id,
              query: { the: item.product.id },
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
              query: { the: item.product.id },
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
}

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCartUser: (id) => {
      dispatch(actions.getCartUser(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
