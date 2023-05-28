import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import EventShow from '../pages/EventShow';


describe('EventShow', () => {
  it('should render the event details correctly', () => {


    render(
      <BrowserRouter >
          <EventShow />
      </BrowserRouter>
    )
    expect.toHaveTextContent(/return to event listings/i);
  })
})