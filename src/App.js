
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/Authentication/Login/Login';
import Register from './component/Authentication/Register/Register';
import Footer from './component/Home/Footer/Footer';
import Header from './component/Home/Header/Header';
import Home from './component/Home/Home/Home';
import AddNewItem from './component/Others/AddNewItem/AddNewItem';
import Blogs from './component/Others/Blogs/Blogs';
import Inventory from './component/Others/Inventory/Inventory';
import ManageInventory from './component/Others/ManageInventory/ManageInventory';
import MyItems from './component/Others/MyItems/MyItems';
import NotFound from './component/Others/NotFound/NotFound';
import RequireAuth from './component/Others/RequireAuth/RequireAuth';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>}>
        </Route>

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='/manage' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>}>
        </Route>

        <Route path='/addItem' element={
          <RequireAuth>
            <AddNewItem></AddNewItem>
          </RequireAuth>}>
        </Route>

        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>}>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>




      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
