import './App.css';
import Header from './header';
import Register from "./Register.jsx";
import DataFetcher from "./products.jsx";
import Recipes from "./recipes.jsx";
import Cart from "./cart.jsx";
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {
  return (

    <div>
      <Routes>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/Register' element={<Register />}></Route>
      </Routes>
      {/* <Header /> */}

      {/* <Register /> */}
      {/* <DataFetcher /> */}
      {/* <Recipes /> */}

    </div>
  );
}

export default App;