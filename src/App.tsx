import './App.css';
import PrimaryButton from './components/PrimaryButton';
import FruitList from './components/fullList/fruitList';
import User from './components/user/User';
AnimationEffect;
function App() {

   const fruits = ['apple', 'banana', 'orange'];
   return (
      <div>
         <h1>Hello World</h1>
         {/* <PrimaryButton ></PrimaryButton>
         <PrimaryButton actionType="add"></PrimaryButton> */}

         <User />
         <FruitList fruits={fruits} />
      </div>
   );
}

export default App;
