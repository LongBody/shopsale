import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

export default function SkeletonLoading() {

  return (
    <div>
      <Container>
        <Grid container spacing={2} xs={12} sm={6} md={6} lg={12}>
          <Grid item xs={2} xs={12} xs={6} sm={3} md={4} lg={2}>
            <Skeleton variant="rect" width={194} height={220} animation="wave" />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
          </Grid>

          <Grid item xs={2} xs={12} xs={6} sm={3} md={4} lg={2}>
            <Skeleton variant="rect" width={194} height={220} animation="wave" />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
          </Grid>

          <Grid item xs={2} xs={12} xs={6} sm={3} md={4} lg={2}>
            <Skeleton variant="rect" width={194} height={220} animation="wave" />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
          </Grid>

          <Grid item xs={2} xs={12} xs={6} sm={3} md={4} lg={2}>
            <Skeleton variant="rect" width={194} height={220} animation="wave" />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
          </Grid>

          <Grid item xs={2} xs={12} xs={6} sm={3} md={4} lg={2}>
            <Skeleton variant="rect" width={194} height={220} animation="wave" />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
          </Grid>

          <Grid item xs={2} xs={12} xs={6} sm={3} md={4} lg={2}>
            <Skeleton variant="rect" width={194} height={220} animation="wave" />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
            <Skeleton variant="rect" width={194} height={10} animation="wave" style={{ marginTop: 10 }} />
          </Grid>


        </Grid>
      </Container>
    </div>


  );
}
