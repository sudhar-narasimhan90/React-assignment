import { fireEvent, render, screen } from '../../../test-utils';
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

describe('Delete ticket functionality', () => {

  beforeEach(() => {
    (useCancelTicket as jest.Mock).mockReturnValue({
      mutate: jest.fn()
    });
  });

  it('should display delete ticket icon when displaying the list of tickets', () => {
    (useTickets as jest.Mock).mockReturnValue({
      isLoading: false,
      data: tickets,
    });

    render(renderListBody());

    expect(screen.queryByTestId('loading-indicator')).not.toBeInTheDocument();
    expect(screen.queryAllByTestId('delete-icon').length).toEqual(tickets.length);
  });

  it('should call mutate when a particular ticket is deleted', () => {
    const mutateFunction = jest.fn();
    (useTickets as jest.Mock).mockReturnValue({
      isLoading: false,
      data: tickets,
    });
    (useCancelTicket as jest.Mock).mockReturnValue({
      mutate: mutateFunction
    });

    render(renderListBody());

    expect(screen.queryByTestId('loading-indicator')).not.toBeInTheDocument();
    expect(screen.queryAllByTestId('delete-icon').length).toEqual(tickets.length);

    // Click on the first delete icon
    fireEvent.click(screen.queryAllByTestId('delete-icon')[0]);
    expect(mutateFunction).toHaveBeenCalled();
  });
  
});
