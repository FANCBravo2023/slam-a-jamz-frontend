import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header.js';
import { BrowserRouter } from 'react-router-dom';

describe("<Header />", () => {
	it("renders for the user", () => {
		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		)
    const home = screen.getByRole('img', {name: /Home button/i})
    expect(home).toBeInTheDocument()
    const events = screen.getByRole('img', {name: /events button/i})
    expect(events).toBeInTheDocument()
  })
})
