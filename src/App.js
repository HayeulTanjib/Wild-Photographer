import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Blog from './Components/Pages/Blog/Blog';
import CheckOut from './Components/Pages/CheckOut/CheckOut';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Login from './Components/Authentication/Login/Login';
import Register from './Components/Authentication/Register/Register';



function App() {
  return (
    <div>
      <Header/>
      <div className="container vh-100">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/checkout' element={<CheckOut/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
