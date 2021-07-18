import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { Container, Grid } from '@material-ui/core';

export default function SkeletonLoading() {
  const skeleton = new Array(12);
  let result = [];
  for (let i = 0; i < skeleton.length; i++) {
    result.push(
      <Grid item xs={2} key={i}>
        <Skeleton variant="rect" width={194} height={220} animation="wave" />
        <Skeleton
          variant="rect"
          width={194}
          height={10}
          animation="wave"
          style={{ marginTop: 10 }}
        />
        <Skeleton
          variant="rect"
          width={194}
          height={10}
          animation="wave"
          style={{ marginTop: 10 }}
        />
        <div style={{ display: 'flex' }}>
          <Skeleton
            variant="rect"
            width={80}
            height={18}
            animation="wave"
            style={{ marginTop: 10 }}
          />
          <Skeleton
            variant="rect"
            width={105}
            height={18}
            animation="wave"
            style={{ marginTop: 10, marginLeft: 10 }}
          />
        </div>
      </Grid>,
    );
  }

  return (
    <div style={{ paddingTop: 100 }}>
      <Container>
        <Grid container spacing={2}>
          {result}
        </Grid>
      </Container>
    </div>
  );
}
