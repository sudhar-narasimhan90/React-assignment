import { render, screen } from '../../../test-utils';
import { TicketsList } from '../TicketsList';
import { useTickets } from '../../../hooks/useTickets';
import { useCancelTicket } from '../../../hooks/useCancelTicket';
import { createFakeTickets } from '../../../mocks/tickets.mock';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useMediaQuery } from '@material-ui/core';

jest.mock('../../../hooks/useTickets');
jest.mock('../../../hooks/useCancelTicket');
jest.mock("@material-ui/core", () => ({
  ...jest.requireActual("@material-ui/core"),
  useMediaQuery: jest.fn()
}));

const tickets = createFakeTickets();

const renderTicketsList = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <TicketsList />
    </QueryClientProvider>
  );
}

describe('TicketsList functionality', () => {

  beforeEach(() => {
    (useCancelTicket as jest.Mock).mockReturnValue({
      mutate: jest.fn()
    });

    (useTickets as jest.Mock).mockReturnValue({
        isLoading: false,
        data: tickets,
      });

    (useMediaQuery as jest.Mock).mockReturnValue(true);
  });

  it('should not display global header when it is viewed in small device', () => {
    render(renderTicketsList());
    expect(screen.queryByTestId('ticket-list-header')).not.toBeInTheDocument();
  });

  it('should display global header when it is viewed in medium and larger devices', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(false);
    render(renderTicketsList());
    expect(screen.queryByTestId('ticket-list-header')).toBeInTheDocument();
  });
  
});
