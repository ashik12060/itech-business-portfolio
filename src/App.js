import './App.css';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Products from './pages/Products/Products';
<<<<<<< HEAD
import Booking from './pages/Booking/Booking';
=======
import Footer from './pages/Footer/Footer';
>>>>>>> e2e3b9fb60f7e5c7ddc6c90976d30157bdbab061

function App() {
  return (
    <div>

      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home></Home>}>
        </Route>
        <Route path='/home' element={<Home></Home>}>
        </Route>
        <Route path='/products' element={<Products></Products>}>
        </Route>
        <Route path='/booking' element={<Booking></Booking>}>
        </Route>
        <Route path='/about' element={<About></About>}>
        </Route>
        <Route path='/contact' element={<Contact></Contact>}>
        </Route>

        <Route path="/products" element={<Products></Products>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
     
     

    </div>
  );
}

export default App;
