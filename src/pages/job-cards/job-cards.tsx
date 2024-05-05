import React from 'react';
import { JobCardsProps } from '../../types/job-cards.types';

// import useStyles from './styles';
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import Grid from '@mui/material/Grid/Grid';
import JobCard from './job-card/job-card';

const JobCards = (props: JobCardsProps) => {
  // const jobCardData = [];
  // const classes = useStyles();

  return (
    !props.jobCardsData.length ? <CircularProgress /> : (
      <Grid container alignItems="stretch" spacing={3}>
        {props.jobCardsData.map((item) => (
          <Grid item xs={12} sm={6} md={6}>
            <JobCard {...{...item}}/>
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default JobCards;