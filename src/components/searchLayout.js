import React,{useState,useRef} from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Redirect } from "react-router-dom";
import * as actions from '../actions/searchAction'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
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
            width: '20ch',
        },
    },

}));

const styleSearchField = {
    width: "70%"
}


function SearchLayout(props) {
    const textInput = useRef(null);
    let history = useHistory();
    const classes = useStyles();
    const [keyword , setKeyword ] = useState();
    const [redirect , setRedirect ] = useState(false);

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        setRedirect(true)
    }   

    function handleChange(e){
        console.log(e.target.value)
         setKeyword(e.target.value)

    }
    
    if(redirect){
        history.push({
            pathname:'/'+keyword,
            state:{
                keyword:keyword
            },
            params:keyword
        })
        setRedirect(false)    
    }

    return (


        <div className={classes.search} style={styleSearchField}>
            <form
            onSubmit={handleSubmit}
            >
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    style={styleSearchField}
                    inputProps={{ 'aria-label': 'search' }}
                    value={keyword}
                    onChange={handleChange}
                />
            </form>
        </div>

    );
}


export default connect(null,null)(SearchLayout);
