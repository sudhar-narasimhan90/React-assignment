### No bootstrapping needed

First, install the dependencies:

```bash
yarn install
```

Then seed the database:

```bash
yarn seed
```

Now you can start the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Solution 
- Task A: Custom Hook has been implemented to delete ticket [https://github.com/sudhar-narasimhan90/Ticket-list/blob/master/hooks/useCancelTicket.ts](https://github.com/sudhar-narasimhan90/Ticket-list/blob/master/hooks/useCancelTicket.ts)
- Delete ticket functionality has been incorporated in here [https://github.com/sudhar-narasimhan90/Ticket-list/blob/d5b0bb3698baff4b7f332190411d95dcdde6f8e5/components/TicketsList/DeleteTicket.tsx](https://github.com/sudhar-narasimhan90/Ticket-list/blob/d5b0bb3698baff4b7f332190411d95dcdde6f8e5/components/TicketsList/DeleteTicket.tsx)
- Tests have been added for delete functionality [https://github.com/sudhar-narasimhan90/Ticket-list/blob/master/components/TicketsList/tests/DeleteTicket.test.tsx](https://github.com/sudhar-narasimhan90/Ticket-list/blob/master/components/TicketsList/tests/DeleteTicket.test.tsx)


- Task B: Logic to handle small devices is handled in [https://github.com/sudhar-narasimhan90/Ticket-list/blob/d5b0bb3698baff4b7f332190411d95dcdde6f8e5/components/TicketsList/ListItem.tsx](https://github.com/sudhar-narasimhan90/Ticket-list/blob/d5b0bb3698baff4b7f332190411d95dcdde6f8e5/components/TicketsList/ListItem.tsx)
- Corresponding tests (https://github.com/sudhar-narasimhan90/Ticket-list/blob/master/components/TicketsList/tests/TicketsList.test.tsx)


### Results

![](https://github.com/sudhar-narasimhan90/Ticket-list/blob/d8277cc30feaf2fe8e4238064950b438b4bd688a/delete-tickets.gif)
![](https://github.com/sudhar-narasimhan90/Ticket-list/blob/d8277cc30feaf2fe8e4238064950b438b4bd688a/screen-resize.gif)