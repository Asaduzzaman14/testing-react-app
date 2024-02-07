import { render, screen } from "@testing-library/react";
import UserEvent from "./UserEvent";

import user from '@testing-library/user-event';

describe('UserEvent', () => {
  it('should be count with initial value of heading', () => {

    render(<UserEvent />);

    const heading = screen.getByRole('heading', {
      level: 3
    });

    expect(heading).toBeInTheDocument();
  });
});


describe('UserEvent', () => {
  it('should incress the love count clicking on incress button  ', async () => {

    user.setup();
    render(<UserEvent />);

    const incressButton = screen.getByText("Make her love you more!");

    await user.click(incressButton);


    const heading = screen.getByRole('heading', {
      level: 3
    });
    expect(heading).toHaveTextContent('Your girlfriend loves you 1 times!');

  });
});

