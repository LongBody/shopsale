import React, { useState, useEffect } from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Redirect } from "react-router-dom";
import * as actions from '../../actions/searchAction'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { callApi } from '../../utils/callApi'
import { createFilterOptions } from "@material-ui/lab";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import image1 from '../../image/category/hang_quoc_te.png'
import image2 from '../../image/category/thiet_bi_dien_tu.png'
import image3 from '../../image/popular/dong-ho.png'
import '../../scss/product.scss'
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
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(2),
            width: 'auto',
        },
        marginTop: 4
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
    width: "100%",

}

const btnSearch = {
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
    color: "white",
    backgroundColor: "black !important",
}


function SearchLayout(props) {
    let history = useHistory();
    const classes = useStyles();
    const [keyword, setKeyword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [tags, setTags] = useState([])

    let arrayTag = [
        {
            "image": image1,
            "title": "đồng hồ"
        }
        , {
            "image": image2,
            "title": "thiết bị điện tử"
        },
        {
            "image": image3,
            "title": "hàng quốc tế"
        }
    ]

    const fetchData = async () => {
        const callApiData = await callApi("product/").then(async (response) => {
            let data = await response.data
            return data
        })

        callApiData.map(item => {
            arrayTag.push({
                image: item.imageUrl,
                title: item.title
            })
        })

        setTags(arrayTag)
    }

    function imageProduct(product) {
        let image = ""
        tags.map(item => {
            if (item.title === product) {
                image = item.image
            }
        })
        return image
    }

    useEffect(() => {
        fetchData()
    }, []);

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        setRedirect(true)
    }

    const handleTag = ({ target }, fieldName) => {
        const { value } = target;
        setKeyword(value)
    };

    if (redirect) {
        history.push({
            pathname: '/' + keyword,
            state: {
                keyword: keyword
            },
            params: keyword
        })
        setRedirect(false)
    }

    return (


        <div style={
            { width: "80%" }
        } >
            <div className={classes.search}
                style={styleSearchField} >
                <form onSubmit={handleSubmit} >
                    <Autocomplete id="custom-input-demo"

                        size="small"
                        freeSolo filterOptions={filterOptions}
                        onSelect={
                            (event) => handleTag(event, 'tags')
                        }


                        renderOption={option => {
                            console.log(option)
                            return (
                                <div style={{ display: "flex" }}>
                                    <img src={imageProduct(option)} style={{ height: 25, paddingRight: 10, }} /> {/*Mock image, attribute in option*/}
                                    <div style={{}}> {option}</div>
                                </div>
                            );
                        }}
                        options={tags.map(item => {
                            return item.title
                        })}
                        renderInput={
                            (params) => (
                                <div ref={params.InputProps.ref}
                                    style={
                                        { width: "100%" }
                                    } >

                                    <InputBase placeholder="Tìm kiếm sản phẩm ..."
                                        classes={
                                            {
                                                root: classes.inputRoot,
                                                input: classes.inputInput,
                                            }
                                        }
                                        style={styleSearchField}

                                        inputProps={
                                            { 'aria-label': 'search' }
                                        } {...params}
                                    >

                                    </InputBase>

                                </div>
                            )
                        }
                    /> <Button variant="contained"
                        style={btnSearch}
                        className="btn-search"
                        onClick={handleSubmit} >
                        <div className={classes.searchIcon} >
                            <SearchIcon style={
                                { color: "aqua", }
                            }
                            /> </div> </Button> </form>

            </div>
            <div className="search__keyword__below__searchField" style={{ marginLeft: 18, marginTop: 5, color: "#d3d3d3" }}>
                <Link to="/Tai nghe" style={{ color: "#d3d3d3", marginRight: 13, fontFamily: "sans-serif", fontSize: 13 }}>Tai nghe</Link>
                <Link to="/sneaker" style={{ color: "#d3d3d3", marginRight: 13, fontFamily: "sans-serif", fontSize: 13 }}>giày sneaker</Link>
                <Link to="/ao" style={{ color: "#d3d3d3", marginRight: 13, fontFamily: "sans-serif", fontSize: 13 }}>áo nữ</Link>
                <Link to="/sua rua mat" style={{ color: "#d3d3d3", marginRight: 13, fontFamily: "sans-serif", fontSize: 13 }}>sữa rửa mặt</Link>
                <Link to="/dien thoai" style={{ color: "#d3d3d3", marginRight: 13, fontFamily: "sans-serif", fontSize: 13 }}>điện thoại</Link>
                <Link to="/bia" style={{ color: "#d3d3d3", marginRight: 13, fontFamily: "sans-serif", fontSize: 13 }}>Bia</Link>
                <Link to="/dong ho" style={{ color: "#d3d3d3", marginRight: 13, fontFamily: "sans-serif", fontSize: 13 }}>đồng hồ</Link>
                <Link to="/coca" style={{ color: "#d3d3d3", marginRight: 13, fontFamily: "sans-serif", fontSize: 13 }}>Coca-Cola</Link>
                <Link to="/loa" style={{ color: "#d3d3d3", marginRight: 13, fontFamily: "sans-serif", fontSize: 13 }}>Loa bluetooth</Link>
            </div>
        </div>

    );
}


export default connect(null, null)(SearchLayout);