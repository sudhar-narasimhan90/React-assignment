import { useMutation, UseMutationResult, UseMutationOptions } from 'react-query';
import axios from 'axios';
import { Ticket, TicketId } from '../shared/types';

export type TicketsResponse = Ticket;

export const TICKETS_ENDPOINT = `/api/tickets`;

const cancelTicket = async ({ id } : TicketId): Promise<TicketsResponse> => {
  try {
    const { data } = await axios.delete<{ data: Ticket }>(`${TICKETS_ENDPOINT}/${id}`);
    return data.data;
  } catch (e) {
    const errorMessage = e.response?.data?.error?.message || e.message;

    throw new Error(errorMessage);
  }
};

export const useCancelTicket = (options?: UseMutationOptions<TicketsResponse, Error, TicketId>): UseMutationResult<TicketsResponse, Error, TicketId> => {
  return useMutation(cancelTicket, options);
};
