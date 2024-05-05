import React from 'react';
import { JobCardProps } from '../../types/job-cards.types';

//import { useSelector } from 'react-redux';

// import useStyles from './styles';
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import Grid from '@mui/material/Grid/Grid';

const JobCards = (props: JobCardProps) => {
  //const posts = useSelector((state) => state.posts);
  // const jobCardData = [];
  // const classes = useStyles();

  return (
    !props.jobCardData.length ? <CircularProgress /> : (
      <Grid /*className={classes.container}*/ container alignItems="stretch" spacing={3}>
        {props.jobCardData.map(() => (
          <Grid item xs={12} sm={6} md={6}>
            {/* <JobCard post={post}/> */}
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default JobCards;