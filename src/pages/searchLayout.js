import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { createFilterOptions } from '@material-ui/lab';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { callApi } from 'helpers/callApi';
import image1 from 'image/category/hang_quoc_te.png';
import image2 from 'image/category/thiet_bi_dien_tu.png';
import image3 from 'image/popular/dong-ho.png';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import 'scss/product.scss';
const OPTIONS_LIMIT = 7;
const defaultFilterOptions = createFilterOptions();

const filterOptions = (options, state) => {
  return defaultFilterOptions(options, state).slice(0, OPTIONS_LIMIT);
};

const useStyles = makeStyles((theme) => ({
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
    marginRight: theme.spacing(1),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2),
      width: 'auto',
    },
    marginTop: 4,
  },
  searchIcon: {
    height: '100%',
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
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
}));

const styleSearchField = {
  width: '95%',
  backgroundColor: '#ffffff',
  color: 'black',
  fontSize: 14,
  borderRadius: '3px',
  input: {
    '&::placeholder': {
      color: 'black',
    },
  },
};

function SearchLayout(props) {
  let history = useHistory();
  const classes = useStyles();
  const [keyword, setKeyword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [tags, setTags] = useState([]);

  let arrayTag = [
    {
      image: image1,
      title: 'đồng hồ',
    },
    {
      image: image2,
      title: 'thiết bị điện tử',
    },
    {
      image: image3,
      title: 'hàng quốc tế',
    },
  ];

  const fetchData = async () => {
    const callApiData = await callApi('product/').then(async (response) => {
      let data = await response.data;
      return data;
    });

    callApiData.map((item) => {
      arrayTag.push({
        image: item.imageUrl,
        title: item.title,
      });
    });

    setTags(arrayTag);
  };

  function imageProduct(product) {
    let image = '';
    tags.map((item) => {
      if (item.title === product) {
        image = item.image;
      }
    });
    return image;
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setRedirect(true);
  };

  const handleTag = ({ target }, fieldName) => {
    const { value } = target;
    setKeyword(value);
  };

  if (redirect) {
    history.push({
      pathname: '/' + keyword,
      state: {
        keyword: keyword,
      },
      params: keyword,
    });
    setRedirect(false);
  }

  return (
    <div style={{ width: '90%' }}>
      <div style={{ width: '100%', display: 'flex' }}>
        {/* <div><i class="fas fa-th-large" style={{height:30}}></i></div> */}
        <div className={classes.search} style={styleSearchField}>
          <form onSubmit={handleSubmit}>
            <Autocomplete
              id="custom-input-demo"
              size="small"
              freeSolo
              filterOptions={filterOptions}
              onSelect={(event) => handleTag(event, 'tags')}
              renderOption={(option) => {
                return (
                  <div style={{ display: 'flex' }}>
                    <img
                      src={imageProduct(option)}
                      alt=""
                      style={{ height: 25, paddingRight: 10 }}
                    />{' '}
                    {/*Mock image, attribute in option*/}
                    <div> {option}</div>
                  </div>
                );
              }}
              options={tags.map((item) => {
                return item.title;
              })}
              renderInput={(params) => {
                const { InputLabelProps, InputProps, ...rest } = params;
                return (
                  <div ref={params.InputProps.ref} style={{ width: '100%' }}>
                    <InputBase
                      placeholder="Tìm kiếm sản phẩm ..."
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      style={styleSearchField}
                      inputProps={{ 'aria-label': 'search' }}
                      {...params.InputProps}
                      {...rest}
                    />
                  </div>
                );
              }}
            />{' '}
          </form>
        </div>
        <button className="btn-search" onClick={handleSubmit}>
          <div className={classes.searchIcon}>
            <SearchIcon style={{ color: '#3f4b53' }} />{' '}
          </div>{' '}
        </button>
      </div>
      <div
        className="search__keyword__below__searchField"
        style={{ marginLeft: 18, marginTop: 5, color: '#d3d3d3' }}
      >
        <Link
          to="/Tai nghe"
          style={{
            color: '#232323',
            marginRight: 13,
            fontFamily: 'sans-serif',
            fontSize: 13,
          }}
        >
          Tai nghe
        </Link>
        <Link
          to="/sneaker"
          style={{
            color: '#232323',
            marginRight: 13,
            fontFamily: 'sans-serif',
            fontSize: 13,
          }}
        >
          giày sneaker
        </Link>
        <Link
          to="/ao"
          style={{
            color: '#232323',
            marginRight: 13,
            fontFamily: 'sans-serif',
            fontSize: 13,
          }}
        >
          áo nữ
        </Link>
        <Link
          to="/sua rua mat"
          style={{
            color: '#232323',
            marginRight: 13,
            fontFamily: 'sans-serif',
            fontSize: 13,
          }}
        >
          sữa rửa mặt
        </Link>
        <Link
          to="/dien thoai"
          style={{
            color: '#232323',
            marginRight: 13,
            fontFamily: 'sans-serif',
            fontSize: 13,
          }}
        >
          điện thoại
        </Link>
        <Link
          to="/bia"
          style={{
            color: '#232323',
            marginRight: 13,
            fontFamily: 'sans-serif',
            fontSize: 13,
          }}
        >
          Bia
        </Link>
        <Link
          to="/dong ho"
          style={{
            color: '#232323',
            marginRight: 13,
            fontFamily: 'sans-serif',
            fontSize: 13,
          }}
        >
          đồng hồ
        </Link>
        <Link
          to="/coca"
          style={{
            color: '#232323',
            marginRight: 13,
            fontFamily: 'sans-serif',
            fontSize: 13,
          }}
        >
          Coca-Cola
        </Link>
        <Link
          to="/loa"
          style={{
            color: '#232323',
            marginRight: 13,
            fontFamily: 'sans-serif',
            fontSize: 13,
          }}
        >
          Loa bluetooth
        </Link>
      </div>
    </div>
  );
}

export default connect(null, null)(SearchLayout);
