import { Container } from '@material-ui/core';
import Header from 'components/body/header';
import React from 'react';
import 'scss/app.scss';

const NotFound: React.FC<any> = () => {
  return (
    <React.Fragment>
      <div>
        <Header></Header>
        <Container className="paddingTopFixed">
          <div className="notfound">
            <h1>NOT FOUND - 404</h1>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
