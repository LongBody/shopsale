import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

export default function SkeletonLoading() {
  const skeleton = new Array(6);
  let result = [];
  for (let i = 0; i < skeleton.length; i++) {
    result.push(
      <Grid item xs={2} xs={12} sm={3} md={6} lg={2}  key={i}>
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
      </Grid>,
    );
  }

  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          {result}
        </Grid>
      </Container>
    </div>
  );
}
