import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import AllProductCard from '../components/productAllCard'
import '../scss/app.scss'
import { callApi } from '../utils//callApi'
import Header from '../components/header'
import Pagination from '@material-ui/lab/Pagination';
import Footer from '../components//footer'
import { useHistory } from "react-router-dom";

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

 

function Product() {
  let history = useHistory();
  const classes = useStyles();
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState("Loading...")
  const [state, setState] = useState("")
  const [page, setPage] = React.useState(1);

  const handleChangePage =async (event, value) => {
    setLoading(true)
    // setPage(value);
    // let callApiDataChangePage = await callApi("product/?pageSize=24&pageIndex="+value).then(async (response) => {
    //   let data = await response.data
    //   return data
    // })
    // setState("")
    // if (callApiDataChangePage.length > 0) {
    //   setProduct(callApiDataChangePage)
    // }
    // setLoading(false)
    history.push({
      pathname: '/shopsaleproduct/allproduct/' + value,
      state: {
          page: value
      },
      page: value
  })
  };

  const handleChange = (event) => {
    setState( event.target.value)
  };

  const fetchData = async () => {
  
      let callApiData =[]
      if(state){
        setLoading(true)
        callApiData= await callApi("product/?pageSize=24&sortBy=price"+"&pageIndex="+page+"&sort="+state).then(async (response) => {
          let data = await response.data
          return data
        })
      }
      else{
        callApiData= await callApi("product/?pageSize=24&pageIndex="+page).then(async (response) => {
          let data = await response.data
          return data
        })
      }

    if (callApiData.length > 0) {
      setProduct(callApiData)
    }
    else {
        setProduct([])
        setLoading(false)
    }

  }

  useEffect(() => {
    fetchData()
  }, [state]);


  let result = product.map((item, index) => {
    return (
      <Grid item xs={12} xs={6} sm={3} md={4} lg={2}>
        <AllProductCard
          key={index}
          id={item._id}
          imageUrl={item.imageUrl}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
          star={item.star}
        ></AllProductCard>
      </Grid>
    )
  })

  

  return (

    <div >
      <Header/>
      <Container style={{paddingTop:100}}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Giá</InputLabel>
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
          <option value={"asc"} >Thấp Đến Cao</option>
          <option value={"desc"}>Cao Đến Thấp</option>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl} style={{marginLeft:20}}>
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
          <option value={"asc"} >5 Sao</option>
          <option value={"asc"} >4 Sao</option>
          <option value={"asc"} >3 Sao</option>
          <option value={"asc"} >2 Sao</option>
          <option value={"asc"} >1 Sao</option>
        </Select>
      </FormControl>

    
        <Grid container spacing={1} xs={12} sm={6} md={6} lg={12} style={{paddingTop:20}}>
        {result.length > 0 ? result : <div style={{ textAlign: "center", color: "#e79413" }}><h2>{loading}</h2></div>}
          </Grid>

          {result.length > 0 ?<Pagination count={10} color="primary" shape="rounded" page={page} onChange={handleChangePage} style={{display:"flex",justifyContent:"center",margin:30}}/> : ""}
          
      </Container>
      {result.length > 0 ?   <Footer/> : ""}
   
    </div>
  );

}

export default Product

