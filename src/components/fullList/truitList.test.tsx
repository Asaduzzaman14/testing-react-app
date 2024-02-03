import { render, screen } from "@testing-library/react";
import FullList from "./fruitList";

// toHaveLength
// toBeInTheDocument

describe('FruitesList()', () => {
  const fruits = ['apple', 'banana', 'orange'];

  it('should be render list with items', () => {
    render(<FullList fruits={fruits} />);

    const list = screen.getByRole('list');

    const listItems = screen.getAllByRole('listitem');

    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(fruits.length);
  });

});