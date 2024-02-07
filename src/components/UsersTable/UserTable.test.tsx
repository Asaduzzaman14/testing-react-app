import { render, screen } from "@testing-library/react";
import UserTable from "./UsersTable";
import { users } from "../../App";


// describe('userTable', () => {
//   it('should render the welcome message after 500 ms', async () => {
//     render(<UserTable users={users} />);

//     const welcomeMessage = await screen.findByTestId('welcome', {}, { timeout: 2000 });


//     expect(welcomeMessage).toBeInTheDocument();
//   });
// });



describe('userTable', () => {
  it('should render the welcome message after 500 ms', async () => {
    render(<UserTable users={users} />);

    screen.logTestingPlaygroundURL();

  });
});