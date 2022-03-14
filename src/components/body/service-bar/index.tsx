import { Container, Grid, Toolbar } from '@material-ui/core';
import React from 'react';
import { serviceBar } from 'components/body/service-bar/template';

const ServiceBar: React.FC<any> = () => {
  return (
    <React.Fragment>
      <Container>
        <Toolbar
          variant="dense"
          style={{ backgroundColor: '#FFF', paddingTop: 25 }}
        >
          <Grid container spacing={4}>
            {serviceBar?.map((item: any, key: any) => {
              return (
                <Grid item xs={12} sm={3} md={4} lg={2}>
                  <div className="service__first">
                    <i
                      className={item?.icon}
                      style={{
                        fontSize: 50,
                        display: 'flex',
                        justifyContent: 'center',
                        color: 'rgb(0, 172, 193)',
                      }}
                    ></i>
                    <h4
                      style={{
                        textAlign: 'center',
                        color: 'rgb(117, 117, 117)',
                        fontFamily: 'sans-serif',
                      }}
                    >
                      {item?.title}
                    </h4>
                  </div>
                </Grid>
              );
            })}
            <Grid item xs={12} sm={3} md={4} lg={2}></Grid>
          </Grid>
        </Toolbar>
      </Container>
    </React.Fragment>
  );
};

export default ServiceBar;
