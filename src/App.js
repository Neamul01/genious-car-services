import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth'
import Register from './Pages/Register/Register';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Features from './Pages/Features/Features';
import ServiceDetails from './Pages/Home/Home/ServiceDetails/ServiceDetails';
import AddService from './Pages/AddService/AddService';
import ManageService from './Pages/ManageService/ManageService';
import Order from './Pages/Order/Order';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>

        <Route path='/addservice' element={
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>}>
        </Route>

        <Route path='/service' element={
          <RequireAuth>
            <ManageService></ManageService>
          </RequireAuth>
        }></Route>

        <Route path='/features' element={
          <RequireAuth>
            <Features></Features>
          </RequireAuth>
        }></Route>

        <Route path='/order' element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
