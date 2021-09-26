import { render, screen } from '../../../test-utils';
import { ListBody } from '../ListBody';
import { useTickets } from '../../../hooks/useTickets';
import { useCancelTicket } from '../../../hooks/useCancelTicket';
import { createFakeTickets } from '../../../mocks/tickets.mock';
import { QueryClient, QueryClientProvider } from 'react-query';

jest.mock('../../../hooks/useTickets');
jest.mock('../../../hooks/useCancelTicket');

const tickets = createFakeTickets();

const renderListBody = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ListBody />
    </QueryClientProvider>
  );
}

describe('ListBody', () => {

  beforeEach(() => {
    (useCancelTicket as jest.Mock).mockReturnValue({
      mutate: jest.fn()
    });
  });

  it('should display loading indicator', () => {
    (useTickets as jest.Mock).mockReturnValue({
      isLoading: true,
      data: undefined,
    });
    render(renderListBody());

    expect(screen.getByTestId('loading-indicator')).toBeInTheDocument();
  });

  it('should display the list of tickets', () => {
    (useTickets as jest.Mock).mockReturnValue({
      isLoading: false,
      data: tickets,
    });
    render(renderListBody());

    expect(screen.queryByTestId('loading-indicator')).not.toBeInTheDocument();
    tickets.forEach((ticket) => {
      expect(screen.getByText(`${ticket.user.firstName} ${ticket.user.lastName}`)).toBeInTheDocument();
    });
  });

  it('should display Nothing found when there are no tickets', () => {
    (useTickets as jest.Mock).mockReturnValue({
      isLoading: false,
      data: [],
    });
    render(renderListBody());
    
    expect(screen.getByText('Nothing found')).toBeInTheDocument();

  });

});
