import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreeen from './screens/RegisterScreeen';
import SellerPannel from './screens/SellerPannel';
import AddProduct from './components/addProduct';

function App() {
  return (
    <div className="App">

      {/* <Navbar /> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Navbar />}>
          <Route  index  element={<Homescreen />} />
            <Route path='/cart' exact  element={<CartScreen />} />
            </Route>
        </Routes>

      </BrowserRouter> */}
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          
            <Route path='/' element={<Homescreen />} />
            <Route path='/cart' exact element={<CartScreen />} />
            <Route path='/register' element={<RegisterScreeen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/sellerpanel' element={<SellerPannel />} />
            <Route path='/addproduct' element={<AddProduct />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
