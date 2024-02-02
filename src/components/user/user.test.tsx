import User from "./User";
import { render, screen } from "@testing-library/react";





it('should be render the component', () => {
  render(<User />);



  const element = screen.getByRole('textbox', {
    name: 'Name'
  });

  const handelElement = screen.getByRole('heading', {
    level: 2
  });

  expect(element).toBeInTheDocument();
  expect(handelElement).toBeInTheDocument();

});