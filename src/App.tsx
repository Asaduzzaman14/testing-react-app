import './App.css';
import PrimaryButton from './components/PrimaryButton';
import UserEvent from './components/UserEvent/UserEvent';
import UserTable from './components/UsersTable/UsersTable';
import FruitList from './components/fullList/fruitList';
import User from './components/user/User';



export const users = [
   {
      id: 1,
      name: 'user 1',
      age: 22
   },
   {
      id: 2,
      name: 'user 1',
      age: 44
   },
   {
      id: 3,
      name: 'user 1',
      age: 11
   }
];

function App() {

   // const fruits = ['apple', 'banana', 'orange'];
   const users = [
      {
         id: 1,
         name: 'user 1',
         age: 22
      },
      {
         id: 2,
         name: 'user 1',
         age: 44
      },
      {
         id: 3,
         name: 'user 1',
         age: 11
      }
   ];
   return (
      <div>
         <h1>Hello World</h1>
         {/* <PrimaryButton ></PrimaryButton>
         <PrimaryButton actionType="add"></PrimaryButton> */}

         {/* <User /> */}
         {/* <FruitList fruits={fruits} /> */}

         {/* <UserTable users={users} /> */}
         <UserEvent />
      </div>
   );
}

export default App;
