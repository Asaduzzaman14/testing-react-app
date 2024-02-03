import User from "./User";
import { render, screen } from "@testing-library/react";



// getByPlaceholderText
// getByAltText
// getByTitle
// getByDisplayValue

it('should be render the component', () => {
  render(<User />);



  const element = screen.getByRole('textbox', {
    name: 'Name'
  });
  const element2 = screen.getByLabelText('Email', {
    selector: 'input'
  });

  const handelElement = screen.getByRole('heading', {
    level: 2
  });

  const alt = screen.getByAltText('person'
  );
  const title = screen.getByTitle('open');

  const getByDisplayValue = screen.getByDisplayValue('me');

  const textId = screen.getByTestId('paragraph');


  const button = screen.queryByRole('button', {
    name: 'edit'
  });

  expect(button).not.toBeInTheDocument();

  expect(element2).toBeInTheDocument();
  expect(element).toBeInTheDocument();
  expect(handelElement).toBeInTheDocument();
  expect(alt).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(getByDisplayValue).toBeInTheDocument();
  expect(textId).toBeInTheDocument();

});

