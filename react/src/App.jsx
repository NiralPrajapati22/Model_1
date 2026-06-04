import './App.css';
import Header from './header';
import Register from "./Register.jsx";
import DataFetcher from "./Products.jsx";

import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Cart from './cart.jsx';
import Products from './Products.jsx';
import Recipes from "./Recipes.jsx";
import WebsiteViewer from './Website';
import Counter from './Counter';
import Users from './Users';
function App() {
  return (

    <div>
      <Routes>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/Register' element={<Register />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/Recipes' element={<Recipes/>}></Route>
        <Route path='/Website' element={<WebsiteViewer />}></Route>
        <Route path='/Counter' element={<Counter />}></Route>
        <Route path='/Image_Gallery' element={<WebsiteViewer />}></Route>
        <Route path='Users' element={<Users />}></Route>
      </Routes>
      {/* <Header /> */}

      {/* <Register /> */}
      {/* <DataFetcher /> */}
      {/* <Recipes /> */}

    </div>
  );
}

export default App;