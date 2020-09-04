import React, { useState, useEffect } from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Redirect } from "react-router-dom";
import * as actions from '../actions/searchAction'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { callApi } from '../utils/callApi'
import { createFilterOptions } from "@material-ui/lab";

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
            width: '100%',
        },
    },

}));

const styleSearchField = {
    width: "70%"
}


function SearchLayout(props) {
    let history = useHistory();
    const classes = useStyles();
    const [keyword, setKeyword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [tags, setTags] = useState([])

    let arrayTag = ["đồng hồ", "thiết bị điện tử", "hàng quốc tế"]

    const fetchData = async() => {
        const callApiData = await callApi("product/").then(async(response) => {
            let data = await response.data
            return data
        })

        callApiData.map(item => {
            arrayTag.push(item.title)
        })

        setTags(arrayTag)
    }

    useEffect(() => {
        fetchData()
    }, []);

    const handleSubmit = async(evt) => {
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


        <
        div className = { classes.search }
        style = { styleSearchField } >
        <
        form onSubmit = { handleSubmit } >

        <
        Autocomplete id = "custom-input-demo"
        options = { tags }
        size = "small"
        filterOptions = { filterOptions }
        onSelect = {
            (event) => handleTag(event, 'tags') }
        renderInput = {
            (params) => ( <
                div ref = { params.InputProps.ref } >
                <
                div className = { classes.searchIcon } >
                <
                SearchIcon / >
                <
                /div> <
                InputBase placeholder = "Search…"
                classes = {
                    {
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }
                }
                style = { styleSearchField }
                inputProps = {
                    { 'aria-label': 'search' } } {...params.inputProps }
                /> <
                /div>
            )
        }
        />


        <
        /form> <
        /div>

    );
}


export default connect(null, null)(SearchLayout);