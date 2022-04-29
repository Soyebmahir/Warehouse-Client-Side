
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Home/Footer/Footer';
import Header from './component/Home/Header/Header';
import Home from './component/Home/Home/Home';
import Inventory from './component/Others/Inventory/Inventory';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<Inventory></Inventory>}></Route>
      </Routes>
      <Footer></Footer>
      <h1>Hey there</h1>
    </div>
  );
}

export default App;
