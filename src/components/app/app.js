import React, { Component } from 'react';
import ButtonAddTicket from '../button-add-ticket/button-add-ticket';
import RouteContainer from '../../containers/route-container/route-container';
// import { TicketInfo } from '../ticket-info/ticket-info';

import './app.css';

class App extends Component {
  render() {
    return (
      <div>
        <RouteContainer />
        <ButtonAddTicket />
        {/* <TicketInfo city={ticket.city} year={ticket.year} /> */}
      </div>
    );
  }
}

export default App;
