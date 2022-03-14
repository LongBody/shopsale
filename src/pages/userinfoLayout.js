import React, { useState, useEffect } from 'react';
import Header from 'components/body/header';
import { makeStyles } from '@material-ui/core/styles';
import {
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Button,
  Container,
  TextField,
  AppBar,
  Tabs,
  Box,
  Tab,
  TextareaAutosize,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import swal from '@sweetalert/with-react';
import { callApi } from 'helpers/callApi';
import PropTypes from 'prop-types';
import 'scss/userInfo.scss';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  media: {
    height: 100,
    paddingTop: '56.25%', // 16:9
  },
  indicator: {
    backgroundColor: 'white',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function User() {
  let user = JSON.parse(localStorage.getItem('userShopsale'));
  const [location, setLocation] = useState(user.location);
  const [phone, setPhone] = useState(user.phone);

  useEffect(() => {
    document.title = 'Tài Khoản';
  }, []);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();
  const onPick = (value) => {
    swal('Cảm ơn đã đánh giá!', `You rated us ${value}/5`, 'success');
  };

  function rating() {
    swal({
      text: 'Bạn cảm thấy dịch vụ của chúng tôi thế nào',
      buttons: {
        cancel: 'Close',
      },
      content: (
        <div>
          <button rating={1} onClick={() => onPick(1)}>
            <i className="fas fa-star" style={{ color: '#e79413' }}></i>
          </button>
          <button rating={2} onClick={() => onPick(2)}>
            <i className="fas fa-star" style={{ color: '#e79413' }}></i>
            <i className="fas fa-star" style={{ color: '#e79413' }}></i>
          </button>
          <button rating={3} onClick={() => onPick(3)}>
            <i className="fas fa-star" style={{ color: '#e79413' }}></i>
            <i className="fas fa-star" style={{ color: '#e79413' }}></i>
            <i className="fas fa-star" style={{ color: '#e79413' }}></i>
          </button>
          <button rating={4} onClick={() => onPick(4)}>
            <i className="fas fa-star" style={{ color: '#e79413' }}></i>
            <i className="fas fa-star" style={{ color: '#e79413' }}></i>
            <i className="fas fa-star" style={{ color: '#e79413' }}></i>
            <i className="fas fa-star" style={{ color: '#e79413' }}></i>
          </button>
          <button rating={5} onClick={() => onPick(5)}>
            <i className="fas fa-star" style={{ color: '#e79413' }}></i>
            <i className="fas fa-star" style={{ color: '#e79413' }}></i>
            <i className="fas fa-star" style={{ color: '#e79413' }}></i>
            <i className="fas fa-star" style={{ color: '#e79413' }}></i>
            <i className="fas fa-star" style={{ color: '#e79413' }}></i>
          </button>
        </div>
      ),
    });
  }

  async function ChangeAddress() {
    if (location !== null || phone !== null) {
      await callApi(
        'sign-in/update-location/?id=' +
          user._id +
          '&location=' +
          location +
          '&phone=' +
          phone,
      ).then(async (res) => {
        await res.data;
        await localStorage.setItem('userShopsale', JSON.stringify(res.data));
        swal('Thành Công', 'Bạn Đã Thay Đổi Thông Tin', 'success');
      });
    } else {
      swal('Oops', 'Bạn Chưa Điền Thông Tin', 'error');
    }
  }

  return (
    <div>
      <Header />
      <Container style={{ paddingTop: 140 }}>
        <div className={classes.root}>
          <AppBar
            position="static"
            style={{ backgroundColor: '#FFFFFF', color: '#00ACC1' }}
          >
            <Tabs
              TabIndicatorProps={{ style: { background: '#F44336' } }}
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Tài Khoản" {...a11yProps(0)} />
              <Tab label="Đơn Hàng" {...a11yProps(1)} />
              <Tab label="Đánh Giá" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <div className="user__info__wrapper">
              {/* <Card className="user__info__card">
                <CardHeader
                  avatar={
                    user.imageUrl ? (
                      <Avatar alt="Remy Sharp" src={user.imageUrl} />
                    ) : (
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        {avatar}
                      </Avatar>
                    )
                  }
                  title={user.fullName}
                  subheader={user.email}
                />
              </Card> */}

              <div style={{ marginLeft: 50 }}>
                <h2>Thông tin:</h2>
                <div>Tên Đăng Nhập : {user.fullName}</div>
                <div>Email : {user.email}</div>
                <TextField
                  id="outlined-basic"
                  value={
                    user.phone === 'null' || user.phone === ''
                      ? 'Chưa có SĐT'
                      : phone
                  }
                  onInput={(e) => setPhone(e.target.value)}
                  label="Số điện thoại"
                  size="small"
                  variant="outlined"
                />
                <div style={{ width: 10, height: 10 }}></div>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={4}
                  value={
                    user.location === 'null' || user.location === ''
                      ? 'Chưa có địa chỉ'
                      : location
                  }
                  onInput={(e) => setLocation(e.target.value)}
                  placeholder="Minimum 3 rows"
                />
                <TextField
                  id="outlined-basic"
                  value={
                    user.location === 'null' || user.location === ''
                      ? 'Chưa có địa chỉ'
                      : location
                  }
                  onInput={(e) => setLocation(e.target.value)}
                  label="Địa chỉ giao hàng"
                  size="small"
                  variant="outlined"
                />
                <div style={{ width: 10, height: 10 }}></div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => ChangeAddress()}
                >
                  Thay Đổi
                </Button>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            In process
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div>
              {' '}
              <img
                alt=""
                style={{ height: 300 }}
                className="imageFeedback"
                src="https://invietthang365.com/wp-content/uploads/2019/03/tai-hinh-nen-dep-cho-may-tinh-min.jpg"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Welcome to Shop Sale Việt Nam
                </Typography>{' '}
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon onClick={() => rating()} />
                  </IconButton>
                </CardActions>
              </CardContent>
            </div>
          </TabPanel>
        </div>
      </Container>
    </div>
  );
}

export default User;
