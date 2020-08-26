import React from 'react';
import Header from '../components/header'
import { Container } from '@material-ui/core';
import '../scss/app.scss'


export default function NotFound() {
  return (
    <div >
        <Header></Header>
        <Container className="paddingTopFixed">
       <div className="notfound"><h1>NOT FOUND - 404</h1></div>
        </Container>
   
    </div>
  );
}
