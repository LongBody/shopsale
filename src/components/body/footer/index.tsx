import {
  Box, Container, Grid,
  Typography
} from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { Copyright, footers, useStyles } from 'components/body/footer/template';
import React from 'react';

const Footer: React.FC<any> = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
};

export default Footer;
