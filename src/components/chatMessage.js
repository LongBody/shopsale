import React, { useState, useEffect } from 'react';
import '../scss/app.scss'
import { connect } from 'react-redux'
import * as actions from '../actions/cartAction'
import Header from '../components/header'
import { Container } from '@material-ui/core';
import io from 'socket.io-client';
import '../scss/chat.scss'
import Button from '@material-ui/core/Button';
let socket;

function ChatMessage() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [typing, setTyping] = useState("");
    // const [messages , setStopTyping] = useState([]);
    let userData = JSON.parse(localStorage.getItem("userShopsale"));

    const ENDPOINT = 'http://localhost:8888'

    const styleButton = {
        background: "#00acc1",
        color: "white",
        height: 35,
        width: "20%"
    }

    useEffect(() => {
        socket = io(ENDPOINT)

        let { fullName, _id, roles } = userData


        if (roles[0] === "user") {
            socket.emit('join', { name: fullName, room: _id })
        }
    }, [userData])


    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })
    }, [messages])

    useEffect(() => {
        let { fullName, _id, roles } = userData
        if (roles[0] === "admin") {
            socket.on('server-admin-join', (data) => {
                console.log(data)
                socket.emit('join', { name: "longbody", room: data.room })
            })
        }
    }, [])




    const sendMessage = (e) => {
        e.preventDefault()
        if (message) {
            console.log(socket)
            socket.emit('sendMessage', message, () => setMessage(""))
            setMessage("")
        }
    }








    return ( <
        div >
        <
        Header / >
        <
        Container style = {
            { paddingTop: 120 }
        } >
        <
        div className = "chat-wrap" >
        <
        div className = "message-wrap" > {
            messages ? messages.map(item => < div > { item.text } < /div>) : ""
            } <
            /div> <
            div className = "container-chat-wrap" >
            <
            div className = "container-input-wrap" >
            <
            input value = { message }
            onChange = {
                (event) => { setMessage(event.target.value) }
            }
            onKeyPress = { event => event.key === "Enter" ? sendMessage(event) : null }
            style = {
                { width: "80%", }
            }
            // onFocus={onFocusHandler()}
            // onBlur={onBlurHandler()}
            /> <
            Button variant = "contained"
            style = { styleButton } > Send < /Button> < /
            div > <
            /div> < /
            div >



            <
            /Container>

            <
            /div>




        );
    }

    const mapStateToProps = (state, ownProps) => {
        return {
            cart: state.cart,
            messageCart: state.messageCart
        }
    }
    const mapDispatchToProps = (dispatch, ownProps) => {
        return {
            paymentCard: () => {
                dispatch(actions.paymentCart())
                    // dispatch(actions.onUpdateMessage(MSG_YOUR_CART))
            }
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(ChatMessage);


    // const onFocusHandler = () => {
    //   if (message) {
    //     console.log(socket)
    //     socket.emit('someone-typing', "")
    //   }

    // }

    // const onBlurHandler = () => {
    //   if (message) {
    //     console.log(socket)
    //     socket.emit('someone-stop-typing', "")
    //   }
    // }


    // useEffect(() => {
    //   socket.on('server-send-someone-typing', () => {
    //     setTyping("Someone is typing ...");
    //   })

    // },[onBlurHandler()])




    // useEffect(() => {
    //   socket.on('server-send-someone-stop-typing', () => {
    //     setTyping("");
    //   })

    // },[onFocusHandler()])