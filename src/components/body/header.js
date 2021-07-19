import React, { useEffect } from 'react';
import { alpha, makeStyles, withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Tooltip,
  Container,
  ClickAwayListener,
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import LogoWeb from 'image/LogoWeb.png';
import 'scss/header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchField from 'pages/searchLayout';
import * as actions from 'actions/cartAction';

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  customWidth: {
    maxWidth: 1200,
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
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
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
    paddingTop: 2,
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const styleCart = {
  fontSize: 25,
  color: 'rgb(255, 255, 255)',
  marginLeft: 20,
  marginBottom: 18,
};

const styleAppBar = {
  position: 'fixed',
  zIndex: 3,
  backgroundColor: '#00acc1',
  //   background: "rgb(2,0,36)",
  background:
    '-moz-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,172,193,1) 0%, rgba(0,172,193,1) 0%)',
  // background: "-webkit-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,172,193,1) 0%, rgba(0,172,193,1) 0%"),
  // background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,172,193,1) 0%, rgba(0,172,193,1) 0%)",
  // filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#00acc1",GradientType=1)",
};

const styleSearchField = {
  width: '70%',
};

function Header(props) {
  let user = JSON.parse(localStorage.getItem('userShopsale'));

  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [userState, setUserState] = React.useState(user);
  const [cartState, setCartState] = React.useState([]);

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

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
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

  let cardInfoItem = cart.map((item, index) => {
    return (
      <div key={index} style={{ marginBottom: 5 }} className="item__card__header">
        {item.category === 'FS' ? (
          <Link
            to={{
              pathname: '/productFlashSale/' + item.product.id,
              query: { the: item.product.id },
            }}
            key={index}
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
          <div className="content-header">
            <div className="social-header">
              <span
                style={{
                  marginLeft: 25,
                  marginTop: 30,
                  fontWeight: 600,
                  marginRight: 10,
                  color: 'black',
                  fontSize: '13px !important',
                }}
              >
                Kết Nối
              </span>
              <a
                href="https://www.facebook.com/Shopsale-101665164978100/"
                className="hoverFacebook"
              >
                <i
                  className="fab fa-facebook-square"
                  style={{
                    fontSize: 20,
                    marginRight: 10,
                    color: '#e79413 !important',
                  }}
                ></i>
              </a>
              <a href="https://www.youtube.com/channel/UCq4jLkYQyW3llnJm6fpaFGQ?view_as=subscriber">
                <i
                  className="fab fa-youtube"
                  style={{ fontSize: 20, marginRight: 5 }}
                ></i>
              </a>
            </div>

            <div style={{ paddingRight: 20 }}>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                  className="disableHover"
                >
                  <MoreIcon />
                </IconButton>
              </div>
              <div className={classes.sectionDesktop + ' disableHover'}>
                <ClickAwayListener onClickAway={handleTooltipClose}>
                  <LightTooltip
                    title={
                      <div style={{ padding: 5 }}>
                        <div style={{ display: 'flex' }}>
                          <img
                            src={LogoWeb}
                            style={{ width: 38 }}
                            alt="shopsale"
                          />
                          <h3 style={{ marginLeft: 5 }}>
                            {' '}
                            Chào mừng bạn đến với Shopsale
                          </h3>
                        </div>
                        {/* <div style={{ display: "flex" }}><img src={LogoWeb} style={{ width: 38 }} /><h3 style={{ marginLeft: 5 }}>Mua Sắm Với Shopsale
                                     <span style={{ marginLeft: 2, color: "#e79413" }} onClick={() => WatchNowNoti()}>Xem Ngay</span>
                                        </h3>
                                        </div> */}
                      </div>
                    }
                    arrow
                    placement="bottom-end"
                    PopperProps={{
                      disablePortal: true,
                    }}
                    onClose={handleTooltipClose}
                    open={open}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                  >
                    {/* <Tooltip classes={{ tooltip: classes.customWidth }}>
                      <button >
                        Custom Width [500px]
                      </button>
                    </Tooltip> */}
                    <IconButton
                      style={{ backgroundColor: 'transparent' }}
                      className="top-header-hover"
                      aria-label="show 17 new notifications"
                      color="inherit"
                      onClick={handleTooltipOpen}
                    >
                      <Badge badgeContent={1} color="primary">
                        <NotificationsIcon />
                      </Badge>
                      <span
                        style={{
                          fontSize: 13,
                          marginLeft: 14,
                          marginTop: 3,
                          color: 'black',
                          fontWeight: '600',
                        }}
                      >
                        Thông báo
                      </span>
                    </IconButton>
                  </LightTooltip>
                </ClickAwayListener>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                  className="top-header-hover"
                  style={{ backgroundColor: 'transparent' }}
                >
                  <span style={{ fontSize: 15, marginLeft: 5, marginTop: 3 }}>
                    {user ? (
                      user.fullName
                    ) : (
                      <div>
                        <Link to="/sign-in">
                          <button className="btn-header-login">
                            Đăng nhập
                          </button>
                        </Link>
                        <Link to="/sign-up">
                          <button className="btn-header-signUp">Đăng ký</button>
                        </Link>
                      </div>
                    )}
                  </span>
                </IconButton>
              </div>
            </div>
          </div>

          <Toolbar>
            <Link to="/">
              <img src={LogoWeb} className="logoWebImage" alt="shopsale"></img>
            </Link>
            <SearchField />
            {/* <div className={classes.grow} /> */}

            <Link className="cart__header__icon" to="/cart">
              <LightTooltip
                classes={{ tooltip: classes.customWidth }}
                interactive
                title={
                  cardInfoItem.length > 0 ? (
                    <div style={{ marginLeft: 5 }}>{cardInfoItem}</div>
                  ) : (
                    'Chưa Có sản phẩm'
                  )
                }
                arrow
                placement="bottom-end"
              >
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartIcon style={styleCart} className="show">
                    <NotificationsIcon />
                  </ShoppingCartIcon>
                </Badge>
              </LightTooltip>
            </Link>
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
