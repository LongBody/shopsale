import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

export default function SkeletonLoading() {

  return (
    <div style={{ paddingTop: 100 }}>
      <Container>
        <Grid container spacing={2}>

          {/* {
          for(var i = 0 ; i<=12 i++){

          }
        }
     */}

          <Grid item xs={2}>
            <Skeleton variant="rect" width={194} height={220} animation="wave" />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
            <div style={{ display: "flex" }}>
              <Skeleton variant="rect" width={80} height={18} animation="wave" style={{ marginTop: 10 }} />
              <Skeleton variant="rect" width={105} height={18} animation="wave" style={{ marginTop: 10, marginLeft: 10 }} />
            </div>
          </Grid>

          <Grid item xs={2}>
            <Skeleton variant="rect" width={194} height={220} animation="wave" />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
            <div style={{ display: "flex" }}>
              <Skeleton variant="rect" width={80} height={18} animation="wave" style={{ marginTop: 10 }} />
              <Skeleton variant="rect" width={105} height={18} animation="wave" style={{ marginTop: 10, marginLeft: 10 }} />
            </div>
          </Grid>

          <Grid item xs={2}>
            <Skeleton variant="rect" width={194} height={220} animation="wave" />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
            <div style={{ display: "flex" }}>
              <Skeleton variant="rect" width={80} height={18} animation="wave" style={{ marginTop: 10 }} />
              <Skeleton variant="rect" width={105} height={18} animation="wave" style={{ marginTop: 10, marginLeft: 10 }} />
            </div>
          </Grid>

          <Grid item xs={2}>
            <Skeleton variant="rect" width={194} height={220} animation="wave" />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
            <div style={{ display: "flex" }}>
              <Skeleton variant="rect" width={80} height={18} animation="wave" style={{ marginTop: 10 }} />
              <Skeleton variant="rect" width={105} height={18} animation="wave" style={{ marginTop: 10, marginLeft: 10 }} />
            </div>
          </Grid>

          <Grid item xs={2}>
            <Skeleton variant="rect" width={194} height={220} animation="wave" />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
            <div style={{ display: "flex" }}>
              <Skeleton variant="rect" width={80} height={18} animation="wave" style={{ marginTop: 10 }} />
              <Skeleton variant="rect" width={105} height={18} animation="wave" style={{ marginTop: 10, marginLeft: 10 }} />
            </div>
          </Grid>

          <Grid item xs={2}>
            <Skeleton variant="rect" width={194} height={220} animation="wave" />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
            <div style={{ display: "flex" }}>
              <Skeleton variant="rect" width={80} height={18} animation="wave" style={{ marginTop: 10 }} />
              <Skeleton variant="rect" width={105} height={18} animation="wave" style={{ marginTop: 10, marginLeft: 10 }} />
            </div>
          </Grid>

          <Grid item xs={2}>
            <Skeleton variant="rect" width={194} height={220} animation="wave" />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
            <div style={{ display: "flex" }}>
              <Skeleton variant="rect" width={80} height={18} animation="wave" style={{ marginTop: 10 }} />
              <Skeleton variant="rect" width={105} height={18} animation="wave" style={{ marginTop: 10, marginLeft: 10 }} />
            </div>
          </Grid>


          <Grid item xs={2}>
            <Skeleton variant="rect" width={194} height={220} animation="wave" />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
            <div style={{ display: "flex" }}>
              <Skeleton variant="rect" width={80} height={18} animation="wave" style={{ marginTop: 10 }} />
              <Skeleton variant="rect" width={105} height={18} animation="wave" style={{ marginTop: 10, marginLeft: 10 }} />
            </div>
          </Grid>


          <Grid item xs={2}>
            <Skeleton variant="rect" width={194} height={220} animation="wave" />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
            <div style={{ display: "flex" }}>
              <Skeleton variant="rect" width={80} height={18} animation="wave" style={{ marginTop: 10 }} />
              <Skeleton variant="rect" width={105} height={18} animation="wave" style={{ marginTop: 10, marginLeft: 10 }} />
            </div>
          </Grid>


          <Grid item xs={2}>
            <Skeleton variant="rect" width={194} height={220} animation="wave" />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
            <div style={{ display: "flex" }}>
              <Skeleton variant="rect" width={80} height={18} animation="wave" style={{ marginTop: 10 }} />
              <Skeleton variant="rect" width={105} height={18} animation="wave" style={{ marginTop: 10, marginLeft: 10 }} />
            </div>
          </Grid>


          <Grid item xs={2}>
            <Skeleton variant="rect" width={194} height={220} animation="wave" />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
            <div style={{ display: "flex" }}>
              <Skeleton variant="rect" width={80} height={18} animation="wave" style={{ marginTop: 10 }} />
              <Skeleton variant="rect" width={105} height={18} animation="wave" style={{ marginTop: 10, marginLeft: 10 }} />
            </div>
          </Grid>

          <Grid item xs={2}>
            <Skeleton variant="rect" width={194} height={220} animation="wave" />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
            <div style={{ display: "flex" }}>
              <Skeleton variant="rect" width={80} height={18} animation="wave" style={{ marginTop: 10 }} />
              <Skeleton variant="rect" width={105} height={18} animation="wave" style={{ marginTop: 10, marginLeft: 10 }} />
            </div>
          </Grid>



        </Grid>
      </Container>
    </div>


  );
}
