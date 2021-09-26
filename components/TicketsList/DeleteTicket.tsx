import { FC } from 'react';
import { useQueryClient } from 'react-query';
import { createStyles, makeStyles } from '@material-ui/core';

import { TICKETS_ENDPOINT } from '../../hooks/useTickets';
import { useCancelTicket } from '../../hooks/useCancelTicket'
import { TicketId } from '../../shared/types';
import { DeleteIcon } from './DeleteIcon';

const useStyles = makeStyles((theme) =>
  createStyles({
    icon: {
      cursor: 'pointer'
    }
  })
);

const DeleteTicket: FC<TicketId> = ({ id }) => {
  const classes = useStyles();
  const queryClient = useQueryClient()
  const { mutate } = useCancelTicket({
    onSuccess: () => {
      queryClient.invalidateQueries(TICKETS_ENDPOINT);
    }
  });
  
  return (
    <div>    
      <DeleteIcon width="30" height="30" className={classes.icon} onClick={() => {
          mutate({id: id});
      }}></DeleteIcon>    
    </div>
  )
};

export { DeleteTicket };