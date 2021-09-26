import { FC } from 'react';
import { Chip, createStyles, Grid, makeStyles, Typography, useTheme, useMediaQuery } from '@material-ui/core';
import { format } from 'date-fns';

import { DeleteTicket } from './DeleteTicket';
import { Ticket } from '../../shared/types';
import { TicketListHeader } from '../../shared/constants';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      borderBottom: '1px solid #F1F1F1',
      padding: theme.spacing(2, 1.5)
    },
    text: {
      fontWeight: theme.typography.fontWeightLight,
    },
    headerText: {
        fontSize: 12,
        lineHeight: '16px',
        fontWeight: theme.typography.fontWeightMedium,
    },
    status: {
      width: '101px',
      height: '19px',
      borderRadius: 4,
      fontSize: 11,
      lineHeight: '15px',
      fontWeight: theme.typography.fontWeightBold,
      color: '#FFFFFF',
      backgroundColor: '#5B994C',
    },
  })
);

const formatToDate = (date: string) => {
  return format(new Date(date), 'dd/MM/yyyy');
};

const ListItem: FC<Ticket> = ({ id, user, status, createdAt, dueDate }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down('sm'));
  const createdAtFormatted = formatToDate(createdAt);
  const dueDateFormatted = formatToDate(dueDate);


  return (
    <Grid container className={classes.root} spacing={isSmallDevice ? 3 : 0}>
      <Grid item xs={6} md={2}>
        {isSmallDevice ? <Typography className={classes.headerText}>{TicketListHeader[0]}</Typography> : null}
        <Typography className={classes.text}>{id}</Typography>
      </Grid>
      <Grid item xs={6} md={2}>
      {isSmallDevice ? <Typography className={classes.headerText}>{TicketListHeader[1]}</Typography> : null}
        <Typography className={classes.text}>{`${user.firstName} ${user.lastName}`}</Typography>
      </Grid>
      <Grid item xs={6} md={2}>
        {isSmallDevice ? <Typography className={classes.headerText}>{TicketListHeader[2]}</Typography> : null}
        <Typography className={classes.text}>{createdAtFormatted}</Typography>
      </Grid>
      <Grid item xs={6} md={2}>
        {isSmallDevice ? <Typography className={classes.headerText}>{TicketListHeader[3]}</Typography> : null}
        <Typography className={classes.text}>{dueDateFormatted}</Typography>
      </Grid>
      <Grid item xs={6} md={2}>
        {isSmallDevice ? <Typography className={classes.headerText}>{TicketListHeader[4]}</Typography> : null}
        <Chip label={status} className={classes.status} />
      </Grid>
      <Grid item xs={6} md={2}>
        <DeleteTicket id={id}></DeleteTicket>
      </Grid>
    </Grid>
  );
};

export { ListItem };
