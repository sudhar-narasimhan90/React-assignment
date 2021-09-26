import { FC } from 'react';
import { createStyles, Grid, makeStyles, Typography } from '@material-ui/core';
import { TicketListHeader } from '../../shared/constants';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      borderBottom: '1px solid #F1F1F1',
      padding: theme.spacing(2, 1.5),
    },
    text: {
      fontSize: 12,
      lineHeight: '16px',
      fontWeight: theme.typography.fontWeightMedium,
    },
  })
);

const ListHeader: FC = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={6} md={2}>
        <Typography className={classes.text}>{TicketListHeader[0]}</Typography>
      </Grid>
      <Grid item xs={6} md={2}>
        <Typography className={classes.text}>{TicketListHeader[1]}</Typography>
      </Grid>
      <Grid item xs={6} md={2}>
        <Typography className={classes.text}>{TicketListHeader[2]}</Typography>
      </Grid>
      <Grid item xs={6} md={2}>
        <Typography className={classes.text}>{TicketListHeader[3]}</Typography>
      </Grid>
      <Grid item xs={6} md={2}>
        <Typography className={classes.text}>{TicketListHeader[4]}</Typography>
      </Grid>
    </Grid>
  );
};

export { ListHeader };
