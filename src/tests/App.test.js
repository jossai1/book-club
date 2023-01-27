import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from "@testing-library/user-event";

describe('Home Component', () => {
  it('displays welcome Header Text', () => {
    render(<App />);

    const welcomeHeaderText = screen.getByText(/📕 Book Club for Baddies 💁🏾‍♀️/i);

    expect(welcomeHeaderText).toBeInTheDocument();
  });


  it('no results initially', () => {
    render(<App />);

    const noResultsText = screen.getByText(/No Results/i);

    expect(noResultsText).toBeInTheDocument();
  });


  it('shows loading text when typing', async () => {
    const searchQuery = 'hi there';
    const searchBoxTestId = 'search-box';
    render(<App/>);

    const searchBoxEl = await screen.getByTestId(searchBoxTestId);
    userEvent.type(searchBoxEl, searchQuery);

    expect(searchBoxEl).toHaveValue(searchQuery);
  });
})
