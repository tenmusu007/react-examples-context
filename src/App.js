import './App.css';
import { Provider } from "react-redux";

// import CustomHook from './Components/CustomHook/CustomHook';
// import Class from './Components/Class/Class';
// import Buttons from './Components/Buttons/Buttons';
// import FifaTourney from './Components/FifaTourney/FifaTourney';
// import Context from './Components/Context/Context';
// import CartExercise from './Components/CartExercise/CartExercise';
import Redux from './Components/Redux/Redux';
// import CartClassExercise from './Components/CartClassExercise/CartClassExercise';
// import Reducer from './Components/Reducer/Reducer';
// import store from './Components/TodoRedux/app/store';
// import Todo from './Components/TodoRedux/Todo';
import store from './Components/BlogPosts/app/store';
import BlogPosts from "../src/Components/BlogPosts/BlogPosts"
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
        {/* <Todo /> */}
        <BlogPosts />
      </Provider>
    </div>
  );
}

export default App;
