import React, { useEffect, useState, createRef, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Container,
  InputLabel,
  FormControl,
  Select,
} from '@material-ui/core';
import ProductCard from './productCard';
import { callApi } from 'helpers/callApi';
import Header from 'components/body/header';
import Pagination from '@material-ui/lab/Pagination';
import Footer from 'components/body/footer';
import { useHistory } from 'react-router-dom';
import 'scss/app.scss';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function Product(props) {
  let history = useHistory();
  const classes = useStyles();
  let pageConvert = parseInt(props.match.params.page);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState('Loading...');
  const [state, setState] = useState('');
  const [page, setPage] = React.useState(pageConvert);
  const inputEl = createRef('home');

  const handleChangePage = async (event, value) => {
    setLoading(true);
    history.push({
      pathname: '/shopsaleproduct/allproduct/' + value,
      state: {
        page: value,
      },
      page: value,
    });
  };

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const fetchData = async () => {
    setLoading(true);
    setState('');
    let callApiData = await callApi(
      'product/?pageSize=24&pageIndex=' + props.match.params.page,
    ).then(async (response) => {
      let data = await response.data;
      return data;
    });
    setProduct(callApiData);
    setLoading(false);
  };

  const fetchDataSort = async () => {
    setLoading(true);

    let callApiData = [];
    if (state === 'desc') {
      callApiData = product.sort(function (a, b) {
        return b.price - a.price;
      });
      setProduct([...callApiData]);
    } else if (state === 'asc') {
      callApiData = product.sort(function (a, b) {
        return a.price - b.price;
      });
      setProduct([...callApiData]);
    }
    setLoading(false);
  };

  useEffect(() => {
    let pageParams = parseInt(props.match.params.page);
    setPage(pageParams);
    fetchData();
  }, [props.match.params.page]);

  const onButtonClick = () => {
    inputEl.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    fetchDataSort();
  }, [state]);

  let result = product.map((item, index) => {
    return (
      <Grid item xs={12} xs={6} sm={3} md={4} lg={2} key={Math.random()}>
        <ProductCard
          key={Math.random()}
          id={item._id}
          imageUrl={item.imageUrl}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
          star={item.star}
        ></ProductCard>{' '}
      </Grid>
    );
  });

  return (
    <div>
      <Header />
      <div ref={inputEl}> </div>{' '}
      <Container style={{ paddingTop: 140 }}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple"> Giá </InputLabel>{' '}
          <Select
            native
            value={state.price} // cai nay la state object
            onClick={handleChange}
            inputProps={{
              name: 'price',
            }}
          >
            <option aria-label="None" value=""></option>
            <option value={'asc'}> Thấp Đến Cao </option>{' '}
            <option value={'desc'}> Cao Đến Thấp </option>{' '}
          </Select>{' '}
        </FormControl>
        {/* <FormControl className={classes.formControl} style={{ marginLeft: 20 }}>
                      <InputLabel htmlFor="age-native-simple"><i className="far fa-star" ></i></InputLabel>
                      <Select
                        native
                        value={state.price}
                        onChange={handleChange}
                        inputProps={{
                          name: 'price',
                          id: 'age-native-simple',
                        }}
                      >
                        <option aria-label="None" value="" />
                        <option value={"5"} >5 Sao</option>
                        <option value={"4"} >4 Sao</option>
                        <option value={"3"} >3 Sao</option>
                        <option value={"2"} >2 Sao</option>
                        <option value={"1"} >1 Sao</option>
                      </Select>
                    </FormControl> */}
        <Grid
          container
          spacing={1}
          xs={12}
          sm={6}
          md={6}
          lg={12}
          style={{ paddingTop: 20 }}
          scroll
        >
          {result.length > 0 ? (
            result
          ) : (
            <div style={{ textAlign: 'center', color: '#e79413' }}>
              {' '}
              <h2> {loading} </h2>
            </div>
          )}{' '}
        </Grid>
        {result.length > 0 ? (
          <Pagination
            count={8}
            color="primary"
            shape="rounded"
            page={page}
            onClick={onButtonClick}
            onChange={handleChangePage}
            style={{ display: 'flex', justifyContent: 'center', margin: 30 }}
          />
        ) : (
          ''
        )}{' '}
      </Container>{' '}
      {result.length > 0 ? <Footer /> : ''}
    </div>
  );
}

export default Product;
