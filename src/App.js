import { Provider } from 'react-redux';
import './App.css';
// import CustomHook from './Components/CustomHook/CustomHook';
// import Quiz from './Components/Quiz/Quiz';
// import Class from './Components/Class/Class';
// import Buttons from './Components/Buttons/Buttons';
// import FifaTourney from './Components/FifaTourney/FifaTourney';
// import Context from './Components/Context/Context';
// import CartExercise from './Components/CartExercise/CartExercise';
// import Redux from './Components/Redux/Redux';
// import CartClassExercise from './Components/CartClassExercise/CartClassExercise';
// import Reducer from './Components/Reducer/Reducer';
<<<<<<< HEAD


=======
import store from './Components/TodoRedux/app/store';
import Todo from './Components/TodoRedux/Todo';
>>>>>>> 718bf2517f2cfcf58f85b04b44b0be8e805045ea
function App() {
  return (
    <div className='App'>
      {/* <Context /> */}
      {/* <CartExercise /> */}
      {/* <Buttons /> */}
      {/* <FifaTourney /> */}
      {/* <Class /> */}
      {/* <CartClassExercise /> */}
      {/* <Reducer /> */}
      {/* <Quiz /> */}
      {/* <CustomHook /> */}
      <Provider store={store}>
        {/* <Redux /> */}
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
